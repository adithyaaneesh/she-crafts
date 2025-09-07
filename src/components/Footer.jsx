import '../styles/Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className='footer-content container'>
                <div>
                    <h2>Get In Touch</h2>
                    <p>Have a custom request? Email she-crafts@example.com</p>
                    <div className='query'>
                        <input type="email" name="email" id="email" placeholder='Your Email' />
                        <button type="submit">SUBSCRIBE</button>
                    </div>
                </div>
                <div className='social'>
                    <h3>FOLLOW</h3>
                    <button><a href='#'>Instagram</a></button>
                    <button><a href='#'>WhatsApp</a></button>
                    <button><a href='#'>Pinterest</a></button>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer