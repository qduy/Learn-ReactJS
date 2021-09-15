import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as message from './../constants/Message';
//import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';
import * as actions from './../actions/index'
class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>
        );
    }
    
    showCartItem = (cart) => {
        var result = message.MSG_CART_EMPTY;
        if(cart.length > 0){
            result = cart.map((item, index)=>{
                return (
                    <CartItem 
                        key = {index}
                        item = {item}
                        onDeleteProduct = {this.props.onDeleteProduct}
                        onChangeMessage = {this.props.onChangeMessage}
                        onUpdateQuantity = {this.props.onUpdateQuantity}
                    />
                );
            })
        }

        return result
    }

    showCartResult = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = {cart}/> 
        }
        return result
    }
    

    

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct : (product) => {
            dispatch(actions.deleteProduct(product))
        },
        onChangeMessage : (message) => {
            dispatch(actions.changeMessage(message))
        },
        onUpdateQuantity : (product, quantity) => {
            dispatch(actions.updateQuantity(product, quantity))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);