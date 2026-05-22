import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Sena.css"

const cursos = [
  {
    id: 1,
    titulo: "Informática: Word, Excel e Internet",
    subtitulo: "Aprende informática desde cero y domina las herramientas digitales básicas",
    horas: 40,
    categoria: "basico",
    icon: "💻",
    tag: "Básico",
    colorClass: "card--blue",
    link: "https://forms.cloud.microsoft/r/1j9BSjHfbs?origin=lprLink",
  },
  {
    id: 2,
    titulo: "Excel: Creación de Funciones y Gráficos",
    subtitulo: "Aprende funciones, fórmulas y gráficos profesionales en Excel",
    horas: 48,
    categoria: "excel",
    icon: "📊",
    tag: "Excel",
    colorClass: "card--green",
    link: "https://forms.cloud.microsoft/r/CZhDFk1NXH?origin=lprLink"
  },
  {
    id: 3,
    titulo: "Excel Avanzado para Solución de Problemas",
    subtitulo: "Automatiza procesos y domina herramientas avanzadas de Excel",
    horas: 40,
    categoria: "excel",
    icon: "⚙️",
    tag: "Excel",
    colorClass: "card--amber",
    link: "https://forms.cloud.microsoft/r/ZNNWMt3CDJ?origin=lprLink",
  },
  {
    id: 4,
    titulo: "Manejo Intermedio de Excel",
    subtitulo: "Tablas dinámicas, funciones avanzadas y automatización empresarial",
    horas: 60,
    categoria: "excel",
    icon: "📋",
    tag: "Excel",
    colorClass: "card--purple",
    link: "https://forms.cloud.microsoft/r/txZx4Ld8Ur?origin=lprLink",
  },
  {
    id: 5,
    titulo: "Visualización de Datos con Power BI",
    subtitulo: "Crea dashboards interactivos y aprende analítica de datos",
    horas: 48,
    categoria: "datos",
    icon: "📈",
    tag: "Datos",
    colorClass: "card--coral",
    link: "https://forms.cloud.microsoft/r/qubSrjz0Pr?origin=lprLink",
  },
  {
    id: 6,
    titulo: "Diseño de Sitios Web",
    subtitulo: "Aprende HTML, CSS y JavaScript para crear páginas web modernas",
    horas: 80,
    categoria: "web",
    icon: "🌐",
    tag: "Web",
    colorClass: "card--teal",
    link: "https://forms.cloud.microsoft/r/0bPCTTfaL0?origin=lprLink",
  },
]

const filtros = [
  { label: "Todos", value: "todos" },
  { label: "Excel", value: "excel" },
  { label: "Datos", value: "datos" },
  { label: "Web", value: "web" },
  { label: "Básico", value: "basico" },
]

const totalHoras = cursos.reduce((sum, c) => sum + c.horas, 0)

function Sena() {
  const [filtroActivo, setFiltroActivo] = useState("todos")
  const navigate = useNavigate()

  const cursosFiltrados =
    filtroActivo === "todos"
      ? cursos
      : cursos.filter((c) => c.categoria === filtroActivo)

  return (
    <main className="sena-page">

      <div className="sena-hero">
        <button className="sena-back" onClick={() => navigate("/")}>
          ← Volver
        </button>

        <span className="sena-badge">Instructor SENA</span>

        <h1 className="sena-title">Oferta académica</h1>

        <p className="sena-subtitle">
          Formación gratuita avalada por el SENA. Aprende herramientas digitales
          con enfoque práctico y obtén tu certificado nacional.
        </p>

        <div className="sena-stats">
          <div className="sena-stat">
            <span className="sena-stat__num">6</span>
            <span className="sena-stat__label">Cursos activos</span>
          </div>
          <div className="sena-stat">
            <span className="sena-stat__num">{totalHoras}h</span>
            <span className="sena-stat__label">Total de formación</span>
          </div>
          <div className="sena-stat">
            <span className="sena-stat__num">100%</span>
            <span className="sena-stat__label">Gratuitos</span>
          </div>
        </div>
      </div>

      <div className="sena-filters">
        {filtros.map((f) => (
          <button
            key={f.value}
            className={`sena-chip${filtroActivo === f.value ? " sena-chip--active" : ""}`}
            onClick={() => setFiltroActivo(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="sena-grid">
        {cursosFiltrados.map((curso) => (
          <div key={curso.id} className={`sena-card ${curso.colorClass}`}>
            <div className="sena-card__top">
              <div className="sena-card__icon">{curso.icon}</div>
              <span className="sena-card__tag">{curso.tag}</span>
            </div>
            <h3 className="sena-card__title">{curso.titulo}</h3>
            <p className="sena-card__desc">{curso.subtitulo}</p>
            <div className="sena-card__footer">
              <span className="sena-card__hours">🕐 {curso.horas}h</span>
              {curso.link ? (
                <a
                  className="sena-card__cta"
                  href={curso.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más →
                </a>
              ) : (
                <button className="sena-card__cta">Ver más →</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="sena-divider" />

      <div className="sena-cta">
        <div>
          <h3 className="sena-cta__title">Formación complementaria en TIC</h3>
          <p className="sena-cta__desc">
            Cursos gratuitos avalados por el SENA. Escríbeme directamente y te oriento sobre cuál tomar.
          </p>
        </div>
        <a
          className="sena-cta__btn sena-cta__btn--whatsapp"
          href="https://wa.me/573118435301"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sena-cta__btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
          Contactar al instructor
        </a>
      </div>

    </main>
  )
}

export default Sena
