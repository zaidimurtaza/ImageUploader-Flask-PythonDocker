import React, { useEffect, useState } from 'react'
import hall from '../assets/assets/gerard.png'
import './Hall_card.css'
import Upload from '../Upload/Upload';
const Hall_card =()=> {
  const [url,setUrl] = useState([]);

  const number=()=> {
    return(
      <div className='Hall-card'>
        <img src='' alt='image'/>
        <p>Hall 1</p>
    </div>
    )
  }

  const images = async()=>{
      const img_api = `http://127.0.0.1:5000/api/image_data`
      try {
      await fetch(img_api).then(responce => responce.json()).then(data =>setUrl(data))

        
      } catch (error) {
        console.log(error);
      }
  }

const refresh = ()=>{
  console.log("object");
}

  useEffect(()=>{
    images()
  },[])

  return (
<div className="container">
      {url['snippet'] && url['snippet'].length > 0 ? (
        url['snippet'].map((item, index) => {
          console.log(item)
          return (
          <div className="Hall-card" key={index}>
            <img loading='lazy' src={item['image_url']} alt={`Hall ${index+1}`} />
            <p>{item['title']}</p>
          </div>
          )
        })
      ) : (
        <p>No images available</p>
      )}
      <div>
      <Upload refresh = {refresh} />
      {console.log(refresh())}
      </div>
      </div>
  );
  
}

export default Hall_card