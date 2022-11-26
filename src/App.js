import Todo from "./components/Todo";

function App() {
  return (
    <section className="expect" id="expect">
        <div className="container">
            <h2 className="section-title heading1 animated">Что Вам необходимо?</h2>
            <div className="wishes">
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    </section>

  );
}

export default App;
