import React from 'react';

import { connect } from 'react-redux';
import { removeOption } from '../actions/options';

const Option = props => {
  return (
    <div>
      {props.text}{' '}
      <button onClick={e => props.removeOption(props.text)}>삭제</button>
    </div>
  );
};

const mapDispatchToProps = {
  removeOption
}

export default connect(null, mapDispatchToProps)(Option);
