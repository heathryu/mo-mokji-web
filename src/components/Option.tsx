import React from 'react';

type OptionProps = {
  text: string;
  handleRemoveOption: (option: string) => void;
};

const Option: React.FC<OptionProps> = ({ handleRemoveOption, text }) => {
  return (
    <div>
      {text} <button onClick={() => handleRemoveOption(text)}>삭제</button>
    </div>
  );
};

export default Option;
