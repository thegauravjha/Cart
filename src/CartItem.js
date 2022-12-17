import React from "react";

class CartItem extends React.Component {

    // INCREASING QUANTITY
    increaseQuantity = () => {

        // // Method 1: -> prevState won't required
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // // Method 2: -> prevState is required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    };

    // DECREASING QUANTITY
    decreaseQuantity = () => {

        // // Method 2: -> prevState is required
        this.setState((prevState) => {
            return {
                qty: (prevState.qty > 0) ? prevState.qty - 1 : 0
            }
        });
    };

    render() {
        const { title, price, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: ' #777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/484/484662.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc',
    }
}

export default CartItem;