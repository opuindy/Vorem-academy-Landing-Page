import LayOut from './Components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
