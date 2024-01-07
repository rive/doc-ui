import '@guoyunhe/prism-theme-github/github-light.css';
import { MDXProvider } from '@mdx-js/react';
import { components } from '../src';
import Demo from './Demo.md';

export default function App() {
  return (
    <MDXProvider>
      <Demo components={components} />
    </MDXProvider>
  );
}
