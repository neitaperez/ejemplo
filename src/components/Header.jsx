import { useNavigate } from "react-router-dom"
import profileImage from "../assets/profile.jpg"
import { FiCpu, FiMapPin, FiMail, FiLinkedin, FiGithub, FiGlobe } from "react-icons/fi"

function Header() {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="header-content">

        <div
          className="header-photo"
          onClick={() => navigate("/sena")}
          style={{ cursor: "pointer" }}
        >
          <img src={profileImage} alt="Juan Pablo Neita" />
        </div>

        <div className="header-info-wrapper">

          <h1>Juan Pablo Neita P</h1>

          <p className="header-tagline">
            Construyo interfaces, entiendo negocios.
          </p>

          <h3 className="header-role">
            <FiCpu size={16} /> Frontend Developer · Full-Stack en camino · Instructor TIC SENA
          </h3>

          <div className="header-info">

            <p>
              <strong><FiMapPin size={14} /> Ubicación:</strong>
              {" "}Neiva, Huila, Colombia
            </p>

            <p>
              <strong><FiMail size={14} /> Contacto:</strong>
              <a href="mailto:juandev@jpncodes.com">
                juandev@jpncodes.com
              </a>
            </p>

            <p>
              <strong><FiLinkedin size={14} /> LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/jpncodes"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/jpncodes
              </a>
            </p>

            <p>
              <strong><FiGithub size={14} /> GitHub:</strong>
              <a
                href="https://github.com/neitaperez"
                target="_blank"
                rel="noreferrer"
              >
                github.com/neitaperez
              </a>
            </p>

            <p>
              <strong><FiGlobe size={14} /> Portafolio:</strong>
              <a
                href="https://jpncodes.com"
                target="_blank"
                rel="noreferrer"
              >
                jpncodes.com
              </a>
            </p>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Header
