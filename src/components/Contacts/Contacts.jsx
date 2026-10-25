import './Contacts.css'

function Contacts() {
  return (
    <div className="contacts">
      <ul className="contacts-main">
        <li><span>Адрес</span>г. Казань, ул. Примерная, 1</li>
        <li><span>Телефон</span>+7 (900) 000-00-00</li>
        <li><span>Email</span>info@example.ru</li>
      </ul>

      <div className="contacts-managers">
        <div className="manager">
          <p className="manager-direction">Индивидуальные занятия</p>
          <h3>Иванова Анна</h3>
          <p>+7 (900) 000-00-01</p>
          <p>personal@example.ru</p>
        </div>
        <div className="manager">
          <p className="manager-direction">Корпоративное обучение</p>
          <h3>Сидоров Павел</h3>
          <p>+7 (900) 000-00-02</p>
          <p>corporate@example.ru</p>
        </div>
        <div className="manager">
          <p className="manager-direction">Партнёрство и сотрудничество</p>
          <h3>Кузнецова Мария</h3>
          <p>+7 (900) 000-00-03</p>
          <p>partners@example.ru</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts
