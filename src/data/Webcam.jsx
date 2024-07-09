import React from 'react'
import { useCallback, useRef, useState } from "react"
import Webcam from "react-webcam";
import CustomWebcam from "react-webcam"; 
const Webcamp = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
     // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };
  return (
    // <div className="container">
    //  {/* <Webcam height={600} width={600} ref={webcamRef} /> */}

    //   {/* <CustomWebcam /> */}
    // </div>
    // {n=3?():()}
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam"/>
      ) : (
        <Webcam height={200} width={200} ref={webcamRef}/>
      )}
        <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  )
}

export default Webcamp