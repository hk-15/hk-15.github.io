import { Page } from "../Page/Page";
import './Home.scss';
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiMocha } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";


export default function Home() {
    return (
        <Page>
            <div className="about-container">
                <img className="headshot" src={`${process.env.PUBLIC_URL}/Images/holly.jpeg`} alt="Holly wears glasses and is laughing, looking to the left." />
                <div className="about-text">
                    <p className="first-paragraph">
                        I am a career switcher with 4 years&#8217; experience in editorial departments in the publishing industry, now looking for software development and engineering opportunities. As an editorial assistant and assistant editor, I was responsible for project managing books from acquisition to publication. Working with HTML and CSS for eBooks sparked my interest in further developing my technical skills.
                    </p>
                    <p>
                        After nearly a year of self-guided learning, squeezed in after work and at the weekends, I took the leap and joined the TechSwitch full-stack bootcamp. I have gained a range of experience of working with different technologies and languages, including React, ASP.Net Core and MVC, Entity Framework Core, PostgreSQL and TypeScript, among others, and I am excited to continue developing my skills and knowledge.
                    </p>
                    <p>
                        In my spare time, I enjoy taking on challenging knitting projects and going to the cinema. I am based in London.
                    </p>
                </div>
            </div>
            <h3>Skills</h3>
            <div className="skills-container">
                <TbBrandCSharp />
                <BiLogoTypescript />
                <RiJavascriptFill />
                <FaPython />
                <TbSql />
                <FaHtml5 />
                <FaCss3Alt />
                <FaSass />
                <FaReact />
                <FaBootstrap />
                <AiOutlineDotNet />
                <SiMocha />
                <SiJest />
                <FaGit />
                <BiLogoPostgresql />
                <SiSwagger />
                <SiPostman />
            </div>
        </Page>
    )
}