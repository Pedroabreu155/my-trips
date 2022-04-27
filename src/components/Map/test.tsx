import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i }),
    ).toBeInTheDocument();
  });

  it('should render with the marken in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const placeTwo = {
      id: '2',
      name: 'New York',
      slug: 'new-york',
      location: {
        latitude: 41,
        longitude: -42,
      },
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument();
    expect(screen.getByTitle(/New York/i)).toBeInTheDocument();
  });
});
