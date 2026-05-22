import { FiUser } from "react-icons/fi"

function Profile() {
  return (
    <section className="profile">

      <div className="profile-content">

        <h2><FiUser size={22} /> Perfil Profesional</h2>

        <p>
          Desarrollador Frontend especializado en JavaScript y React, con experiencia 
          real formando otros profesionales como instructor TIC en el SENA. Combino 
          habilidades técnicas con una sólida visión estratégica y comercial, fortalecida 
          a través de años de experiencia en liderazgo, gestión y análisis organizacional.
        </p>

        <p>
          Actualmente en ruta hacia Full-Stack — aprendiendo backend con Node.js,
          bases de datos y despliegue — con el objetivo de participar en el ciclo
          completo de productos digitales que no solo funcionen, sino que generen
          valor real para usuarios y empresas.
        </p>

      </div>

    </section>
  )
}

export default Profile
