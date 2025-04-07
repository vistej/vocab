import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:pgi' element={<Home />} />
        <Route path='/:pgi/:pwi' element={<Home />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
