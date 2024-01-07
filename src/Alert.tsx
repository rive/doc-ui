import cn from 'classnames';
import { ReactNode } from 'react';
import './Alert.css';

export interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  children?: ReactNode;
}

export function Alert({ type = 'info', children }: AlertProps) {
  return <div className={cn('rive-alert', 'rive-alert-' + type)}>{children}</div>;
}
