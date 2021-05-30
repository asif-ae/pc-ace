import React from 'react';

const UnitTest = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
    </>
  );
};

export default UnitTest;