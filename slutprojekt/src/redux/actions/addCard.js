import actionTypes from "./actionTypes";
import uniqid from 'uniqid';

const addCard = (task, cardState) => {
    return {
        type: actionTypes.ADD_CARD,
        card: {
            id: uniqid(),
            task: task,
            cardState: cardState
        }
    }
}
export default addCard;