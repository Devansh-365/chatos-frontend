import {BrowserRouter, Route} from 'react-router-dom'
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/REgister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
