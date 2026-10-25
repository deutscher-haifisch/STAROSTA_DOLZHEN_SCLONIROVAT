import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <strong className="footer-brand">Лекторий</strong>
        <span>© {new Date().getFullYear()} Учебная платформа</span>
      </div>
    </footer>
  )
}

export default Footer
