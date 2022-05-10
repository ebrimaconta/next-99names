import Header from './Header'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
describe('<Header/>', () => {
  const renderComponent = () => {
    const utils = render(<Header />)

    return {
      ...utils,
    }
  }
  it('should render', () => {
    const { container } = renderComponent()
    expect(container).toBeInTheDocument()
  })
  it('should make sure "myObjectives" is in document', () => {
    renderComponent()
    expect(screen.getByText('my')).toBeInTheDocument()
    expect(screen.getByText('O')).toBeInTheDocument()
    expect(screen.getByText('bjectives')).toBeInTheDocument()
  })
})
