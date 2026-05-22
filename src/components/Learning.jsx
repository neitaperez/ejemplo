import { FiBookOpen, FiClock, FiCheckCircle, FiCircle } from "react-icons/fi"

const items = [
  { texto: "Backend con Node.js y Express",              estado: "en-progreso" },
  { texto: "Bases de datos relacionales y no relacionales", estado: "en-progreso" },
  { texto: "Buenas prácticas de arquitectura web",       estado: "en-progreso" },
  { texto: "TypeScript",                                  estado: "pendiente"   },
  { texto: "Despliegue de aplicaciones web",              estado: "pendiente"   },
]

const estadoConfig = {
  "en-progreso": {
    icon: <FiClock size={15} />,
    label: "En progreso",
    className: "learning-item--active",
  },
  "pendiente": {
    icon: <FiCircle size={15} />,
    label: "Próximo",
    className: "learning-item--pending",
  },
  "completado": {
    icon: <FiCheckCircle size={15} />,
    label: "Completado",
    className: "learning-item--done",
  },
}

function Learning() {
  return (
    <section className="learning">

      <div className="learning-content">

        <h2><FiBookOpen size={22} /> Actualmente Fortaleciendo</h2>

        <div className="learning-card">
          {items.map((item, i) => {
            const config = estadoConfig[item.estado]
            return (
              <div key={i} className={`learning-item ${config.className}`}>
                <span className="learning-item__icon">{config.icon}</span>
                <span className="learning-item__texto">{item.texto}</span>
                <span className="learning-item__badge">{config.label}</span>
              </div>
            )
          })}
        </div>

      </div>

    </section>
  )
}

export default Learning
