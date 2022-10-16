import "../style/App.scss"
import CardContainer from "./CardContainer"

function App() {
  return (
    <div className="App">
      <section id="main">  
        <CardContainer id="todo" />
        <CardContainer id="done" />
      </section>
    </div>
  );
}

export default App;
  