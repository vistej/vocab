import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import WordListPage from './Pages/WordListPage';
import { toast, Toaster } from 'sonner';
import { useNetworkStatus } from './utils/network';
import { useEffect, useRef } from 'react';
import { useTheme } from './context/ThemeContext';

function App() {
  const isOnline = useNetworkStatus();
  const { theme } = useTheme();
  const prevOnlineStatus = useRef(isOnline);

  useEffect(() => {
    // Only show toast on status change, not on initial load
    if (prevOnlineStatus.current !== undefined) {
      toast.dismiss();
      if (isOnline && !prevOnlineStatus.current) {
        toast.success('You are back online!');
      } else if (!isOnline) {
        toast.warning('You are offline');
      }
    }
    prevOnlineStatus.current = isOnline;
  }, [isOnline]);
  return (
    <div className='bg-brand-screen text-brand-text'>
      <Toaster richColors theme={theme} position='bottom-center' closeButton />
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:pgi' element={<WordListPage />} />
        <Route path='/:pgi/:pwi' element={<WordListPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
