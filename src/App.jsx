import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { toast, Toaster } from 'sonner';
import { useNetworkStatus } from './utils/network';
import { useEffect } from 'react';

function App() {
  const isOnline = useNetworkStatus();

  useEffect(() => {
    toast.dismiss();
    if (isOnline) {
      toast.success('You are back online!');
    } else {
      toast.warning('You are offline');
    }
  }, [isOnline]);
  return (
    <div>
      <Toaster richColors position='bottom-center' />
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
