import '@guoyunhe/prism-theme-github/github-light.css';
import { MDXProvider } from '@mdx-js/react';
import { components } from '../src';
import Demo from './Demo.mdx';

export default function App() {
  return (
    <MDXProvider components={components}>
      <Demo />
    </MDXProvider>
  );
}
