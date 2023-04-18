import React from 'react';
import "./contact.scss"
 // eslint-disable-next-line
import { useState } from 'react';
 // eslint-disable-next-line
import { validateEmail } from '../../utils/helpers';


function Contact() {
 // eslint-disable-next-line
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="left">
           < img src="https://user-images.githubusercontent.com/115906481/232622358-ebeea995-77d3-4182-a5f9-49f5834d9b8a.jpg
" alt="Message me" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank You, I'll be in touch soon :)</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;





