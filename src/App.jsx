import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/Auth/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
