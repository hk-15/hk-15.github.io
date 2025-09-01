import { Page } from "../Page/Page";
import headshot from '../../Images/holly.jpeg';
import './Home.scss';

export default function Home() {
    return (
        <Page>
            <div className="about-container">
                <div className="about-text">
                    <h2>About</h2>
                    <p>
                        I am a career switcher with 4 years&#8217; experience in editorial departments in the publishing industry, now looking for software development opportunities. As an editorial assistant and assistant editor, I was responsible for project managing books from acquisition to publication. Working with HTML and CSS for eBooks sparked my interest in further developing my technical skills.
                    </p>
                    <p>
                        After nearly a year of self-guided learning, squeezed in after work and at the weekends, I took the leap and joined the TechSwitch full-stack bootcamp. I have gained a range of experience of working with different technologies and languages, including React, ASP.Net Core and MVC, Entity Framework Core, PostgreSQL and TypeScript, among others, and I am excited to continue developing my skills and knowledge.
                    </p>
                    <p>
                        In my spare time, I enjoy taking on challenging knitting projects and going to the cinema. I am based in London.
                    </p>
                </div>
                <img className="headshot" src={headshot} alt="Holly wears glasses and is laughing, looking to the left." />
                <div className="headshot-offset"></div>
            </div>
            <h3>Skills</h3>
        </Page>
    )
}