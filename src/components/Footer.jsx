import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <InstagramIcon/> <TwitterIcon />
        </div>
            <p> &copy; 2023 indianFood.com </p>
    </div>
  )
}

export default Footer
