import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
        @2023 Google-Docs-Clone. All rights reserved.
        <GitHubIcon style={{ color: "black" }}/>
        <LinkedInIcon style={{ color: "blue" }}/>
        <GoogleIcon style={{ color: "red" }}/>
    </div>
  )
}

export default Footer