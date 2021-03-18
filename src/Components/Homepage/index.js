import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import "./style.scss"
import "./mobile.scss"
import "./themes.scss"
import "./toggle.scss"

export default function Homepage(props) {

  const {theme, setTheme, isToggled, setIsToggled} = props

  useEffect(() => {
    isToggled ? setTheme("dark") : setTheme("light")
    return () => {
      window.scrollTo(0, 0)
    }
  }, [isToggled])

  return (
    <div className={`${theme}-homepage homepage`}>

      <label className="toggle-control">
        <input type="checkbox" checked={isToggled} onChange={() => setIsToggled(prev => !prev)}/>
        <span className="control"></span>
      </label>

      <h1>Hello!</h1>
      <p className="description">I'm Daniel, a former UI/UX Designer turned Front-end Developer.</p>
      <p className="description">I'm currently open to new opportunities, and would love to meet your company and get to know its goals.</p>
      <div id="buttons">
        <a href="mailto:daniel.moisei@gmail.com?subject=Let's work together" target="_blank" rel="noreferrer">
          <button className="button primary-button">GET IN TOUCH</button>
        </a>
        <a href="https://drive.google.com/file/d/1XaW1RrbNsQ15o8JggP4V9jbUhlnzLZS7/view?usp=sharing" target="_blank" rel="noreferrer">
          <button className="button secondary-button">CHECK MY CV</button>
        </a>
      </div>

      <div className={`${theme}-project project-card`}>
        <h2>01. UK Food Web</h2>
        <img
          src={
            theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615569619/Personal%20Website/UKFWMKUPLight_rmniym.jpg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615569618/Personal%20Website/UKFWMKUPDark_eaygxo.jpg"
          }
          alt="ukfoodweb"
        />
        <p>UK Food Web was a project that I joined some time after its ideation and inception. My main focus was on improving the existing design and user experience, and later on, working on brand new features that expanded on the product's mission.</p>
        <p>When I made the transition from designer to developer, I chose this project to be the one I build while learning. I did this for two reasons: because it was a familiar concept, and because it allowed me to compare my results with a real product that has a real userbase.</p>
        <p>The live, original version can be found <a href="https://ukfoodweb.info/app/home" target="_blank" rel="noreferrer">here</a>, while mine is below.</p>
        <div className="project-buttons">

          <Link to="/ukfw" className="try-button">
            <img src={theme === "light" ?
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615635745/Personal%20Website/logoEmbedLightBlue_t0oeus.svg" :
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoEmbedLightBlue_rgu7jt.svg"
            } alt="dev_icon" />
            <span>TRY IT OUT</span>
          </Link>

          <a href="https://github.com/DanielMoisei/uk-food-web" target="_blank" rel="noreferrer" className="git-button">
            <img src={theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoGitHubBlack_ghqoci.svg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580611/Personal%20Website/logoGitHubWhite_cpwcin.svg"
          } alt="github" />
            <span>CODE</span>
          </a>

          <a href="https://www.behance.net/gallery/83793357/UKFoodWeb" target="_blank" rel="noreferrer" className="design-button">
            <img src={theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615587488/Personal%20Website/logoBehanceBlack_qoy1ld.svg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoBehanceWhite_pamop0.svg"
          } alt="behance" />
            <span>DESIGN</span>
          </a>

        </div>
      </div>

      <div className={`${theme}-project project-card`}>
        <h2>02. Rateable Valuations</h2>
        <img
          src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615569618/Personal%20Website/RVImage_jtqmxf.png"
          alt="rv"
        />
        <p>This is a smaller, marketing type site that I've designed as a freelancer for a company that offers property valuations. I chose to turn it into a live version while just getting started as a developer, simply because it posed interesting learning opportunities.</p>
        <div className="project-buttons">

          <Link to="/rv" className="try-button">
            <img src={theme === "light" ?
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615635745/Personal%20Website/logoEmbedLightBlue_t0oeus.svg" :
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoEmbedLightBlue_rgu7jt.svg"
            } alt="dev_icon" />
            <span>TRY IT OUT</span>
          </Link>

          <a href="https://github.com/DanielMoisei/rateable-valuations" target="_blank" rel="noreferrer" className="git-button">
            <img src={theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoGitHubBlack_ghqoci.svg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580611/Personal%20Website/logoGitHubWhite_cpwcin.svg"
            } alt="github" />
            <span>CODE</span>
          </a>

          <a href="https://www.behance.net/gallery/83647043/RateableValuations-Homepage" target="_blank" rel="noreferrer" className="design-button">
            <img src={theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615587488/Personal%20Website/logoBehanceBlack_qoy1ld.svg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoBehanceWhite_pamop0.svg"
            } alt="behance" />
            <span>DESIGN</span>
          </a>

        </div>
      </div>

      <div className={`${theme}-project project-card`}>
        <h2>03. Byte-sized projects</h2>
        <img
          src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1616069554/Personal%20Website/ByteImage_wsufrr.jpg"
          alt="byte"
        />
        <p>While not a full-fledged product, I believe this collection of mini-projects that I've built while learning various concepts and ideas is important and interesting enough to earn itself a spot here.</p>
        <div className="project-buttons">

          <Link to="/bytes" className="try-button">
            <img src={theme === "light" ?
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615635745/Personal%20Website/logoEmbedLightBlue_t0oeus.svg" :
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoEmbedLightBlue_rgu7jt.svg"
            } alt="dev_icon" />
            <span>TRY IT OUT</span>
          </Link>

          <a href="https://github.com/DanielMoisei/byte-projects" target="_blank" rel="noreferrer" className="git-button">
            <img src={theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoGitHubBlack_ghqoci.svg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580611/Personal%20Website/logoGitHubWhite_cpwcin.svg"
            } alt="github" />
            <span>CODE</span>
          </a>

        </div>
      </div>

      <h3 id="thanks">Thank you for visiting!</h3>

    </div>
  )
}
