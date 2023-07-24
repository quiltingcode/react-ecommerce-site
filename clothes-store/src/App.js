import Home from "./routes/home/home.component"
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
    </Routes>
  );
};

export default App;