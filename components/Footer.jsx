import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 @Debrightess All rights reserverd</p>
      <p className='icons'>
        <AiFillInstagram />
        <a href='https://www.twitter.com/debrightess'>
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  )
}

export default Footer
