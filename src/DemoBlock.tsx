import cn from 'classnames';
import { CSSProperties } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import './DemoBlock.css';
import { CopyButton } from './private/CopyButton';
import { FileName } from './private/FileName';
import { Spacer } from './private/Spacer';
import { Toolbar } from './private/Toobar';

export interface DemoBlockProps {
  device: 'desktop' | 'tablet' | 'mobile' | 'responsive';
  language?: 'jsx' | 'tsx';
  filename?: string | undefined;
  code: string;
  disablePadding?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function DemoBlock({
  code,
  filename,
  language = 'jsx',
  disablePadding,
  className,
  style,
}: DemoBlockProps) {
  return (
    <div className={cn('rive-demo-block', className)} style={style}>
      <Toolbar>
        <FileName language={language} filename={filename} />
        <Spacer />
        <CopyButton code={code} />
      </Toolbar>
      <LiveProvider
        code={code}
        // disable the built-in theme of react-prism-renderer
        theme={{ plain: {}, styles: [] }}
        enableTypeScript={language === 'tsx'}
      >
        <div className="rive-demo-block-main">
          <LivePreview
            className={cn(
              'rive-demo-block-preview',
              disablePadding && 'rive-demo-block-preview-disable-padding'
            )}
          />
          <div className="rive-demo-block-develop">
            <LiveError className="rive-demo-block-error" />
            <LiveEditor className="rive-demo-block-editor" />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}
