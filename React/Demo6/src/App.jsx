const skills = ["HTML", "CSS", "JavaScript", "React"];

function Skills() {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

export default Skills;