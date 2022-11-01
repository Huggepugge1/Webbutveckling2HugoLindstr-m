import actionTypes from "./actionTypes";

const changeCardState = (id, newState) => {
    return {
        type: actionTypes.CHANGE_CARD_STATE,
        id: id,
        newState: newState
    }
}

export default changeCardState;