import './App.css';
import QuizQuestion from './components/QuizQuestion';
import Counter from './components/Counter'

function App() {
  return (
    <section className="App">
      {/* <Counter/> */}
     <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="Header">
          <h1>Quiz Ten </h1>
          </div>
            
          </div>

          <div className="col-md-12">
            <div className="Question">
              <QuizQuestion></QuizQuestion>
            </div>
          </div>
          
        </div>
        </div>
      
    </section>
  );
}

export default App;
