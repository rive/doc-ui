import cn from 'classnames';
import { Highlight, Language } from 'prism-react-renderer';
import { CSSProperties } from 'react';
import './CodeBlock.css';
import { CopyButton } from './private/CopyButton';
import { Spacer } from './private/Spacer';
import { Toolbar } from './private/Toobar';

export interface CodeBlockProps {
  code: string | Array<{ code: string; language: string; filename: string }>;
  filename?: string;
  language?: string;
  className?: string;
  style?: CSSProperties;
}

export function CodeBlock({ code, filename, language = 'bash', className }: CodeBlockProps) {
  const config = Array.isArray(code) ? code[0] : { code, filename, language };
  if (!config) return null;

  return (
    <div className={cn('rrdu-code-block', className)}>
      <Toolbar>
        <Spacer />
        <CopyButton code={config.code} />
      </Toolbar>
      <Highlight
        theme={{ plain: {}, styles: [] }}
        code={config.code}
        language={config.language as Language}
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
    </div>
  );
}
