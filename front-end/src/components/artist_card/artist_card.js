import React from 'react'
import img1 from "../../assets/images/landing.jpg"

export default function Artist_card() {
  return (
    <div className='card-container'>
        <img className='artist_avatar' src={img1} />
        <h2 className='artist-name'>Hi, I'm Paul Menard</h2>
        <p className='artist-description'>My journey as an artist has taken me through various styles and techniques, allowing me to develop a diverse skill set that caters to a wide range of preferences. Whether you're drawn to bold and vibrant designs, intricate black and gray masterpieces, or anything in between, I am here to collaborate with you and bring your vision to life.</p>
        <button className='card-btn'>View Gallery</button>
    </div>
  )
}
