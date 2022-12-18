import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return <CartItem
                    product={product}
                    key={product.id}
                    onIncQty={props.onIncQty}
                    onDecQty={props.onDecQty}
                    onDeleteProduct={props.onDeleteProduct}
                />
            })}
        </div>
    )
}

export default Cart;