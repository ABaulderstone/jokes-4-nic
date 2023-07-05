import { useEffect, useState } from 'react';
import './App.css';
const getJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to get joke');
  }
  const data = await response.json();
  return data.joke;
};
function App() {
  const [joke, setJoke] = useState('');

  const onButtonClick = () => {
    getJoke()
      .then(setJoke)
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className='card'>
        <p>{joke ? joke : 'Click for a dad joke'}</p>
        <button onClick={onButtonClick}>New Joke</button>
      </div>
    </>
  );
}

export default App;
