import "./App.css";
// import Clock from "./Clock";
import List from "./List";

function App() {
  function getName(name) {
    return name;
  }

  const name = getName("Kresimir");
  
  // JSX
  return (
    <div className="App">
      <header className="App-header">
        <p>My name is: {name}</p>
        <div>Here is a list: </div>
        <List />
        {/* <Clock /> */}
      </header>
    </div>
  );
}

export default App;
