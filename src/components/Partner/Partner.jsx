import './Partner.css'

function Partner({ name, logo, description, link }) {
  return (
    <article className="partner">
      <div className="partner-head">
        <img className="partner-logo" src={logo} alt={name} />
        <a className="partner-link" href={link} target="_blank" rel="noreferrer" title={`Сайт ${name}`}>
          ↗
        </a>
      </div>
      <p className="partner-text">{description}</p>
    </article>
  )
}

export default Partner
