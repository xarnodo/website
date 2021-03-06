import React from "react"
import { teamMemberData } from "./Data"

class TeamMember extends React.Component {
  componentDidMount() {
    const AOS = require("aos")
    this.aos = AOS
    this.aos.init({
      disable: "mobile",
      once: true,
    })
  }
  render() {
    return (
      <div className="container team-inner-container ">
        <div className="team-grid">
          <div className="grid-inner-container section">
            {teamMemberData.map(member => {
              const {
                id,
                imgUrl,
                imgAlt,
                name,
                designation,
                linkedInUrl,
                linkedInAlt,
                linkedInImg,
              } = member
              return (
                <div
                  className="grid-item"
                  key={id}
                  data-aos="fade-up"
                  data-aos-delay={100 * id}
                >
                  <div className="member-image">
                    <img src={imgUrl} alt={imgAlt} />
                  </div>
                  <div className="member-name">
                    <p>{name}</p>
                  </div>
                  <div className="member-desing">
                    <p>{designation}</p>
                  </div>
                  <div className="member-linkedin">
                    <a
                      target="_blank"
                      href={linkedInUrl}
                      rel="noopener noreferrer"
                    >
                      <img src={linkedInImg} alt={linkedInAlt} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMember
