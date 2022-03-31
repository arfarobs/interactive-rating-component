import star from './icon-star.svg';
import './Rating.css';

export const Rating = () => {
  return (
    <>
      <img src={star} alt="" aria-hidden="true" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <form>
        <label htmlFor="one" className="spacer" id="one">
          <input name="rating" type="radio" value="1"/>
          1
        </label>
        <label htmlFor="two" className="spacer">
          <input name="rating" type="radio" value="2"/>
          2
        </label>
        <label htmlFor="three" className="spacer">
          <input name="rating" type="radio" value="3"/>
          3
        </label>
        <label htmlFor="four" className="spacer">
          <input name="rating" type="radio" value="4"/>
          4
        </label>
        <label htmlFor="five" id="five">
          <input name="rating" type="radio" value="5"/>
          5
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}