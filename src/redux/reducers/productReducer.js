import { ActionTypes } from "../contants/action-types";

const instialState = {
    products: [],
}

export const productReducer = (state = instialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUTC:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};