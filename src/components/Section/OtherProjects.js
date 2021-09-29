import React from "react"
import "./otherProjects.css"

const OtherProjects = () => {
  const videos = [
    {
      name: "Tourism app Tenjo",
      src:
        "https://firebasestorage.googleapis.com/v0/b/portafolio-9b41a.appspot.com/o/AlcaldiaTenjo.mp4?alt=media&token=86530b3a-25bd-4a9e-b088-a17f33926652",
    },
    {
      name: "Platform document management system",
      src:
        "https://firebasestorage.googleapis.com/v0/b/portafolio-9b41a.appspot.com/o/DemoGestionDocumental.mp4?alt=media&token=cddbd1f3-a977-4fb0-a552-b810a7d80c56",
    },
  ]
  return (
    <div className="content-otherProjects">
      {videos.map(video => (
        <div className="video-container">
          <h2>{video.name}</h2>
          <video src={video.src} controls muted></video>
        </div>
      ))}
    </div>
  )
}

export default OtherProjects
