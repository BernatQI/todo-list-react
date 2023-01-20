import './App.css';
import BernatQiLogo from './components/BernatQiLogo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <BernatQiLogo />
      <div className='main-todo-list'>
        <h1>My Tasks</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
