// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <main className="mx-3">
        <h1>Hello World!</h1>
        <Outlet />
      </main>
    </>
  );
}

export default App;
