import React from 'react';


const MainScreen = () => {
  return (
    <div className='container m-5'>
      <div className='row m-5'>
        <div className='col-12 text-center'>
          Welcome message to the tests
        </div>
      </div>

      <div className='row'>
        <div className='col-12 justify-content-center p-3 text-center'>
          {/* <button type='button' onClick='location.href=./test2'>Go to test 2</button> */}
          <a href='./test2'><button type='button' className="btn btn-primary py-3 px-5 fs-4">Go to test 2</button></a>
        </div>

        <div className='col-12 justify-content-center p-3 text-center'>
          <a href='./test3'><button type='button' className="btn btn-primary py-3 px-5 fs-4">Go to test 3</button></a>
        </div>
      </div>
    </div>
  )
}

export default MainScreen;
