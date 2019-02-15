import React, { useRef } from "react";

const Nickname = ({ set }) => {
  const inputRef = useRef(null);

  const onClick = () => {
    const nick = inputRef.current.value;
    if (nick && nick !== "") {
      set(nick);
      return;
    }
    alert("Unacceptable nick!");
  };
  
  return (
    <div className="modal">
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>Accept nickname</button>
    </div>
  );
};

export default Nickname;
