import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
    <div className="content">
        <h3>Let's Connect</h3>
        <p>
        1st Floor, Arcadian, 31/2/1, BLD NO.12, North Road, KP,Pune-411001,        </p>
        <h4><a href="mailto:info@digital.com">contactus@digiintel.com</a></h4>
        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
    </div>
</div>
  )
}

export default Card