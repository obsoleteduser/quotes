import { Route, Routes } from 'react-router';
import './App.css';
import { BaseLayout } from './baseLayout';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Photos } from './pages/Photos';


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<BaseLayout/>}>
                <Route index path='/' element={<Home/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/photos' element={<Photos/>}/>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
