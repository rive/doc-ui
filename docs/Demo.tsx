import { CodeBlock, Playground } from '@rive/react-doc-ui';

export default function Demo() {
  return (
    <div>
      <h1>CodeBlock</h1>
      <CodeBlock language="bash" filename="npm" code="npm install --save rive" />
      <CodeBlock language="html" filename="index.html" code="<html></html>" />
      <CodeBlock
        language="css"
        filename="test.css"
        code="body .root #title { background: #fff; }"
      />
      <CodeBlock language="js" filename="hello.js" code="function foobar() {}" />
      <CodeBlock language="jsx" filename="app.jsx" code="<div>{children}</div>" />
      <CodeBlock language="ts" filename="hello.ts" code="function foobar() {}" />
      <CodeBlock language="tsx" filename="app.tsx" code="<div>{children}</div>" />
      <CodeBlock language="json" filename="package.json" code={`{ "name": "foobar" }`} />

      <Playground code="<div style={{ color: 'red' }}>Hello, World!</div>" />
    </div>
  );
}
