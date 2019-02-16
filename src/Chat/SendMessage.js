import React, { useRef } from "react";

export const SendMessage = ({ nickname, publish }) => {
  const inputRef = useRef(null);

  const onSendMessage = () => {
    const message = inputRef.current.value;
    if (message && message !== "") {
      publish(nickname, message);
      inputRef.current.value = "";
      return;
    }
    alert("Empty message!");
  };

  const onKeyDown = event => {
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
