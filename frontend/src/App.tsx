import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/presentation/pages/Home';
import { DetailPage } from '@/presentation/pages/Detail';
import { NotFoundPage } from '@/presentation/pages/NotFound';
import { AppProvider } from './presentation/hooks/useContextAsteroid';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
