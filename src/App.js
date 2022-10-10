
import './App.css';
import { useReducer } from 'react';
import { Developer } from './components/Developer'
import { DeveloperForm } from './components/DeveloperForm'
import { DeveloperList } from './components/DeveloperList';

function App() {
  const [developers, dispatch] = useReducer(Developer, []);

  return (
    <div className="App">
      <h1>Developer App</h1>
      <DeveloperForm dispatch={dispatch} />
      <DeveloperList developers={developers} dispatch={dispatch} />
      {/* <ul>
        {developers.map((developer, index) => (
          <li key={index}>
            <span>{developer.name}</span>
            <span>{developer.skill}</span>
          </li>
        ))}
      </ul> */}
   
    </div>
  );
}

export default App;
