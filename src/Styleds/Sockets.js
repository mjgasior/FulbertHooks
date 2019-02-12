import React, { Component } from "react";
import openSocket from "socket.io-client";
import update from "immutability-helper";
import { useChat } from "./socketHooks";

export class ClassSockets extends Component {
  state = {
    socket: openSocket("http://localhost:3003"),
    messages: []
  };

  componentDidMount() {
    this.state.socket.on("chat message", msg => {
      const newState = update(this.state, {
        messages: { $push: [msg] }
      });
      this.setState(newState);
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

export const HookSockets = () => {
  const { messages, send } = useChat();
  return (
    <div>
      <div>Sockets</div>
      <div>{messages}</div>
      <button onClick={() => send("Sample text")}>Send Message</button>
    </div>
  );
};
