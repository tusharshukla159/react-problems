import React from "react";
import { useCart } from "./CartContext";

const Twenty = () => {
  const products = [
    { Name: "Product-A", id: 1 },
    { Name: "Product-B", id: 2 },
    { Name: "Product-C", id: 3 },
  ];
  const { cartState, cartDispatch } = useCart()
  const addTodo = (product) => {
    const existingItem= cartState.cartItems.find((cartItem)=> cartItem.id===product.id)
    if(existingItem){
      cartDispatch({type:'Update-Cart', payload: {id:existingItem.id, quantity: existingItem.quantity+1}})
    }
    else{
    cartDispatch({ type: 'Add-todo', payload: { ...product, quantity: 1 } });
  }};

  const updateQuantity=(id, quantity)=>{
    cartDispatch({ type: 'Update-Cart', payload: {id:id, quantity:quantity}})
  };
  const removeFromCart=(id)=>{
    cartDispatch({type:'Remove-From-Cart' , payload:{id:id}})
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
      {cartState.cartItems.map((item) => (
        //{console.log(item)}
        <li key={item.id}>
          {item.Name}- {item.quantity}
          <button onClick={()=>updateQuantity(item.id,item.quantity+1)}>+</button>
          <button onClick={()=>updateQuantity(item.id,item.quantity-1)}>-</button>
          <button onClick={()=>removeFromCart(item.id)}>Remove From Cart</button>
        </li>
      ))}
      </ul>
      <h2>Products List</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.Name}
              <button onClick={()=>addTodo(product)}>Add-Todo</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Twenty;
