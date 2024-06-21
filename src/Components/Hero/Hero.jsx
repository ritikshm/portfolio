import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Ritik Kumar,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from India, A passionate web developer having an experience of building web and Graphics design with Javascript/ Reactjs/ Nodejs/and some other cool software for graphic design.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
        <div className="hero-resume">My Projects</div>
      </div>
    </div>
  )
}

export default Hero
