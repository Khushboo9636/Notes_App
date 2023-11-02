import React from 'react'
import { Avatar } from '@mui/material'
import Stack from '@mui/material/Stack';
import '../css/Sidebar.css'

function stringToColor(string, ChooseColor) {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = `#${((hash & 0x00FFFFFF) | 0x1000000).toString(16).slice(1).toUpperCase()}`;
  return ChooseColor;
}

function stringAvatar(name, ChooseColor) {
  const bgColor = ChooseColor ? ChooseColor : stringToColor(name);
  const words = name.split(' ');
  let avatarContent;

  if (words.length === 3) {
    avatarContent = words[0][0] + words[2][0]; // First letter of the first word and last word
  } else {
    avatarContent = words.map(word => word[0]).join('').slice(0, 2); // First letter of each word, limited to 2 characters
  }

  return {
    sx: {
      bgcolor: bgColor,
    },
    children: avatarContent.toUpperCase(),
  };
}


function SidebarChat({name, ChooseColor}) {
  //const avatarContent = name.length >= 2 ? name[0] + name[name.length - 1] : name;

  return (
    <div>   
       <div className='sidebar-chat' >
        
        <div className='icon' >
         <Stack direction="row" spacing={2}>
          <Avatar  {...stringAvatar(name, ChooseColor)} style={{width:"3rem", height:"3rem"}} />   
        {/* <Avatar sx={{ bgcolor: color }}>{name[0]}</Avatar> */}
        </Stack>
        </div>
        <h1  style={{fontSize:"20px",fontWeight:"500"}} >{name}</h1>
        </div>

       
    </div>   


  


  )
}

export default SidebarChat
