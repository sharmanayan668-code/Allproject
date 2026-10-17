import React from 'react'

const App = () => {
  let arr=['dal','bati','chawal','chiku','angur','panner','kk'];
  return (
   <>
      <ul className='list-group'>
       {arr.map((elem,index)=> (
        <li key={index} className='list-group-item'>{elem}</li>
       ))}
      </ul>
      <h1>hi</h1>
   </>
  )
}

export default App
