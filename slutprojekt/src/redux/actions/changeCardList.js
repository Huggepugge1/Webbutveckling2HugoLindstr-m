import actionTypes from "./actionTypes";

const changeCardList = (task, cardId, newList) => {
    return {
        type: actionTypes.CHANGE_CARD_LIST,
        card: {
            id: cardId,
            task: task,
            listId: newList
        }
    }
}

export default changeCardList;