import cn from 'classnames';
import { CSSProperties } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import './Playground.css';

export interface PlaygroundProps {
  code: string;
  className?: string;
  style?: CSSProperties;
}

export function Playground({ code, className, style }: PlaygroundProps) {
  return (
    <div className={cn('rive-react-docui', className)} style={style}>
      <LiveProvider
        code={code}
        // disable the built-in theme of react-prism-renderer
        theme={{ plain: {}, styles: [] }}
        enableTypeScript
      >
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
}
