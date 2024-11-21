import React, { useState } from 'react';
import './Navbar.css';
import homeImage from '../assets/assets/home.png';
import searchIcon from '../assets/assets/search.png';
import upload from '../assets/assets/uploadPhoto.png';
import Upload from '../Upload/Upload';

const Navbar = ({clasName}) => {
  console.log(clasName);
const [upoloadModal,setUploadModal] = useState('')
const modalStatus = () =>{
  upoloadModal?setUploadModal(''):setUploadModal("true")
  // console.log(upoloadModal);
}
const close = () =>{
  setUploadModal('')
}
  return (<>
    <div className='Navbar1'>
        <div className='home Navbar1' >
            <img src={homeImage}/>
            <p>Home</p>
        </div>

        <div className='user Navbar Navbar1'>
           <img onClick={modalStatus} src={upload} alt='Upload' />
            <p>User</p>
        </div>
                {/* <div className='search Navbar1'>
            <input type='text' placeholder='    Search'/>
            <img src={searchIcon}/>
        </div> */}
    </div>
    <div className=''>
        <Upload upoloadModal = {upoloadModal} close={close} />
        </div>
  </>)
}

export default Navbar