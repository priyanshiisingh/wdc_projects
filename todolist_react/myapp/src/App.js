import TodoList from "./components/TodoList";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
