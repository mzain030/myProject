import React from 'react'
import Webcam from "react-webcam";
import CustomWebcam from "react-webcam";
import { useRef } from "react";
const LearnWebCam = () => {
    const webcamRef = useRef(null)
  return (
    <div >
    <Webcam />
    {/* <CustomWebcam/> */}
  </div>
  )
}

export default LearnWebCam;