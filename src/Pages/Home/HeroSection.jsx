import {Link} from 'react-router-dom'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import resume from '/Users/davidmurgulet/Documents/Projects/react-portfolio/src/pdf/resume.pdf'
// import resume from '/Users/davidmurgulet/Documents/Projects/react-portfolio/public/pdf/resume.pdf'
// import resume from 'public/pdf/resume.pdf'

export default function HeroSection() {return (
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

                <a href={process.env.PUBLIC_URL + '/pdf/resume.pdf'} target='_blank'>
                    <button className="btn btn-primary">
                        Resume
                        </button>
                </a>
                
            </div>
        </section>
    )
}