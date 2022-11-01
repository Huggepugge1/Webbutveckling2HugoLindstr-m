import React from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import CompleteList from './components/CompleteList';
import AddTodo from './components/AddTodo';
import addCard from './redux/actions/addCard';

class App extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap container">
        <AddTodo />
        <TodoList />
        <CompleteList />
      </div>
      )
  };
}

export default App;