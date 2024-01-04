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
    <div className={cn('rrdu-demo-block', className)} style={style}>
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
        <div className="rrdu-demo-block-main">
          <LivePreview
            className={cn(
              'rrdu-demo-block-preview',
              disablePadding && 'rrdu-demo-block-preview-disable-padding'
            )}
          />
          <div className="rrdu-demo-block-develop">
            <LiveError className="rrdu-demo-block-error" />
            <LiveEditor className="rrdu-demo-block-editor" />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}
