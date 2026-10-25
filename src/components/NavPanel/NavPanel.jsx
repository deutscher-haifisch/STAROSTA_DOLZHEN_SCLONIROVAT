import './NavPanel.css'

function NavPanel({ currentPage, onNavigate }) {
  function linkClass(page) {
    return page === currentPage ? 'nav-link active' : 'nav-link'
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => onNavigate('home')}>
          Лекторий
        </button>

        <nav className="nav-links">
          <button className={linkClass('home')} onClick={() => onNavigate('home')}>Главная</button>
          <button className={linkClass('partners')} onClick={() => onNavigate('partners')}>Партнеры</button>
          <button className="nav-link" onClick={() => onNavigate('home', 'about')}>О нас</button>
          <button className={linkClass('lecturers')} onClick={() => onNavigate('lecturers')}>Лекторы</button>
          <button className="nav-link" onClick={() => onNavigate('home', 'contacts')}>Контакты</button>
        </nav>
      </div>
    </header>
  )
}

export default NavPanel
