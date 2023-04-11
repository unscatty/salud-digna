import { Suspense } from 'react'
import NProgress from 'nprogress'
import { useRoutes } from 'react-router-dom'

// Get all generated routes
import routes from '~react-pages'

// Progress bar
const Progress = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <></>;
};

function App() {
  return (
    <Suspense fallback={<Progress />}>
      {useRoutes(routes)}
    </Suspense>
  )
}

export default App
