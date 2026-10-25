import { useState, useRef, useEffect } from 'react'
import './CopyEmail.css'

function CopyEmail({ email }) {
  const [message, setMessage] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setMessage('Скопировано')
    } catch {
      setMessage('Не удалось скопировать')
    }

    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setMessage(''), 10000)
  }

  return (
    <div className="copy-email">
      <span className="copy-email-address">{email}</span>
      <button className="copy-email-btn" onClick={handleCopy}>
        Скопировать email
      </button>
      {message && <span className="copy-email-message">{message}</span>}
    </div>
  )
}

export default CopyEmail