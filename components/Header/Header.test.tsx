/**
 * @jest-environment jsdom
 */

import Header from './Header';
import { screen, render } from '@testing-library/react';
import { headerJson } from './json/headerJson';
import '@testing-library/jest-dom/extend-expect';
describe('<Header/>', () => {
  const renderComponent = () => {
    const utils = render(<Header />);

    return {
      ...utils,
    };
  };
  it('should render', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  test.each(headerJson)('Test if title is in component', ({ name }) => {
    renderComponent();
    console.log(name);
    expect(screen.getByText(`${name}`)).toBeInTheDocument();
  });
});
