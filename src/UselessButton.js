import React from "react";

export function UselessButton() {
  const isUselessString = this.props.buttonStatus
    ? "This is a useless button."
    : "This is a useful button.";
  return <button onClick={this.props.onClick}>{isUselessString}</button>;
}
