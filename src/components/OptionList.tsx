import React from 'react';

import Option from './Option';

type OptionListProps = {
  items: string[];
  handleRemoveAllOptions: React.MouseEventHandler<HTMLButtonElement>;
  handleRemoveOption: (option: string) => void;
};

const OptionList: React.FC<OptionListProps> = ({
  items,
  handleRemoveAllOptions,
  handleRemoveOption,
}) => {
  return (
    <div>
      <button onClick={handleRemoveAllOptions}>나 이제 배불러</button>
      {items.map((item, index) => (
        <Option
          key={index}
          text={item}
          handleRemoveOption={handleRemoveOption}
        />
      ))}
    </div>
  );
};

export default OptionList;
