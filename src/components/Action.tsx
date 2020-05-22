import React from "react";

type ActionProps = {
  hasOptions: boolean;
  handlePick: React.MouseEventHandler<HTMLButtonElement>;
};

const Action: React.FC<ActionProps> = ({ hasOptions, handlePick }) => {
  return (
    <div>
      <button disabled={!hasOptions} onClick={handlePick}>
        정해줘
      </button>
    </div>
  );
};

export default Action;
