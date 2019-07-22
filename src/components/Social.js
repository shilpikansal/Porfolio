import React from 'react';
import SOCIAL_PROFILES from '../data/SOCIAL_PROFILES'


const Social_Profile = (props)=>
{
  const { id, link, image } = props.profile;
    return(
      <div style={{display:'inline-block'}}>
        <a href={link}>
        <img src={image} className="img-fluid" alt="Responsive image" style={{width: 60, height: 60, margin: 10}} />
        </a>
      </div>
    )
}


const Social = () =>
(
  <div>
  <h2> Connect with me </h2>
  {
    SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
      <Social_Profile key={SOCIAL_PROFILE.id} profile={SOCIAL_PROFILE} />
    ))
  }
  </div>
)

export default Social;
