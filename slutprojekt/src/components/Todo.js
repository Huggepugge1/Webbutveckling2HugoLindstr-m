import React from 'react'
import { connect } from 'react-redux';

import changeCardState from '../redux/actions/changeCardState'

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    console.log(this.props.todo);
    if (this.props.todo.cardState === "TODO") {
      this.props.changeCardState(this.props.todo.id, "COMPLETE");
    } else if (this.props.todo.cardState === "COMPLETE") {
      this.props.changeCardState(this.props.todo.id, "TODO");
    }
  }

  render() {
    return (<>
      <div className="card">
        {this.props.todo.task}
        {this.props.todo.cardState}
        <button onClick={this.handleChange}>ChangeState</button>
      </div>
    </>);
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCardState: (id, newState) => dispatch(changeCardState(id, newState))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);