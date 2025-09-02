import { Page } from "../Page/Page";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Contact.scss";

export default function Contact() {
    return (
        <Page containerClassName="contact-page">
            <p>Got something to say? Get in touch.</p>
            <a href="mailto:hollyknox15@gmail.com" target="_blank"><IoMdMail /></a>
            <a href="https://github.com/hk-15" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/holly-knox" target="_blank"><FaLinkedin /></a>
        </Page>
    )
}