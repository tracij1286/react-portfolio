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
           < img src="https://user-images.githubusercontent.com/79061264/128789704-2568dddf-3635-4b3f-9807-bb9432f8a0d7.jpg" alt="Message me" />
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





