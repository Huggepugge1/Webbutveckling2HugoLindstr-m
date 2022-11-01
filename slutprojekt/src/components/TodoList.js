import React from 'react'
import { connect } from 'react-redux';

import addCard from '../redux/actions/addCard';

import Todo from './Todo';


class TodoList extends React.Component {

  render() {
    return (
      <div className="card-container">
      {this.props.todos.filter(card => card.cardState === "TODO").length ? this.props.todos.filter(card => card.cardState === "TODO").map((todo) => {
        return <Todo key={todo.id} todo={todo}/>
      }) : <>You have nothing todo</>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.card
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
