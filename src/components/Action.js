import React from 'react';

import { connect } from 'react-redux';
import { setSelectedOption } from '../actions/selectedOption';

const Action = ({ options, setSelectedOption }) => {
  const handlePick = () => {
    const randomIndex = Math.floor(Math.random() * options.length);

    setSelectedOption(options[randomIndex]);
  };

  return (
    <div>
      <button disabled={options.length === 0} onClick={handlePick}>
        정해줘
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  options: state.options
});

const mapDispatchToProps = {
  setSelectedOption
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
