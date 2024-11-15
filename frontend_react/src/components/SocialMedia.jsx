import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin  } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://x.com/cliff_devops" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
        </a>
    </div>
    <div>
    <a href="https://facebook.com/cliff.oyoh" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://instagram.com/cliff_j.a" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
        </a>
    </div>
    <div>
    <a href="https://linkedin.com/in/cliff-omollo-14b442269" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;