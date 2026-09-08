import '../css/contact.css';
import FadeIn from '../components/FadeIn';

function Contact() {
    return (
        <section className="contact">
            <FadeIn className="contact--inner">
                <h2 className="contact--title">Contact</h2>
                <p className="contact--subtitle">Available for new opportunities — let's talk quality and automation.</p>
                <div className="contact--cta">
                    <a href="mailto:andrewc.neilson@gmail.com" className="contact--button">Email</a>
                    <a href="https://linkedin.com/in/andrew-neilson-13307933" target="_blank" rel="noopener noreferrer" className="contact--button linkedin">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                    <a href={`${process.env.PUBLIC_URL}/Andrew%20Neilson%20-%20Resume.pdf`} download="Andrew Neilson - Resume.pdf" className="contact--button secondary">Download CV</a>
                </div>
            </FadeIn>
        </section>
    )
}

export default Contact;
