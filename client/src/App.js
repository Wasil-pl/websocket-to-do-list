import ListView from './components/features/List/ListView';
import TaskForm from './components/features/TaskForm/TaskForm';
import Header from './components/layout/Header/Header';
import TaskSection from './components/layout/TaskSection/TaskSection';

import './styles/global.scss';

const App = () => {
  return (
    <div className="App">
      <Header>ToDoList.app</Header>

      <TaskSection>
        <h2>Tasks</h2>
        <ListView />
        <TaskForm />
      </TaskSection>
    </div>
  );
};

export default App;
