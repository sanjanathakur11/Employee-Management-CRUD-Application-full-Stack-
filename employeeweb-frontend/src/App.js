import './App.css';
import {Route , Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/nomatch/NoMatch';
import Header from './pages/header/Header';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/employee' element={<PostUser/>} />
        <Route path='/employee/:id' element={<UpdateUser/>} />
        {/* Add more routes as needed */}
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default App;