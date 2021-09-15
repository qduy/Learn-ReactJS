import * as types from './../constants/ActionTypes'

export const actAddToCart = (product, quantity) => {
    return { 
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const deleteProduct = (product) => {
    return { 
        type : types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const updateQuantity = (product, quantity) => {
    return {
        type : types.UPDATE_QUANTITY,
        product, 
        quantity
    }
}