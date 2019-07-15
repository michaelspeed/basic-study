import createReducer from "./createReducer";
import * as types from '../actions/types'

const initialState = {
    value: 1,
    newValue: null
};

export const appReducer = createReducer(initialState , {
    [types.CHANGE](state, action) {
        return {
            ...state,
            value: state.value + 1,
            newValue: action.payload
        }
    }
});
