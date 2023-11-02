import React from 'react'
import SidebarChat from './SidebarChat';
import SendIcon from '@mui/icons-material/Send';
import "../css/NotesChat.scss"
import { useMediaQuery } from '@mui/material';

import ArrowBack from '@mui/icons-material/ArrowBack';

function NotesChats({currentGroup, groupColors, groupNotes, newNote, textareaRef, setNewNote, handleEnterKeyPress, handleNoteCreate, goBackToSidebar}) {
  const isMobileView = useMediaQuery('(max-width: 576px)')


    return (
    <div className="main-content">
      <div className="header-title">
      {isMobileView && (
          <div className="back-button" onClick={goBackToSidebar}>
            <ArrowBack />
          </div>
        )}
        <SidebarChat name={currentGroup} ChooseColor={groupColors[currentGroup]} />
      </div>
      <div className="notes">
        <ul>
          {groupNotes[currentGroup]?.map((note, index) => (
            <li key={index}>
              
              <div className="note-meta" style={{float:"left", marginLeft:"5px", marginRight:"5px", width:"20%", paddingRight:"5px"}}>
                 {note.currentTime}
                <br />
                 {note.currentDate}
              </div> 
              <div className="note-text">{note.text}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <div className='fot'>
        <div className="note-input">
          <div className="textarea-wrapper">
            <textarea
              ref={textareaRef}
              placeholder="Enter your text here..........."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyPress={handleEnterKeyPress}
            />
            <SendIcon className="send-icon" onClick={handleNoteCreate} />
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default NotesChats