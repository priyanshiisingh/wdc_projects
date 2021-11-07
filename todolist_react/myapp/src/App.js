// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <TodoForm /> */}
      <TodoList />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
