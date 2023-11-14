import {Link} from 'react-router-dom'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeroSection() {
    const openPdfInNewTab = () => {
        const newTab = window.open('src/pdf/ResumePortfolioVer.pdf', '_blank');
        if (newTab) {
          newTab.focus();
        } else {
          alert('Please allow pop-ups for this site and try again.');
        }
      };
      
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm David</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    Hi, I’m David, a computer science major in my 4th year at UBC. I'm seeking a job opportunity for Winter 2024. 
                    <br />
                    I'm always looking forward to learning new things about software engineering as well as 
                    collaborating with others
                    <br /> 
                    in order to create well built software. View my resume and my projects below. 
                    </p>
                </div> 
                <div className='hero--section-socials'>
                    <a href="https://github.com/DavidMurgulet"
                    className='btn--social-github'>
                    <FontAwesomeIcon icon={faGithub} />    
                    </a>
                    <a href="https://www.linkedin.com/in/davidmurgulet/"
                    className='btn--social-linkedin'>
                    <FontAwesomeIcon icon={faLinkedinIn} />    
                    </a>
                </div>

                {/* <a href="src/pdf/ResumePortfolioVer.pdf" target='_blank'> */}
                    <button className="btn btn-primary" onClick={openPdfInNewTab}>Resume</button>
                {/* </a> */}
            </div>
        </section>
    )
}