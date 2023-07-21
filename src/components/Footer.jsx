import React from 'react'
import me from '../image/m2.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="Founder" />
            <h2>Amit Singh Rawat</h2>

            <p>Think alway "Out of the Box"</p>
        </div>
        <aside>
            <h2>Social media</h2>
            <article>
                <a href="https://github.com/asr9810?tab=repositories" target={"blank"}><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/amit-singh-rawat-931734205/" target={"blank"}><AiFillLinkedin/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer
