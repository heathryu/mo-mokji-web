import React from 'react';
import styled from 'styled-components';

import ButtonLink from './ButtonLink';

const StyledOption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 0.1em solid #7794b8;
  color: #ffeed3;
`;

const Option = props => {
  return (
    <StyledOption>
      {props.text}{' '}
      <ButtonLink onClick={e => props.handleRemoveOption(props.text)}>
        삭제
      </ButtonLink>
    </StyledOption>
  );
};

export default Option;
