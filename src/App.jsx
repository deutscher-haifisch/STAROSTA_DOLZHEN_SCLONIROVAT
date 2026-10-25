import { useState } from 'react'
import { flushSync } from 'react-dom'
import NavPanel from './components/NavPanel/NavPanel'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import PartnersPage from './pages/PartnersPage/PartnersPage'
import LecturersPage from './pages/LecturersPage/LecturersPage'
import LecturerPage from './pages/LecturerPage/LecturerPage'
import lecturers from './data/lecturers'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedId, setSelectedId] = useState(null)

  const selectedLecturer = lecturers.find((l) => l.id === selectedId)

  function navigate(page, anchor) {
    flushSync(() => setCurrentPage(page))

    if (anchor) {
      document.getElementById(anchor).scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }

  function openLecturer(id) {
    setSelectedId(id)
    navigate('lecturer')
  }

  const pages = {
    home: <HomePage onNavigate={navigate} />,
    partners: <PartnersPage />,
    lecturers: <LecturersPage lecturers={lecturers} onOpenLecturer={openLecturer} />,
    lecturer: <LecturerPage lecturer={selectedLecturer} onBack={() => navigate('lecturers')} />,
  }

  return (
    <div className="app">
      <NavPanel currentPage={currentPage} onNavigate={navigate} />
      <main className="container">{pages[currentPage]}</main>
      <Footer />
    </div>
  )
}

export default App
