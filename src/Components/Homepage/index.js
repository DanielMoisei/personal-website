import React, {useState, useEffect} from "react"

import "./style.scss"
import "./toggle.scss"

export default function Homepage(props) {

  const {theme, setTheme} = props
  const [isToggled, setIsToggled] = useState(false)

  useEffect(() => {
    isToggled ? setTheme("dark") : setTheme("light")
  }, [isToggled])

  return (
    <div className={`${theme}-homepage homepage`}>

      <label className="toggle-control">
        <input type="checkbox" checked={isToggled} onChange={() => setIsToggled(prev => !isToggled)}/>
        <span className="control"></span>
      </label>

      <h1>Hello!</h1>
      <p className="description">I'm Daniel, a former UI/UX Designer turned Front-end Developer.</p>
      <p className="description">I'm currently open to new opportunities, and would love to meet your company and get to know its goals.</p>
      <div id="buttons">
        <button className="button primary-button">GET IN TOUCH</button>
        <button className="button secondary-button">CHECK MY CV</button>
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
        <p>When I made the transition from designer to developer, I chose this project to be the one I build while learning. I did this for two reasons: first, because it was a familiar concept, and  secondly, because it allowed me to compare my results with a real product that has a real userbase.</p>
        <p>The live, original version can be found <a href="https://ukfoodweb.info/app/home" target="_blank">here</a>, while mine is below.</p>
        <div className="project-buttons">
          <button className="try-button">
            <img src={theme === "light" ?
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoEmbedNavy_irsnmt.svg" :
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoEmbedLightBlue_rgu7jt.svg"
            } alt="dev_icon" />
            <span>TRY IT OUT</span>
          </button>
          <button className="git-button">
            <img src={theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoGitHubBlack_ghqoci.svg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580611/Personal%20Website/logoGitHubWhite_cpwcin.svg"
          } alt="github" />
            <span>CODE</span>
          </button>
          <button className="design-button">
            <img src={theme === "light" ?
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoBehanceBlue_aomya7.svg" :
            "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615580609/Personal%20Website/logoBehanceWhite_pamop0.svg"
          } alt="behance" />
            <span>DESIGN</span>
          </button>
        </div>
      </div>

    </div>
  )
}
