import "@/app/main.css"; 

export default function Video() {
    return (
      <video width="600" height="400" autoPlay loop muted className="video" >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }