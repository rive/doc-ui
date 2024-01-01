import cn from 'classnames';
import { Highlight, Language } from 'prism-react-renderer';
import { CSSProperties } from 'react';
import './CodeBlock.css';
import { Toolbar } from './private/Toobar';

export interface CodeBlockProps {
  code?: string;
  children?: string;
  language?: string;
  className?: string;
  style?: CSSProperties;
}

export function CodeBlock({ code, children, language, className }: CodeBlockProps) {
  return (
    <div className={cn('rrdu-code-block', className)}>
      <Highlight
        theme={{ plain: {}, styles: [] }}
        code={code || children || ''}
        language={language as Language}
      >
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
      <Toolbar>
        <button>Copy</button>
      </Toolbar>
    </div>
  );
}
