import React, { useState } from "react";
import styled from "styled-components";
import { getStoreItemArray } from "../reducers";
import { clearCart } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { COLORS } from "../constant";
import UnstyledButton from "./UnstyledButton";

// colors:
const Cart = () => {
  const dispatch = useDispatch();
  const storeItems = useSelector(getStoreItemArray);
  const [drop, setDrop] = useState(false);
  const [tax, setTax] = useState(0);

  return (
    <CartWrapper>
      <CartInnerWrapper>
        <CartHeader>
          <div>
            Your Cart<CartCount>{storeItems.length} Item</CartCount>
          </div>
          <CartButton onClick={() => dispatch(clearCart())}>Clear</CartButton>
        </CartHeader>
        <CartDrop>
          <CartMenu onClick={() => setDrop(!drop)}>
            Click to select your province.
          </CartMenu>
          {drop && (
            <>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("AL"));
                }}
              >
                Alberta
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("BC"));
                }}
              >
                British Columbia
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("MT"));
                }}
              >
                Manitoba
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("NB"));
                }}
              >
                New-Bruinswick
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("NL"));
                }}
              >
                Newfoundland/Labrador
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("NT"));
                }}
              >
                Northwest Territories
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("NS"));
                }}
              >
                Nova Scotia
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("NA"));
                }}
              >
                Nunavut
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("ON"));
                }}
              >
                Ontario
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("PE"));
                }}
              >
                PEI
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("QC"));
                }}
              >
                Quebec
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("ST"));
                }}
              >
                Saskatchewan
              </CartP>
              <CartP
                onClick={() => {
                  setDrop(false);
                  setTax(handleTaxRate("TK"));
                }}
              >
                Yukon
              </CartP>
            </>
          )}
        </CartDrop>
        <CartItemWrapper>
          {storeItems.map((ele, ind) => {
            return <CartItem key={`${ele.id}-${ind}`} item={ele} />;
          })}
        </CartItemWrapper>
      </CartInnerWrapper>
      <CartFooter>
        {tax !== 0 ? (
          <CartTotal>
            Total:&nbsp;
            <CartTotalSub>{`$ ${calculateTotal(
              storeItems,
              tax
            )}`}</CartTotalSub>
          </CartTotal>
        ) : (
          <CartTotal>Please select your area first!</CartTotal>
        )}
        <CartButton>Purchse</CartButton>
      </CartFooter>
    </CartWrapper>
  );
};

const calculateTotal = (storeItems, tax) => {
  let k = 0;
  storeItems.forEach(
    (ele) => (k += (ele.quantity * (ele.price + tax * ele.price)) / 100)
  );
  return k.toFixed(2);
};

export default Cart;

const CartHeader = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
const CartInnerWrapper = styled.div``;
const CartItemWrapper = styled.div`
  margin-top: 10px;
`;
const CartCount = styled.div`
  color: ${COLORS.lightGray};
  font-size: 0.8em;
`;
const CartFooter = styled.div`
  height: 200px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;
const CartDrop = styled.div`
  margin-top: 10px;
  border: 1px solid white;
`;
const CartMenu = styled(UnstyledButton)`
  color: white;
  font-size: 0.7em;
`;
const CartP = styled(UnstyledButton)`
  width: 100%;
  height: auto;
  color: white;
  font-size: 0.7em;
  :hover {
    background: ${COLORS.lightGray};
  }
`;
const CartButton = styled(UnstyledButton)`
  background: ${COLORS.buttonPink};
  padding: 5px;
  width: 80px;
  text-align: center;
  line-height: 20px;
  border-radius: 5px;
`;
const CartClear = styled(UnstyledButton)``;
const CartTotal = styled.div``;
const CartTotalSub = styled.div`
  font-weight: 600;
`;
const CartWrapper = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 100%;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const handleTaxRate = (selection) => {
  switch (selection) {
    case "AL": {
      return 0.05;
    }
    case "BC": {
      return 0.12;
    }
    case "MT": {
      return 0.15;
    }
    case "NB": {
      return 0.15;
    }
    case "NL": {
      return 0.15;
    }
    case "NT": {
      return 0.05;
    }
    case "NS": {
      return 0.15;
    }
    case "NA": {
      return 0.05;
    }
    case "ON": {
      return 0.13;
    }
    case "PE": {
      return 0.15;
    }
    case "QC": {
      return 0.14975;
    }
    case "ST": {
      return 0.11;
    }
    case "YK": {
      return 0.05;
    }
    default:
      return 0;
  }
};
const k = `<CartDrop>
<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item>Alberta</Dropdown.Item>
  <Dropdown.Item>British Columbia</Dropdown.Item>
  <Dropdown.Item>Manitoba</Dropdown.Item>
  <Dropdown.Item>New-Bruinswick</Dropdown.Item>
  <Dropdown.Item>Newfoundland/Labrador</Dropdown.Item>
  <Dropdown.Item>Northwest Territories</Dropdown.Item>
  <Dropdown.Item>Nova Scotia</Dropdown.Item>
  <Dropdown.Item>Nunavut</Dropdown.Item>
  <Dropdown.Item>Ontario</Dropdown.Item>
  <Dropdown.Item>PEI</Dropdown.Item>
  <Dropdown.Item>Quebec</Dropdown.Item>
  <Dropdown.Item>Saskatchewan</Dropdown.Item>
  <Dropdown.Item>Yukon</Dropdown.Item>
</DropdownButton>
</CartDrop>`;
