import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export interface PlaygroundProps {
  code: string;
}

export function Playground({ code }: PlaygroundProps) {
  return (
    <LiveProvider code={code} theme={false} language="tsx" enableTypeScript>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
}
