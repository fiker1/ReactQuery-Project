import React, { useState } from 'react';
import Navbar from './componets/Navbar';
import Planets from './componets/Planets';
import People from './componets/People';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  let [page, setPage] = useState('planets');
  return (
    <>
      <div className="App">
      <h1>LTech React Tutorial</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          { page === 'planets' ? <Planets /> : <People /> }
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
