import { CodeBlock, Playground } from '@rive/react-doc-ui';

export default function Demo() {
  return (
    <div>
      <h1>CodeBlock</h1>
      <CodeBlock language="html" code="<html></html>" />
      <Playground code="<div style={{ color: 'red' }}>Hello, World!</div>" />
    </div>
  );
}
