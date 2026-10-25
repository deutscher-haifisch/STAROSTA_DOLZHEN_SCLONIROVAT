import Lecturer from '../../components/Lecturer/Lecturer'

function LecturersPage({ lecturers, onOpenLecturer }) {
  return (
    <section className="section">
      <h1 className="section-title">Лекторы</h1>
      <div className="grid">
        {lecturers.map((l) => (
          <Lecturer
            key={l.id}
            photo={l.photo}
            name={l.name}
            degree={l.degree}
            experience={l.experience}
            education={l.education}
            onClick={() => onOpenLecturer(l.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default LecturersPage
