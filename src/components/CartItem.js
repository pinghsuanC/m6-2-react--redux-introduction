import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem, getState, updateQuantity } from "../actions";
import { COLORS, LOGOS } from "../constant";
import UnstyledButton from "../components/UnstyledButton";
/*
    id: "alpaca"
    price: 299
    quantity: 4
    title: "Pink Alpaca"
*/
// dispatch operations: removeItem

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, quantity, title } = item;

  return (
    <CartItemWrapper>
      <CartItemTop>
        <ItemTitle>{title}</ItemTitle>
        <CartItemCancle onClick={() => dispatch(removeItem({ ...item }))}>
          <LOGOS.IconCancel size={15} />
        </CartItemCancle>
      </CartItemTop>
      <CartItemBottom>
        <ItemTitle>
          Quantity: &nbsp;&nbsp;
          <CartItemQuan
            required
            value={`${quantity}`}
            onChange={(ev) => {
              // parse to integer
              if (!isNaN(parseInt(ev.target.value))) {
                dispatch(updateQuantity(item, parseInt(ev.target.value)));
              } else {
                dispatch(updateQuantity(item, ""));
              }
            }}
          />
        </ItemTitle>
      </CartItemBottom>
    </CartItemWrapper>
  );
};

export default CartItem;

const ItemTitle = styled.div``;
const CartItemWrapper = styled.div`
  color: white;
  height: 60px;
  border: 1px dashed #543756;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CartItemCancle = styled(UnstyledButton)`
  height: 25px;
`;
const CartItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;
const CartItemBottom = styled.div`
  height: 50%;
  background: ${COLORS.darkPurple};
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  font-size: 0.65em;
`;
const CartItemQuan = styled.input`
  color: white;
  width: 30px;
  height: 18px;
  text-align: center;
  background: transparent;
  border: 0px;
  border-bottom: 2px solid white;

  :focus {
    outline: none;
  }
`;
