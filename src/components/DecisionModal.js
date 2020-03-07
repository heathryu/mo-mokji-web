import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { clearSelectedOption } from '../actions/selectedOption';

Modal.setAppElement('#root');

const DecisionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      style={{
        overlay: {},
        content: {
          maxWidth: '30rem',
          height: '12rem',
          margin: '10rem auto',
          top: 0,
          bottom: 0,
          left: '3rem',
          right: '3rem',
          padding: 0
        }
      }}
    >
      <h3>오늘은..</h3>
      <p>
        {props.selectedOption} 먹자{' '}
        <span role="img" aria-label="pig">
          🐷
        </span>
      </p>
      <button onClick={props.clearSelectedOption}>좋아</button>
    </Modal>
  );
};

const mapStateToProps = state => ({
  selectedOption: state.selectedOption
});

const mapDispatchToProps = {
  clearSelectedOption
};

export default connect(mapStateToProps, mapDispatchToProps)(DecisionModal);
