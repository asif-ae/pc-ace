import { cleanup, fireEvent, render } from "@testing-library/react";
import UnitTest from "./UnitTest";


  afterEach(cleanup);

  it('increments counter', () => {
    const { getByTestId } = render(<UnitTest />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });