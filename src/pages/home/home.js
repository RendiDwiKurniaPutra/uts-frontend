import React from "react";
import Foto from "../../components/gallery";
import './home.css'

const home = () => {
  return (
    <div>
      <Foto />
      <div className="map">
        <div className='huruf'>
            <h1>Temui kami di:</h1>
        </div>
        <iframe title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63161.18991867691!2d114.27982015666777!3d-8.345017822919782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15777e965b0cb%3A0xf2740a43aa3ef79b!2sGintangan%2C%20Kec.%20Rogojampi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1731532865484!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default home;
