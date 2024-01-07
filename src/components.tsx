import { ComponentType } from 'react';
import { CodeBlock } from '.';
import { DemoBlock } from './DemoBlock';

export const components: Record<string, ComponentType> = {
  pre: (props: any) => (props.live ? <DemoBlock {...props} /> : <CodeBlock {...props} />),
};
