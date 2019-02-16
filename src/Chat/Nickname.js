import React, { useRef } from "react";

const Nickname = ({ set }) => {
  const inputRef = useRef(null);

  const onAcceptNickname = () => {
    const nick = inputRef.current.value;
    if (nick && nick !== "") {
      set(nick);
      return;
    }
    alert("Unacceptable nick!");
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      onAcceptNickname();
    }
  };

  return (
    <div className="modal">
      <input ref={inputRef} type="text" onKeyDown={onKeyDown} />
      <button onClick={onAcceptNickname}>Accept nickname</button>
    </div>
  );
};

export default Nickname;
