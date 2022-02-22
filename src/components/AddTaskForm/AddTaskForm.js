import { Component } from 'react';
import './AddTaskForm.css'

class AddTaskForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        }
    }


    onInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render () {
        return (
            <form 
                className="d-flex add-task-form"
                onSubmit={this.onSubmit}>
                <input onChange={this.onInputChange} value={this.state.text} type="text" className="form-control" />
                <button type="submit" className="btn btn-light text-success text-nowrap">Add task</button>
            </form>
        )
    }
}

export default AddTaskForm;