import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import StudictionCaseStudy from './pages/StudictionCaseStudy';

function App() {
  const location = useLocation();

  return (
    /* key = URL: whenever the page changes, React rebuilds this wrapper
       and the landing fade plays again. */
    <div key={location.pathname} className="page-enter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/studiction" element={<StudictionCaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;