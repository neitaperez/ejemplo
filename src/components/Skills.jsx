import { FiMonitor, FiServer, FiTool } from "react-icons/fi"

const frontend = [
  { nombre: "JavaScript (ES6+)", nivel: 85 },
  { nombre: "React.js",          nivel: 82 },
  { nombre: "HTML5 / CSS3",      nivel: 90 },
  { nombre: "Responsive Design", nivel: 85 },
  { nombre: "Consumo de APIs REST", nivel: 75 },
]

const backend = [
  { nombre: "Node.js",               nivel: 50 },
  { nombre: "Express.js",            nivel: 45 },
  { nombre: "Bases de datos SQL",    nivel: 50 },
  { nombre: "Bases de datos NoSQL",  nivel: 40 },
  { nombre: "Autenticación básica",  nivel: 45 },
]

const herramientas = [
  { nombre: "Git & GitHub",       nivel: 80 },
  { nombre: "VS Code",            nivel: 95 },
  { nombre: "Vite",               nivel: 75 },
  { nombre: "Postman",            nivel: 70 },
  { nombre: "Docker",             nivel: 30 },
]

function SkillBar({ nombre, nivel }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{nombre}</span>
        <span className="skill-bar__pct">{nivel}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: `${nivel}%` }}
        />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section className="skills">

      <div className="skills-content">

        <h2><FiTool size={22} /> Stack Técnico &amp; Ruta de Aprendizaje</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3><FiMonitor size={18} /> Frontend</h3>
            {frontend.map((s) => <SkillBar key={s.nombre} {...s} />)}
          </div>

          <div className="skill-card">
            <h3><FiServer size={18} /> Backend <span className="skill-card__badge">En formación</span></h3>
            {backend.map((s) => <SkillBar key={s.nombre} {...s} />)}
          </div>

          <div className="skill-card">
            <h3><FiTool size={18} /> Herramientas</h3>
            {herramientas.map((s) => <SkillBar key={s.nombre} {...s} />)}
          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills
