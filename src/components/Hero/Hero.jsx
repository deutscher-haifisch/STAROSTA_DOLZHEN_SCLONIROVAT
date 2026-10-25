import LecturerPhoto from '../LecturerPhoto/LecturerPhoto'
import './Hero.css'

function Hero({ photo, text, buttonText, onButtonClick }) {
  return (
    <section className="hero section">
      <LecturerPhoto src={photo} alt="Лектор у доски" />

      <div className="hero-content">
        <h1 className="hero-text">{text}</h1>
        <p className="hero-subtitle">Онлайн и оффлайн занятия для физических и юридических лиц</p>

        <ul className="hero-stats">
          <li><strong>10</strong><span>лекторов</span></li>
          <li><strong>30</strong><span>дисциплин</span></li>
          <li><strong>7+</strong><span>лет стажа у каждого</span></li>
        </ul>

        <button className="btn hero-btn" onClick={onButtonClick}>
          {buttonText} →
        </button>
      </div>
    </section>
  )
}

export default Hero
