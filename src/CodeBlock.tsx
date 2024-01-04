import cn from 'classnames';
import { Highlight, Language } from 'prism-react-renderer';
import { CSSProperties } from 'react';
import './CodeBlock.css';
import { CopyButton } from './private/CopyButton';
import { FileName } from './private/FileName';
import { Spacer } from './private/Spacer';
import { Toolbar } from './private/Toobar';

export interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  className?: string;
  style?: CSSProperties;
}

export function CodeBlock({ code, filename, language = 'bash', className }: CodeBlockProps) {
  return (
    <div className={cn('rrdu-code-block', className)}>
      <Toolbar>
        <FileName language={language} filename={filename} />
        <Spacer />
        <CopyButton code={code} />
      </Toolbar>
      <Highlight theme={{ plain: {}, styles: [] }} code={code} language={language as Language}>
        {({ tokens, getLineProps, getTokenProps, ...rest }) => (
          <pre {...rest}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
