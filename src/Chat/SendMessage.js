import React, { useRef } from "react";

export const SendMessage = ({ publish, startTyping }) => {
  const inputRef = useRef(null);

  const onSendMessage = () => {
    const message = inputRef.current.value;
    if (message && message !== "") {
      publish(message);
      inputRef.current.value = "";
      return;
    }
    alert("Empty message!");
  };

  const onKeyDown = event => {
    startTyping();
    if (event.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" onKeyDown={onKeyDown} />
      <button onClick={onSendMessage}>Publish</button>
    </div>
  );
};
