import React, { useState } from 'react'
import '../css/PopUp.scss'
const PopUp = ({closePopUp, handleGroupCreate}) => {
    const [newGroupName, setNewGroupName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#000'); // Default color

    const handleColorChange = (color) => {
        setSelectedColor(color);
      };
    const handleCreateGroup = () => {
        if (newGroupName) {
            handleGroupCreate(newGroupName, selectedColor);
            setNewGroupName('');
           // setSelectedColor(selectedColor); // Reset to default color
            closePopUp();
        }
      };
    
  return (
    <>
      <div className="main-wrapper"></div>
      <div className="main-pop-container">
          <div className="popup">
              <div className='title'>
                <h1>Create New Notes group</h1>
              </div>
              <div className='form'>
                <form>
                    <label>Group Name</label>
                    <input type='text' value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} placeholder='Enter Your group name...' required></input><br/>
                    <div className='color-box'>
                        <label>Choose colour</label>
                        <div className='colors'>    
                        <p
                    id="purple"
                    onClick={() => handleColorChange('#b38bfa')}
                    style={{ background: '#b38bfa' }}
                  ></p>
                  <p
                    id="pink"
                    onClick={() => handleColorChange('#ff79f2')}
                    style={{ background: '#ff79f2' }}
                  ></p>
                  <p
                    id="green"
                    onClick={() => handleColorChange('#43e6fc')}
                    style={{ background: '#43e6fc' }}
                  ></p>
                  <p
                    id="orange"
                    onClick={() => handleColorChange('#f19576')}
                    style={{ background: '#f19576' }}
                  ></p>
                  <p
                    id="blue"
                    onClick={() => handleColorChange('#0047FF')}
                    style={{ background: '#0047FF' }}
                  ></p>
                  <p
                    id="skyblue"
                    onClick={() => handleColorChange('#6691ff')}
                    style={{ background: '#6691ff' }}
                  ></p>
                        </div>
                    </div>
                    <div className='buttons'>
                    <button type='submit' onClick={handleCreateGroup} >Create</button>
                    </div>
                </form>
              </div>

          </div>


      </div> 

    </>
  )
}

export default PopUp