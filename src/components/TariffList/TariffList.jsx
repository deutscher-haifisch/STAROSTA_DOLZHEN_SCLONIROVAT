import './TariffList.css'

function TariffList({ tariffs }) {
  return (
    <div className="tariffs">
      {tariffs.map((tariff) => (
        <div key={tariff.title} className="tariff">
          <h3>{tariff.title}</h3>
          <p className="tariff-price">
            {tariff.priceFrom && 'от '}
            {tariff.price.toLocaleString('ru-RU')} ₽
          </p>
        </div>
      ))}
    </div>
  )
}

export default TariffList
