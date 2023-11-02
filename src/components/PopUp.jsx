import React, { useState } from 'react'
import '../css/PopUp.scss'
const PopUp = ({closePopUp, handleGroupCreate}) => {
    const [newGroupName, setNewGroupName] = useState('');
    
    const initialColors = JSON.parse(localStorage.getItem('selectedColors')) || [];
       
     const initialColor = initialColors.length > 0 ? initialColors[initialColors.length - 1] : '#000';
       const [selectedColor, setSelectedColor] = useState(initialColor);


    const handleColorChange = (color) => {
     
    const existingColors = JSON.parse(localStorage.getItem('selectedColors')) || [];
     // Add the newly selected color to the array
    existingColors.push(color);
   // Set the array of colors in local storage
   localStorage.setItem('selectedColors', JSON.stringify(existingColors));

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
                    style={{ 
                      background: selectedColor === '#b38bfa' ? selectedColor : '#b38bfa',
                     }}
                  ></p>
                  <p
                    id="pink"
                    onClick={() => handleColorChange('#ff79f2')}
                    style={{ 
                      background: selectedColor === '#ff79f2' ? selectedColor : '#ff79f2',
                     }}
                  ></p>
                  <p
                    id="green"
                    onClick={() => handleColorChange('#43e6fc')}
                    style={{ 
                      background: selectedColor === '#43e6fc' ? selectedColor : '#43e6fc',
                     }}
                  ></p>
                  <p
                    id="orange"
                    onClick={() => handleColorChange('#f19576')}
                    style={{ 
                      background: selectedColor === '#f19576' ? selectedColor : '#f19576',
                     }}
                  ></p>
                  <p
                    id="blue"
                    onClick={() => handleColorChange('#0047FF')}
                    style={{ 
                      background: selectedColor === '#0047FF' ? selectedColor : '#0047FF',
                     }}
                  ></p>
                  <p
                    id="skyblue"
                    onClick={() => handleColorChange('#6691ff')}
                    style={{ 
                      background: selectedColor === '#6691ff'? selectedColor : '#6691ff',
                     }}
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
