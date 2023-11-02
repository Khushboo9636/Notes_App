import React, { useEffect, useState ,useRef} from 'react';
import './App.css'
import SidebarChat from './components/SidebarChat';
import RightSide from './components/RightSide';
import PopUp from './components/PopUp';

import NotesChats from './components/NotesChats';
import { useMediaQuery } from '@mui/material';


function App() {
  const [isGroupPopupOpen, setGroupPopupOpen] = useState(false)
  const [isGroupOpen, setGroupOpen] = useState(false);
    const closePopUp = () => {
      setGroupPopupOpen(false)
      setGroupOpen(false);
    };
    const [groups, setGroups] = useState([]);
    const [currentGroup, setCurrentGroup] = useState('My Notes');
    //const [notes,setNotes] = useState([]);
    const [newGroupName, setNewGroupName]= useState('')
    const [newNote, setNewNote] = useState('')
    const textareaRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState('#000'); // Default color
   const [groupColors, setGroupColors] = useState({})
   const [groupNotes, setGroupNotes] = useState({})
   const [selectedGroup, setSelectedGroup] = useState(null);
   const currentTime = new Date().toLocaleTimeString();
   const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const [selectGroupChange, setSelectGroupChange] = useState(false);

  const [isMobileNotesView, setMobileNotesView] = useState(false);
  const isMobileView = useMediaQuery('(max-width: 576px)') 
  
  
  



   
  useEffect(() => {
    // Load groups and notes from local storage
    const savedGroups = localStorage.getItem('groups');
    // const savedNotes = localStorage.getItem(currentGroup);

    if (savedGroups) {
      setGroups(JSON.parse(savedGroups));
    }

    // if (savedNotes) {
    //   setGroupNotes({ ...groupNotes, [currentGroup]: JSON.parse(savedNotes) });
    // }
  }, []);
  useEffect(() => {
    // Load groups and notes from local storage
   // const savedGroups = localStorage.getItem('groups');
    const savedNotes = localStorage.getItem(currentGroup);

    // if (savedGroups) {
    //   setGroups(JSON.parse(savedGroups));
    // }

    if (savedNotes) {
      setGroupNotes({ ...groupNotes, [currentGroup]: JSON.parse(savedNotes) });
    }
  }, []);

  useEffect(() => {
    // Save groups and notes to local storage
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem(currentGroup, JSON.stringify(groupNotes[currentGroup] || []));
  }, [groups, currentGroup, groupNotes]);




    const handleGroupCreate  = (newGroupName, color) => {
      if(newGroupName) {
        const updatedGroups = [...groups, newGroupName];
      setGroups(updatedGroups);
      localStorage.setItem('groups', JSON.stringify(updatedGroups));

        setCurrentGroup(newGroupName);
        setNewGroupName('');
        setGroupColors({ ...groupColors, [newGroupName]: color });
        setSelectedColor(color);
        setGroupPopupOpen(false);
        
      }
    };
    const handleNoteCreate = () => {
      if (newNote) {
        const newNoteItem = {
           text: newNote,
           currentTime: currentTime, // Display time
           currentDate: currentDate, // Display date

        };
        setGroupNotes({ ...groupNotes, [currentGroup]: [...(groupNotes[currentGroup] || []), newNoteItem] });
      setNewNote('');
      }
    }
    const handleGroupChange  = (group) => {
      setCurrentGroup(group);
      setSelectedGroup(group);
      setGroupOpen(true)
      setMobileNotesView(true);
      setSelectGroupChange(true)
     
    };

    const handleGroupPopupOutsideClick = (e) => {
      if(e.target.classList.contains('group-popup')){
        setNewGroupName('');
        setGroupPopupOpen(false);
      }
    }
    const handleEnterKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleNoteCreate();
      }
    };
   const handleBackToSideBar = () => {
      setMobileNotesView(false);
      setGroupOpen(false);
    }
    

 

 return(
  <div className="notes-app">
      <div className="sidebar" style={{float:"left"}}>
      <div className="sidebar-header">
        <h3>Pocket Notes</h3>
      </div>
      <div className="sidebar-buttont">
        <button className="btn-add" onClick={() => setGroupPopupOpen(true)}> <b>+</b>  Create Notes</button>
        {isGroupPopupOpen && (
        <PopUp 
        closePopUp={closePopUp} 
        handleGroupCreate={handleGroupCreate}
        selectedColor={selectedColor}
        
        />
      )}
      </div>
      

        <div className="group-menu" style={{display:"flex", flexFlow:"column", height:"100%"}}>
        <ul style={{height:"100%",  listStyle: "none", padding: 0, marginTop:"10px" }}>
        {groups.map((group,index ) => (
          <li 
          key={index}
          onClick={() => handleGroupChange(group)}
          className={group == currentGroup ? 'active' : ''}
          style={{
             margin: 0,
            padding: 0,
           
            backgroundColor: group === selectedGroup ? '#F7ECDC' : 'initial',
            marginBottom:8, 
            // Set the background color
            
          
          }}
          >  
             <SidebarChat key={index} name={group} ChooseColor={groupColors[group]}/>
            </li>

          ))}
        </ul>
            {/* {groups.map((group, index) => (
            <SidebarChat key={index} name={group} color={selectedColor} />
          ))} */}
        </div>
      </div> 


      <div className="right-menu">
        {isGroupOpen ? (
      
      <NotesChats
      currentGroup={currentGroup}
      groupColors={groupColors}
      groupNotes={groupNotes}
      newNote={newNote}
      textareaRef={textareaRef}
      handleEnterKeyPress={handleEnterKeyPress}
      handleNoteCreate={handleNoteCreate}
      setNewNote={setNewNote}
      goBackToSidebar={handleBackToSideBar}
      
    />
      
      ): ( 
        <RightSide/>
      )}

      </div>
  </div>
 )
}

export default App;

