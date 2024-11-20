import React from 'react'
import ft from './assets/f1.jpg'
import ft2 from './assets/f2.jpg'
import ft3 from './assets/f3.jpg'
import ft4 from './assets/f4.jpg'
import './gallery.css'

const Gallery = () => {
  return (
    <div className="gallery">
        <img src={ft} alt='1' className="gallery__image"/>
        <img src={ft2} alt='2' className="gallery__image"/>
        <img src={ft3} alt='3' className="gallery__image"/>
        <img src={ft4} alt='4' className="gallery__image"/>
    </div>
  )
}

export default Gallery
