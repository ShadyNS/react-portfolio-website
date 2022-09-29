import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/nitishsihmar' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/ShadyNS' target='_blank'><BsGithub/></a>
        <a href='https://instagram.com/nitishsihmar' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials