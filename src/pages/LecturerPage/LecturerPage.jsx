import Lecturer from '../../components/Lecturer/Lecturer'
import DisciplineList from '../../components/DisciplineList/DisciplineList'
import TariffList from '../../components/TariffList/TariffList'
import './LecturerPage.css'

function LecturerPage({ lecturer, onBack }) {
  return (
    <>
      <button className="btn btn-outline lecturer-back" onClick={onBack}>
        ← Все лекторы
      </button>

      <div className="lecturer-page section">
        <Lecturer
          photo={lecturer.photo}
          name={lecturer.name}
          degree={lecturer.degree}
          experience={lecturer.experience}
          education={lecturer.education}
        />

        <section>
          <h2 className="section-title">Дисциплины</h2>
          <DisciplineList disciplines={lecturer.disciplines} />
        </section>
      </div>

      <section className="section">
        <h2 className="section-title">Тарифы</h2>
        <TariffList tariffs={lecturer.tariffs} />
      </section>
    </>
  )
}

export default LecturerPage
