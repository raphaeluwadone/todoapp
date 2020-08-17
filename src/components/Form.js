import React, { Component } from "react";
import Listitems from "./Listitems";
import "./forms.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentEvent: {
        text: "",
        key: "",
      },
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }
  handleEvent = (e) => {
    this.setState({
      currentEvent: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addEvent = (e) => {
    e.preventDefault();
    let newEvent = this.state.currentEvent;
    if (newEvent.text !== "") {
      let nextEvent = [...this.state.items, newEvent];
      this.setState({
        items: nextEvent,
        currentEvent: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteEvent = (key) => {
    let filtered = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filtered,
    });
  };


  render() {
    return (
      <div className='main'>
        <form className='form-group' onSubmit={this.addEvent}>
          <input
            type='text'
            value={this.state.currentEvent.text}
            onChange={this.handleEvent}
            placeholder='Enter New Event:'
            className='input'
          />
          <button className='btn'>
            ADD
          </button>
        </form>
        <Listitems item={this.state.items} deleteButton={this.deleteEvent} />
      </div>
    );
  }
}

export default Form;
