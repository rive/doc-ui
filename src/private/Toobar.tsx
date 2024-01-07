import { ReactNode } from 'react';
import './Toolbar.css';

export interface ToolbarProps {
  children?: ReactNode;
}

export function Toolbar({ children }: ToolbarProps) {
  return <div className="rive-toolbar">{children}</div>;
}
