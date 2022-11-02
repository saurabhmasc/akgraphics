import './App.css';

function App() {

  return (
    <div className="App">
        <section className="section1"> 
          <h1 className="scroll" data-rate=".4" data-direction="virtical">Section-1</h1> 
        </section>
        <section className="section2"> 
          <h1 className="scroll" data-rate=".3" data-direction="virtical">Section-2</h1> 
        </section>
        <section className="section3"> 
          <h1 className="scroll" data-rate=".2" data-direction="virtical">Section-3</h1> 
        </section>
    </div>
  );
}

export default App;
