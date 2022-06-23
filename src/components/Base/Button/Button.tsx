
import React from 'react';
import './style.scss';
import { noop } from 'lodash-es';

interface IButtonProps {
  customClassName?: string;
  theme?: 'transparent' | 'normal';
  onClick?: () => void;
  text?: string;
  tooltip?: string;
}

function Button(props: IButtonProps) {
  const { 
    text = 'Confirm',
    onClick = noop,
    theme = 'normal',
    customClassName,
    tooltip,
  } = props;


  return (
    <div 
      className={`base-button theme-${theme} ${customClassName}`}
      onClick={onClick}>
      <span title={tooltip}>{text}</span>
    </div>
  );
}

export default Button;

