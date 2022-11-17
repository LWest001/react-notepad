import React from "react";
import { useState } from "react";
import { UselessButton } from "./UselessButton";

export function ButtonDiv() {
  const [isUseless, setisUseless] = useState(true);

  const toggleUsefulness = () => {
    setisUseless(!isUseless);
  };

  return (
    <div>
      <UselessButton buttonStatus={isUseless} onClick={toggleUsefulness} />
    </div>
  );
}
