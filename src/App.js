import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

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

    handleIncQty = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products // We can also write products only as Shorthand rule
        })
    }

    handleDecQty = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        // Checking if the Qty is not already 0
        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id); // [{}]

        this.setState({
            products: items
        })
    }

    getCartCount = () => {
        const { products } = this.state;
        let count = 0;

        // Counting Total no. of Quantity of each products
        products.forEach((product) => {
            count += product.qty;
        })
        return count;
    }

    render() {
        const { products } = this.state;
        return (
            <div className="App" >
                <Navbar count={this.getCartCount()} />
                <Cart
                    products={products}
                    onIncQty={this.handleIncQty}
                    onDecQty={this.handleDecQty}
                    onDeleteProduct={this.handleDeleteProduct}
                />
            </div>
        );
    }
}

export default App;
