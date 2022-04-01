import './Thanks.css';
import phone from './illustration-thank-you.svg';

export const Thanks = () => {
  return (
    <>
      <img className="thanks phone" src={phone} alt="" aria-hidden="true" />
      <p className="thanks selected">You selected Add rating here out of 5</p>
      <h2 className="thanks">Thank you!</h2>
      <p className="thanks support">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    </>
  )
}