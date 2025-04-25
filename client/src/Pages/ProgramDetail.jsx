import "../styles/ProgramDetail.css"; // путь подправь, если нужно
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProgramDetail = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    fetch(`/api/programs/${id}`)
      .then(res => res.json())
      .then(data => setProgram(data))
      .catch(err => console.error("Ошибка загрузки:", err));
  }, [id]);

  if (!program) return <div>Загрузка...</div>;

  return (
    <div className="program-detail-container">
      <h1>{program.name}</h1>
      <p>{program.description}</p>

      <div>
        <h2>Упражнения:</h2>
        <ul>
          {program.exercises.map((ex, index) => (
            <li key={index}>
              <strong>{ex.name}</strong>: {ex.sets} подходов по {ex.reps} повторений
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProgramDetail;