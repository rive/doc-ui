import { render, screen } from '@testing-library/react';
import { ReactLivePlayground } from '.';

describe('<ReactLivePlayground/>', () => {
  it('render', async () => {
    render(<ReactLivePlayground>Hello</ReactLivePlayground>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('ReactLivePlayground');
  });
});
