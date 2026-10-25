import './LecturerPhoto.css'

function LecturerPhoto({ src, alt }) {
  return (
    <div className="photo">
      <img className="photo-img" src={src} alt={alt} />
    </div>
  )
}

export default LecturerPhoto
