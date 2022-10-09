import React from 'react';


const MainScreen = () => {
  return (
    <div className='container p-5 w-100 d-flex align-items-center flex-column justify-content-center' style={{height: '100vh'}}>
      <div className='row m-2'>
        <div className='col-12 text-center'>
          Welcome message to the tests
        </div>
      </div>

      <div className='row w-100 pb-5'>
        <div className='col-12 justify-content-center p-5 text-center'>
          <a href='./test2'><button type='button' className="btn btn-primary py-3 px-5 fs-4">Start test 2</button></a>
        </div>
      </div>
    </div>
  )
}

export default MainScreen;
