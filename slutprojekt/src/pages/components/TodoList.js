import React from 'react'
import {connect} from 'react-redux';
import AddCard from './AddCard';

import Todo from './Todo';

class TodoList extends React.Component {
    componentDidMount() {
        setInterval(() => {
            const list = document.getElementById(`list${this.props.listId}`);
            const len = Object.keys(this.props.lists).length;
            list.style.width = `${100 / len - 3}vw`;
        }, 10);
    }

    getCards = () => {
        return this.props.cards.filter(e => e.listId === this.props.listId);
    };

    render() {
        return (
            <div id={`list${this.props.listId}`} className="card-list">
                <AddCard listId={this.props.listId}/>
                <div className="card-container">
                    {this.getCards().map((e) => <Todo key={e.id} listId={this.props.listId} todo={e}/>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);