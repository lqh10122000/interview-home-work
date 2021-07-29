import { useDispatch } from 'react-redux';
import * as actions from './redux/actions'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeBlog from './pages/HomePage';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {

  const dispatch = useDispatch();
  dispatch(actions.getBlogs.getBlogsRequest());

  return (

    <Router>
      <div className="App">

        <Navbar/>
        <br/>
        <br/>
        <br/>

        <Route path="/blog" exact component={HomeBlog}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>

        
      </div>

    </Router>
  );
}

export default App;
