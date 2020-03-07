import React from 'react';
import { connect } from 'react-redux';

import Option from './Option';
import { removeAllOptions } from '../actions/options';

const OptionList = props => {
  return (
    <div>
      <button onClick={props.removeAllOptions}>나 이제 배불러</button>
      {props.options.map((option, index) => (
        <Option
          key={index}
          text={option}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ options: state.options });
const mapDispatchToProps = {
  removeAllOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionList);
