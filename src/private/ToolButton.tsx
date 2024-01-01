import classNames from 'classnames';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import './ToolButton.css';

export interface ToolButtonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ToolButton({ children, className, style, onClick }: ToolButtonProps) {
  return (
    <a className={classNames('rrdu-tool-button', className)} onClick={onClick} style={style}>
      {children}
    </a>
  );
}
