import { FiTarget } from "react-icons/fi"

function Goal() {
  return (
    <section className="goal">

      <div className="goal-content">

        <h2><FiTarget size={22} /> Objetivo Profesional</h2>

        <div className="goal-card">

          <p>
            Evolucionar hacia un perfil Full-Stack sólido que combine dominio técnico
            en frontend y backend con una visión estratégica del negocio — algo que
            ya practico como instructor TIC en el SENA y en cada proyecto que construyo.
          </p>

          <p>
            Busco equipos donde pueda aportar no solo código funcional, sino criterio:
            entender qué problema resuelve cada feature, cómo impacta al usuario y
            qué valor genera para la empresa.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Goal
