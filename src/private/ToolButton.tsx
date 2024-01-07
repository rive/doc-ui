import classNames from 'classnames';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import './ToolButton.css';

export interface ToolButtonProps {
  active?: boolean;
  color?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ToolButton({ children, icon, color, className, style, onClick }: ToolButtonProps) {
  return (
    <a
      className={classNames('rive-tool-button', 'rive-tool-button-' + color, className)}
      onClick={onClick}
      style={style}
    >
      {icon && <span className="rive-tool-button-icon">{icon}</span>}
      {children}
    </a>
  );
}
