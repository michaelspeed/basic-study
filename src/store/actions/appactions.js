import * as types from "./types";

export function changeValue(payload) {
    return {
        type: types.CHANGE,
        payload
    }
}
