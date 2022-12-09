import actionTypes from "./actionTypes";
import uniqid from 'uniqid';

const addCard = (listId, task) => {
    return {
        type: actionTypes.ADD_CARD,
        card: {
            id: uniqid(),
            task: task,
            listId: listId
        }
    }
}
export default addCard;