import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStarships, sortStarships, sortPassengers } from './action/action';
import './App.css';

import Starships from './conteiners/ShipsList/shipsList'

function App() {
  const dispatch = useDispatch();
  const starships = useSelector(state => state.starships);

  useEffect(() => {
    dispatch(fetchStarships());
  }, [dispatch]);

  const starshipsSort = () => {
    dispatch(sortStarships());
  }

  const passengersSort = () => {
    dispatch(sortPassengers());
  }

  // const modelStarships = () => {
  //   dispatch(StarshipsModel())
  // }

  return (
    <div>
      <div className='list'>
        <button onClick={starshipsSort}>Сортировка корабле по алфавиту</button>
        <button onClick={passengersSort}>Сортировка корабле по количеству пассажиров</button>
        {/* <button onClick={modelStarships}>Показать модель корабля</button> */}


      </div>
      { <Starships starships={starships}/>}
    </div>
  );
}

export default App;


