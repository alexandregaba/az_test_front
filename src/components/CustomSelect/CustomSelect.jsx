import React from 'react';
import styled from 'styled-components';

const CustomSelectContainer = styled.div`
  position: relative;
  font-family: Arial;
  width: 100%;
  margin-left: 10px;
  font-size: 1rem;

  &:after {
    position: absolute;
    content: '';
    top: ${props => (props.isOpened ? '4px' : '11px')};
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: ${props =>
      props.isOpened
        ? 'transparent transparent #fff transparent'
        : '#fff transparent transparent transparent'};
  }
`;

const OptionsList = styled.div`
  background-color: #dcdcdc;
`;

const SelectedOption = styled(OptionsList)`
  padding-left: 10px;
`;

const Option = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  padding-left: 10px;
  border-bottom: solid 1px black;

  &:hover {
    background-color: #cdd0dd;
  }
`;

const CustomSelect = ({ options, selectMe, toggleSelectOpen, isOpened, selected, ...props }) => (
  <CustomSelectContainer isOpened={isOpened} {...props}>
    <SelectedOption onClick={toggleSelectOpen}>{selected.display}</SelectedOption>
    <OptionsList>
      {options.map((option, index) => (
        <Option show={isOpened} onClick={selectMe} key={index}>
          {option.display}
        </Option>
      ))}
    </OptionsList>
  </CustomSelectContainer>
);

export default CustomSelect;
