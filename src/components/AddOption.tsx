import React, { useState } from 'react';

type AddOptionProps = {
  addNewOption: (option: string) => void;
};

const AddOption: React.FC<AddOptionProps> = (props) => {
  const [option, setOption] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setOption(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log((event.target as HTMLFormElement).elements);

    props.addNewOption(option.trim());
    setOption('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="option" onChange={handleChange} value={option} />
      <button>추가</button>
    </form>
  );
};

export default AddOption;
