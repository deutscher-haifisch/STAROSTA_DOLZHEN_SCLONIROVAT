import './DisciplineList.css'

function DisciplineList({ disciplines }) {
  return (
    <div className="disciplines">
      {disciplines.map((discipline, index) => (
        <details key={discipline.title} className="discipline" open={index === 0}>
          <summary>
            <h3>{discipline.title}</h3>
            <p>{discipline.description}</p>
          </summary>
          <ol className="discipline-topics">
            {discipline.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ol>
        </details>
      ))}
    </div>
  )
}

export default DisciplineList
