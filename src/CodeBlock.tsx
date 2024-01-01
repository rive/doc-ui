import { Highlight, Language } from 'prism-react-renderer';
import './CodeBlock.css';

export interface CodeBlockProps {
  code?: string;
  children?: string;
  language?: string;
}

export function CodeBlock({ code, children, language }: CodeBlockProps) {
  return (
    <Highlight
      theme={{ plain: {}, styles: [] }}
      code={code || children || ''}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
