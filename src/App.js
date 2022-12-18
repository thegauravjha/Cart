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
                    title: 'Rucksack',
                    price: 99,
                    qty: 10,
                    img: 'https://m.media-amazon.com/images/I/91yxG2qffpS._UX679_.jpg'
                },
                {
                    id: 2,
                    title: 'iPhone 12',
                    price: 540,
                    qty: 4,
                    img: 'https://m.media-amazon.com/images/I/711wsjBtWeL._SX679_.jpg'
                },
                {
                    id: 3,
                    title: 'Monitor',
                    price: 1024,
                    qty: 2,
                    img: 'https://m.media-amazon.com/images/I/81bGoTqXEKL._SX522_.jpg'
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

    getCartTotal = () => {
        const { products } = this.state;
        let cartTotal = 0;

        // Counting Total Price of Cart items
        products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price
        })
        return cartTotal;
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
                <div style={styles.total}>Total: {this.getCartTotal()}</div>
            </div>
        );
    }
}

const styles = {
    total: {
        fontSize: 20,
        padding: 10,
    }
}

export default App;
