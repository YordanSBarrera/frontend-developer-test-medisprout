import { Route, Routes } from 'react-router-dom';
import { Dasboard } from './pages/dasboard/dasboard';
import { CommentDetail } from './pages/detail/commentDetail';

function App() {
  return (
    <Routes>
     <Route exact path='/' element={<Dasboard/>}/>
     <Route exact path='/comment/:id' element={<CommentDetail/>}/>
    </Routes>
  );
}

export default App;
