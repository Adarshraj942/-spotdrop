import React from 'react'
import './MediaNavbar.css'
import avatar from '../../assets/avatar.png'
import bell from '../../assets/bell.png'
import { useHistory } from 'react-router-dom'

import swal from "sweetalert";

function MediaNavbar() {
  const history=useHistory()

  return (
    <div id="medianavbar" >
     <div className='flexcon' style={{display:'flex',justifyContent:'space-between'}}>
      <div className='flexlef' style={{justifyContent:'left',padding:'5px'}}><i class="fa fa-language" style={{fontSize:'24px'}} aria-hidden="true"></i></div>
      <div className='flexcenter'  style={{justifyContent:'center'}}><input type="text" placeholder='search..' /><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><i   className='fa fa-search'></i></button></div>
      <div className='flexrigh' style={{justifyContent:'right'}}>
      
        
        <img src={avatar} alt="Avatar"  style={{width:'30px'}}></img> 
   </div>
      </div>
      
     </div>

  )
}

export default MediaNavbar
