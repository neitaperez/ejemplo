import { FiStar, FiAward, FiBookOpen, FiTrendingUp } from "react-icons/fi"

const valores = [
  {
    icon: <FiAward size={20} />,
    titulo: "Formación académica multidisciplinar",
    desc: "Combina gestión empresarial, análisis financiero y desarrollo de soluciones tecnológicas, aportando una visión estratégica y técnica orientada a la innovación y la optimización de procesos.",
  },
  {
    icon: <FiBookOpen size={20} />,
    titulo: "Instructor TIC – SENA",
    desc: "Dicto cursos certificados de informática, Excel, Power BI y diseño web, formando competencias digitales en adultos y profesionales.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    titulo: "Tecnología con visión de negocio",
    desc: "Conecto soluciones digitales con objetivos empresariales, entendiendo necesidades operativas y orientando el desarrollo hacia resultados concretos.",
  },
]

function Value() {
  return (
    <section className="value">

      <div className="value-content">

        <h2><FiStar size={22} /> Valor Diferencial</h2>

        <div className="value-grid">
          {valores.map((item, i) => (
            <div className="value-card" key={i}>
              <div className="value-card__icon">{item.icon}</div>
              <div>
                <h4 className="value-card__title">{item.titulo}</h4>
                <p className="value-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Value
