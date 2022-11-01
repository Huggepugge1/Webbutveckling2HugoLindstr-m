import React from 'react';
import { connect } from 'react-redux';

import addCard from '../redux/actions/addCard';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        if (this.state.value === "") return
        e.preventDefault();
        this.props.addCard(this.state.value, "TODO");
        this.state.value = "";
    }

    render() {
        return (
            <div className="add-todo flex flex-wrap">
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
                    <button className="add-todo-button flex" onClick={this.handleSubmit}>Add Todo</button>
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
    return {
        addCard: (task, cardState) => dispatch(addCard(task, cardState))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);