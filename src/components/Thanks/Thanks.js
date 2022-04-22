import './Thanks.css';
import phone from './illustration-thank-you.svg';

export const Thanks = (props) => {
  return (
    <div id="thanks">
      <img className="phone" src={phone} alt="" aria-hidden="true" />
      <p className="selected">You selected {props.rating} out of 5</p>
      <h2>Thank you!</h2>
      <p className="support">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    </div>
  )
}