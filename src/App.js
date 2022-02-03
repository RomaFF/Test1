import './App.css';
import {useState, useEffect} from 'react'

import { CardList } from './components/CardList/CardList';

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(`https://61fbc6493f1e34001792c5dd.mockapi.io/data/test`)
        .then(res => res.json())
        .then(json => {
          console.log(json) 
          setData(json)
        })
  }, [])

  return (
    <div className="App">
      {data ? <CardList data={data}/> : <div>Загрузка...</div>}
    </div>
  );
}

export default App;
