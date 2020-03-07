import React from 'react';
import { connect } from 'react-redux';

import { addOption } from '../actions/options';

const AddOption = ({ options, addOption }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const newOption = event.target.elements.option.value.trim();

    if (newOption && !options.includes(newOption)) {
      addOption(newOption);
    }

    event.target.elements.option.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="option" />
      <button>추가</button>
    </form>
  );
};

const mapStateToProps = state => ({
  options: state.options
});

const mapDispatchToProps = {
  addOption
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOption);
