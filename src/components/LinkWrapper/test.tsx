import { render, screen } from '@testing-library/react';
import { LinkWrapper } from '.';

describe('<LinkWrapper />', () => {
  it('shoould render link and children', () => {
    render(<LinkWrapper href="/link">something</LinkWrapper>);

    const children = screen.getByText(/something/i);

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/link');
  });
});
