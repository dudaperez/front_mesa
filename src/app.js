import { Helmet } from 'react-helmet';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { Suspense } from 'react';

import templateBlank from '@/templates/Blank'
import { routes } from './routes';

const templates = {
  blank: templateBlank,
}
function AppContent() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          const Template = templates[route.template];
          const Page = route.page;

          const title = route.title;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Template isPublic={route.isPublic} form={route.isForm === 'sim'}>
                  <Helmet title={`${title} - Mesa`} />
                  <Suspense fallback={<>loading</>}>
                    <Page />
                  </Suspense>
                </Template>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
