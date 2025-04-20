import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { lazy, Suspense } from 'react';
import RTLWrapper from './components/layout/RTLWrapper';
import MainLayout from './components/layout/MainLayout';
import './i18n'; // Initialize i18next

// Create a client for React Query
const queryClient = new QueryClient();

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const News = lazy(() => import('./pages/News'));
const Events = lazy(() => import('./pages/Events'));
const Media = lazy(() => import('./pages/Media'));
const About = lazy(() => import('./pages/About'));

// Loading component for lazy-loaded pages
const PageLoading = () => (
  <div style={{ 
    padding: '2rem', 
    textAlign: 'center',
    direction: 'rtl'
  }}>
    جاري التحميل...
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RTLWrapper>
          <MainLayout>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news/*" element={<News />} />
                <Route path="/events/*" element={<Events />} />
                <Route path="/media/*" element={<Media />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={
                  <div style={{ 
                    padding: '2rem', 
                    textAlign: 'center',
                    direction: 'rtl'
                  }}>
                    الصفحة غير موجودة
                  </div>
                } />
              </Routes>
            </Suspense>
          </MainLayout>
        </RTLWrapper>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
