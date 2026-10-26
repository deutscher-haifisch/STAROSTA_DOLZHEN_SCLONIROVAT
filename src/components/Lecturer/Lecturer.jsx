import LecturerPhoto from '../LecturerPhoto/LecturerPhoto'
import CopyEmail from '../CopyEmail/CopyEmail'
import './Lecturer.css'

function Lecturer({ photo, name, degree, experience, education, email, onClick }) {
  return (
    <article className="lecturer">
      <LecturerPhoto src={photo} alt={name} />

      <div className="lecturer-info">
        <h3 className="lecturer-name">{name}</h3>
        <ul className="lecturer-facts">
          <li><span>Стаж:</span> {experience} лет</li>
          <li><span>Учёная степень:</span> {degree}</li>
          <li><span>Образование:</span> {education}</li>
        </ul>

        <CopyEmail email={email} />

        {onClick && (
          <button className="btn btn-outline" onClick={onClick}>
            Подробнее
          </button>
        )}
      </div>
    </article>
  )
}

export default Lecturer
