import React, { useState } from "react";
import "../Components/About/About.css";
import ImageGird from "./About/ImageGird";
import Modal from "./About/Modal";
import Title from "./About/Title";
import UploadForm from "./About/UploadForm";
const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="app">
      <Title />
      <UploadForm />
      <ImageGird setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default About;
