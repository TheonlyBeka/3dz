import {types} from "../types";

const initialState = {
    title: "old title"
}


export default function titleReducer(state = initialState, action) {

    switch (action.type) {
        case types.WITH_PARAMS:
            return {...state, title: action.payload}

        case types.CHANGE_TITLE:
            return {...state, title: "new title"}
        default: return state
    }
}