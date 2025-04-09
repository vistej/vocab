import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { toast, Toaster } from 'sonner';
import { useNetworkStatus } from './utils/network';
import { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';

function App() {
  const isOnline = useNetworkStatus();
  const { theme } = useTheme();

  useEffect(() => {
    toast.dismiss();
    if (isOnline) {
      toast.success('You are back online!');
    } else {
      toast.warning('You are offline');
    }
  }, [isOnline]);
  return (
    <div className='min-h-screen bg-brand-screen text-brand-text'>
      <Toaster richColors theme={theme} position='bottom-center' closeButton />
      {/* Routes */}
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
