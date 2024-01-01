import { ReactNode } from 'react';

export interface ReactLivePlaygroundProps {
  children: ReactNode;
}

export function ReactLivePlayground({ children }: ReactLivePlaygroundProps) {
  return <div className="ReactLivePlayground">{children}</div>;
}
