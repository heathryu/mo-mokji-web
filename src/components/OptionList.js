import React from 'react';

import styled from 'styled-components';

import ButtonLink from './ButtonLink';
import Option from './Option';

const OptionListHeader = styled.div`
  background: #3f6aae;
  color: #eeeae3;
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

const OptionListHeaderTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const OptionsTable = styled.div`
  background: #87a4c8;
  color: #eeeae3;
`;

const OptionList = props => {
  return (
    <div>
      <OptionListHeader>
        <OptionListHeaderTitle>먹방 리스트</OptionListHeaderTitle>
        <ButtonLink onClick={props.handleRemoveAllOptions}>
          나 이제 배불러
        </ButtonLink>
      </OptionListHeader>
      <OptionsTable>
        {props.items.map((item, index) => (
          <Option
            key={index}
            text={item}
            handleRemoveOption={props.handleRemoveOption}
          />
        ))}
      </OptionsTable>
    </div>
  );
};

export default OptionList;
