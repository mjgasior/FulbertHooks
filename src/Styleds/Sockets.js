import React, { Component } from "react";
import openSocket from "socket.io-client";
import update from "immutability-helper";

class Sockets extends Component {
  state = {
    socket: openSocket("http://localhost:3003"),
    messages: []
  };

  componentDidMount() {
    this.state.socket.on("chat message", msg => {
      console.log(msg);
      const messages = this.state.messages.slice(0);
      messages.push(msg);
      this.setState({ messages });
      /*this.setState(prevState => {
        const newData = update(prevState, {
          messages: { $push: [msg] }
        });
        return { messages: newData };
      });*/
    });
  }

  handleClick = () => {
    this.state.socket.emit("chat message", "Sample message from React!");
  };

  render() {
    return (
      <div>
        <div>Sockets</div>
        <div>{this.state.messages}</div>
        <button onClick={this.handleClick}>Send Message</button>
      </div>
    );
  }
}

export default Sockets;
