import React from 'react';
import "./footer.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {

    return (
        <div className="footer" id="footer">
        <ul>
            <li><a href="https://github.com/tracij1286" target="_blank" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
            <li><a href="https://www.linkedin.com/ " target="_blank" rel="noreferrer"><LinkedInIcon className="icon"></LinkedInIcon></a></li>
            <li><a href="https://twitter.com/target/="target="_blank" rel="noreferrer"><TwitterIcon className="icon"></TwitterIcon></a></li>
            </ul>
    </div>
        );
}

export default Footer;