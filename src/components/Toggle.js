import React, { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  const color = isToggled ? 'red' : 'white';
  function handleClick() {
    setIsToggled(prevState => !prevState);
  }

  return <button style={{ background: color }} onClick={handleClick}>{isToggled ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
