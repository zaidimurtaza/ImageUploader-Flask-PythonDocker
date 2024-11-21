import axios from 'axios';
import cross_image from '../assets/assets/show-more.png'
import Navbar from '../Navbar/Navbar';
import './Upload.css'

import React, { useState } from 'react';

const Upload = ({upoloadModal , close , refresh}) => {
  const [title,setTitle] = useState('')
  const [clas,setClass] = useState('')
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const close_call =()=>{ 
    // const data = { title: title }
    setTimeout(() => {
      close()
      window.location.reload();
    }, 890);
    // refresh
  }
  // Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleInputChange = (event) => {
    setTitle(event.target.value); 
    console.log(title);
    }
    
  // Handle form submission
  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file); // 'file' is the key Flask will use
    formData.append('title', title);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Specify the content type
      },
      //   body: JSON.stringify(data)
      }) 
      setMessage(response.data.message);
      console.log(response.data);

        setTimeout(() => {
        
          setMessage('');
      }, 2000);

      const data = await response.json();
      setMessage(data.message || 'Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading the image', error);}


  };

  return (
    <div className={`none ${upoloadModal}`} >
      <form className={`${upoloadModal}form`} onSubmit={handleSubmit}>
      <div className={`${upoloadModal}text`}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <input type='text' value={title} onChange={handleInputChange}  placeholder='Title' required/>
        <button onClick={close_call} type="submit">Upload Image</button>
        <img onClick={close} src={cross_image}  alt='cross'/>
        </div>
        <p>{message}</p>
        </form>
    </div>
  );
};

export default Upload


