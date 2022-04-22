import './App.css';
import { Rating } from '../Rating/Rating';
import { Thanks } from '../Thanks/Thanks';
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(null);

  const handleChange = (e) => {
    setRating(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      document.getElementById('rating').style.display = 'none';
      document.getElementById('thanks').style.display = 'block';
    } else {
      window.alert('Please select a rating');
    }
  }

  const handleClick = () => {
    const labels = document.getElementsByClassName('label');
    const inputs = document.getElementsByClassName('input');
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.background = inputs[i].checked ? '#7C8798' : '#262E38';
      labels[i].style.color = inputs[i].checked ? '#FFF' : '#7C8798';
    }
  }

  return (
    <article>
      <Rating onSubmit={handleSubmit} onChange={handleChange} onClick={handleClick}/>
      <Thanks rating={rating}/>
    </article>
  );
}

export default App;
