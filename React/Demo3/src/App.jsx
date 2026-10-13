function Greeting({ name }) {
  return <h2>Hello {name}</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Pratik" />
      <Greeting name="Amit" />
    </div>
  );
}

export default App;