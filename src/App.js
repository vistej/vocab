import { Navigate, Route, Routes } from 'react-router-dom';
import AllWords from './components/AllWords';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllWords />} >
          <Route path=":group" element={<AllWords />} >
            <Route path=":word" element={<AllWords />} />
            </Route>
        </Route>
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
