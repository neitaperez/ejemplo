import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import Learning from "./components/Learning"
import Value from "./components/Value"
import Goal from "./components/Goal"
import Sena from "./pages/Sena"  // la crearás después

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={
          <>
            <Header />
            <Profile />
            <Skills />
            <Learning />
            <Value />
            <Goal />
          </>
        } />

        <Route path="/sena" element={<Sena />} />

      </Routes>
    </HashRouter>
  )
}

export default App