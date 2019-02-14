import React, { Component } from "react";
import openSocket from "socket.io-client";
import update from "immutability-helper";
import { useChat } from "./socketHooks";

export class ClassSockets extends Component {
  state = {
    socket: openSocket("http://localhost:3003"),
    messages: [],
    nickname: "",
    message: ""
  };

  componentDidMount() {
    this.state.socket.on("chat message", (nickname, message) => {
      const newState = update(this.state, {
        messages: { $push: [`${nickname}: ${message}`] }
      });
      this.setState(newState);
    });
  }

  handleClick = () => {
    this.state.socket.emit(
      "chat message",
      this.state.nickname,
      this.state.message
    );
    this.setState({ message: "" });
  };

  handleChange = event => this.setState({ message: event.target.value });

  handleNickname = event => this.setState({ nickname: event.target.value });

  render() {
    return (
      <div>
        <h1>Sockets</h1>
        <div>
          {this.state.messages.map(message => (
            <div>{message}</div>
          ))}
        </div>
        <input
          type="text"
          value={this.state.nickname}
          onChange={this.handleNickname}
          placeholder="Set nickname"
        />
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Send Message</button>
      </div>
    );
  }
}

export const HookSockets = () => {
  const { messages } = useChat();
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};
