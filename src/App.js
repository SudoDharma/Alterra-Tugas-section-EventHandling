import './App.css';

import Form from './components/Form';
import List from './components/List';

function App() {

  const data = [
    {
      id: 1,
      title: "Mengerjakan exercise",
      completed: true
    },
    {
      id: 2,
      title: "Mengerjakan assignment",
      completed: false
    },
  ]

  return (
    <div className="container">
      <h1>todos</h1>
      <Form/>
      <List todos={data}/>
    </div>
  );
}

export default App;
