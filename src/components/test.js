import React, { Component } from 'react'
import './forms.css'
import Listitems from "./Listitems"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentEvent: {
                event: "",
                key: ""
            }
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.addEvent = this.addEvent.bind(this)
    }
    handleEvent = (e) => {
        this.setState({
            currentEvent: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    addEvent = (e) => {
        e.preventDefault()
        let newEvent = this.state.currentEvent
        if (newEvent.event !== "") {
            let newEvents = [...this.state.list, newEvent]
            this.setState({
                list: newEvents,
                currentEvent: {
                    event: "",
                    key: ""
                }
            })
        }
    }
    render() {
        return (
            <div className="main">
                <form className="form-group" onSubmit={this.addEvent}>
                    <input type="text"
                        className="form-control" placeholder="Enter New Task" value={this.state.currentEvent.event} onChange={this.handleEvent} />
                    <input className="btn" type="submit" value="ADD" />
                </form>
                <Listitems item={this.state.list} action={this.state.currentEvent} />
            </div>

        )
    }
}



export default Form