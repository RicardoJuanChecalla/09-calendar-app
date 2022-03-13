import { types } from "../types/types";

const initialState = {
    modalOpen: false,
}

export const uiRecuder = ( state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModal:
            return{
                ...state,
                modalOpen: true
            }
        case types.uiCloseModal:
            return{
                ...state,
                modalOpen: false
            }    
        default:
            return state;
    }
}
