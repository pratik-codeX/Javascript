function App() {
  const names = ["Pratik", "Amit", "Rahul"];

  return (
    <div>
      <h1>Students</h1>

      {names.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
}

export default App;