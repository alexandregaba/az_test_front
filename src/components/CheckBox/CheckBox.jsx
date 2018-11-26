import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerInput = styled.div`
  &:before,
  :after {
    content: '';
    display: block;
    position: relative;
  }

  &:before {
    top: 8px;
    left: -15px;
    width: 22px;
    height: 22px;
    border: 2px solid ${props => (props.checked ? '#46CD7C' : '#444')};
    border-radius: 50%;
  }

  &:after {
    top: -17px;
    left: -2px;
    width: 5px;
    height: 10px;
    border: 2px solid #46cd7c;
    border-top: transparent;
    border-left: transparent;
    transform: scale(2) rotate(45deg);
    transform-origin: center center;
    opacity: ${props => (props.checked ? '1' : '0')};
    transition: transform 0.2s, opacity 0.2s;
  }
`;

const CheckBox = props => <InnerInput {...props} className="check-box" type="checkbox" />;

CheckBox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CheckBox;
