import actionTypes from '../actions/actionTypes';

const initialState = [
    {
        id: 1,
        task: "Wash the car",
        cardState: "TODO"
    }   
]

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CARD:
            console.log(action.card, ...state)
            return [ ...state, action.card ];
        
        case actionTypes.CHANGE_CARD_STATE:
            let newState = [ ...state ]
            return newState.map(card => {
                if (card.id != action.id) return card
                else return { ...card, cardState: action.newState }
            })

        default:
            return state;
    }
} 

export default cardReducer;