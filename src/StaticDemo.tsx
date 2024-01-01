import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export interface StaticDemoProps {
  code: string;
}

export function StaticDemo({ code }: StaticDemoProps) {
  return (
    <LiveProvider code={code} theme={false}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
}
