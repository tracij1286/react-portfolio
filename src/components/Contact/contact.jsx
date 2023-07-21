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
           < img src="https://user-images.githubusercontent.com/115906481/232645974-d4500b54-8191-492a-9c54-d58072d3ac61.png
" alt="Message me" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank You, I'll be in touch soon! :)</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;





