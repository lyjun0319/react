import React from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';
import Counter from './Counter';


function App() {
  return (
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpacial/>
      <Hello color="pink"/>
    </Wrapper>

    <>
      <Counter />
    </>
    </>
  );
}

export default App;
