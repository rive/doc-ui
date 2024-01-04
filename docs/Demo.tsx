import { CodeBlock, Playground } from '@rive/react-doc-ui';

export default function Demo() {
  return (
    <div>
      <h1>CodeBlock</h1>
      <CodeBlock language="html" filename="index.html" code="<html></html>" />
      <CodeBlock
        language="css"
        filename="test.css"
        code="body .root #title { background: #fff; }"
      />
      <CodeBlock language="js" filename="hello.js" code="function foobar() {}" />
      <Playground code="<div style={{ color: 'red' }}>Hello, World!</div>" />
    </div>
  );
}
