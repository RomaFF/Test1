import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { fetchData } from './actions/actions'
import { CardList } from './components/CardList/CardList';

const App = () => {

  const data = useSelector(state => state.defaultData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className="App">
      {data ? <CardList/> : <div>Загрузка...</div>}
    </div>
  );
}

export default App;
