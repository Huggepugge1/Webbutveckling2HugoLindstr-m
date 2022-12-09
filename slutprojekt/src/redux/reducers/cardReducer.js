import actionTypes from '../actions/actionTypes';
import cardInitialState from '../cardInitialState';

const cardReducer = (state = cardInitialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CARD:
            return [...state, action.card];

        case actionTypes.CHANGE_CARD_LIST:
            const newState = state.filter(e => e.id !== action.card.id);
            return [...newState, action.card];

        case actionTypes.DELETE_CARD:
            return state.filter(e => e.id !== action.id)

        default:
            return state;
    }
};

export default cardReducer;