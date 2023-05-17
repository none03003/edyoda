import React, { useState } from 'react';
import './Body.css';
import no from './no.png';
import logo from './book1.png';
import clock from './clock.png';
import live from './tv.png';
import dgree from './degree.png';
import limit from './limit.png'

function Body() {
  const [amount, setAmount] = useState(99);
  const [amount1, setAmount1] = useState(179);
  const [amount2, setAmount2] = useState(149);
  const [amount3, setAmount3] = useState(99);
  const [amount4] = useState(18500);
  const [amount5] = useState(18401);
  const [amount6] = useState(149);
  const handleOfferChange = (event) => {
    const selectedOffer = event.target.value;
    // Update the amount based on the selected offer
    if (selectedOffer === 'offer1') {
      setAmount(99);
    } else if (selectedOffer === 'offer2') {
      setAmount1(179);
    } else if (selectedOffer === 'offer3') {
      setAmount2(149);
    } else if (selectedOffer === 'offer4') {
      setAmount3(99);
    }
  };

  return (
    <div className="container">
      <div className="description">
        <h1>
          Access curated courses worth <br />
          ₹<b className="a">18,500</b> at just <b className="b">₹99</b> per year!
        </h1>
        <div className='contain'>
          <h5>
            <img className="logo" src={logo} alt="logo" />
            <b className="c">100+</b> job-relevant courses
          </h5>
          <h5>
            <img className="logo" src={clock} alt="icon" />
            <b className="c">20,000+</b> Hours of content
          </h5>
          <h5>
            <img className="logo" src={live} alt="icon" />
            <b className="c">Exclusive</b> webinar access
          </h5>
          <h5>
            <img className='logo' src={dgree} alt='icon' />
            Scholarship worth <b className="c">₹94,500</b>
          </h5>
          <h5>
            <img className="logo" src={no} alt="icon" />
            <b className="c">Ad-free</b> learning experience
          </h5>
        </div>
      </div>

      <div className="offer-box">
        <div className="container1">
          <div className="circle">1</div>
          <div className="circle">2</div>
        </div>
        <div className="container1">
          <h6>Sign Up</h6>
          <h5>Subscribe</h5>
        </div>
        <h5 className='z'>Select your subscription plan</h5>
        <div className="container3">
          <div className="offer-radio expired">
            <button className='q' disabled>offer expired</button>
            <input type="radio" id="offer1" name="offer" value="offer1" checked disabled />
            <label1 htmlFor="offer1">12 Month Subscription</label1>
            <p className='r'>Total</p>
            <p className='t'>₹{amount}</p>
            <p className='o'>₹8 /mo</p>
          </div>
          <div className="offer-radio p">
            <input type="radio" id="offer2" name="offer" value="offer2" onChange={handleOfferChange} />
            <label htmlFor="offer2">12 Months Subscription</label>
            <button className='recommended'>Recommended</button>
            <p className='w'>Total</p>
            <p className='e'>₹{amount1}</p>
            <p className='y'>₹8 /mo</p>
          </div>
          <div className="offer-radio">
            <input type="radio" id="offer3" name="offer" value="offer3" onChange={handleOfferChange} />
            <label htmlFor="offer3">6 Months Subscription</label>
            <p className='w'>Total</p>
            <p className='e'>₹{amount2}</p>
            <p className='y'>₹8 /mo</p>
          </div>
          <div className="offer-radio">
            <input type="radio" id="offer4" name="offer" value="offer4" onChange={handleOfferChange} />
            <label htmlFor="offer4">3 Months Subscription</label>
            <p className='w'>Total</p>
            <p className='e'>₹{amount3}</p>
            <p className='y'>₹8 /mo</p>
          </div>
          <div className='fotor'>
            <div className='line'></div>
            <b className='sub'>Subscription fee</b> <p className='h'>₹ {amount4}</p>
            <div className='box'>
              limited offer <p className='i'>₹ {amount5}</p>
              <p className='f'> <img className='limit' src={limit} alt='icon'></img>Offer valid till 25th March 2023</p>
            </div>
              Total (Incl. of 18% GST)

              <p className='g'>₹ {amount6}
              </p>
        </div>
        <div className="buttons">
          <button className="cancel-button">Cancel</button>
          <button className="pay-button">Proceed to Pay</button>
        </div>
        <div className="down">
          <img className="icon" src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
