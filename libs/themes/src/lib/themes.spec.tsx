import { render } from '@testing-library/react';

import Themes from './themes';

describe('Themes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Themes />);
    expect(baseElement).toBeTruthy();
  });
});
