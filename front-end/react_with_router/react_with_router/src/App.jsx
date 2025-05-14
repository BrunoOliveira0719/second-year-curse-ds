import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/relatorios">Relatórios</Link></li>
            <li><Link to="/configuracoes">Configurações</Link></li>
            <li><Link to="/suporte">Suporte</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/suporte" element={<Suporte />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
