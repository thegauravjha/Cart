import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'Watch',
                    price: 99,
                    qty: 10,
                    img: ''
                },
                {
                    id: 2,
                    title: 'Mobile Phone',
                    price: 540,
                    qty: 4,
                    img: ''
                },
                {
                    id: 3,
                    title: 'Laptop',
                    price: 1024,
                    qty: 2,
                    img: ''
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem product={product} key={product.id} />
                })}
            </div>
        )
    }
}

export default Cart;