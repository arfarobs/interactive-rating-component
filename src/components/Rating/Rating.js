import star from './icon-star.svg';
import './Rating.css';

export const Rating = (props) => {
  return (
    <div id="rating">
      <img id="star" src={star} alt="" aria-hidden="true" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="one" className="spacer label" id="one" onClick={props.onClick}>
          <input className="input" name="rating" type="radio" value="1" onChange={props.onChange}/>
          1
        </label>
        <label htmlFor="two" className="spacer label" onClick={props.onClick}>
          <input className="input" name="rating" type="radio" value="2" onChange={props.onChange}/>
          2
        </label>
        <label htmlFor="three" className="spacer label" onClick={props.onClick}>
          <input className="input" name="rating" type="radio" value="3" onChange={props.onChange}/>
          3
        </label>
        <label htmlFor="four" className="spacer label" onClick={props.onClick}>
          <input className="input" name="rating" type="radio" value="4" onChange={props.onChange}/>
          4
        </label>
        <label htmlFor="five" id="five" className="label" onClick={props.onClick}>
          <input className="input" name="rating" type="radio" value="5" onChange={props.onChange}/>
          5
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}