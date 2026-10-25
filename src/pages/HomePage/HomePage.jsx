import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Contacts from '../../components/Contacts/Contacts'

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero
        photo="/images/hero.jpg"
        text="Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями."
        buttonText="Найти лектора"
        onButtonClick={() => onNavigate('lecturers')}
      />

      <section id="about" className="section">
        <h2 className="section-title">О нас</h2>
        <About />
      </section>

      <section id="contacts" className="section">
        <h2 className="section-title">Контакты</h2>
        <Contacts />
      </section>
    </>
  )
}

export default HomePage
