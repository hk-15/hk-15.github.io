import { Page } from "../Page/Page";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Contact.scss";

export default function Contact() {
    return (
        <Page containerClassName="contact-page">
            <p>Got something to say? Get in touch.</p>
            <div className="contact-icons">
                <a href="mailto:hollyknox15@gmail.com" target="_blank" rel="noreferrer"><IoMdMail /></a>
                <a href="https://github.com/hk-15" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/holly-knox" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
        </Page>
    )
}