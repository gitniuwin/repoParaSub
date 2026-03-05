import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card">
      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>

      <h2>Skills</h2>
      {visible && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Skills;
