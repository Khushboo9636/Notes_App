import React from 'react'
import bg from '../assets/bg.png'
import lock from '../assets/lock.png'
import '../css/RightSide.scss';
function RightSide() {
  return (
    <div>
        <div className='content'>
       <div className='center-content'>
                <img src={bg} alt=''></img>
                <h2>Pocket Notes</h2>
                <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
       <div className='bottom-content'>
          <p><img src={lock} alt='' style={{ marginTop:"7px", marginRight:"10px", float:"left"}}></img> end-to-end encrypted</p>
       </div>
   </div>
    </div>
  )
}

export default RightSide