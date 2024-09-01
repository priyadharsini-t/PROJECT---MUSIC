// import logo from './logo.svg';
// import './App.css';
// import Mainpage from './components/mainpage'
// import Signin from './components/signin'
// import Signup from './components/signup'
// import Button from './components/button'

// function App() {
//   return (
//     <div>
//       <Mainpage/>
//     </div>
  
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import Signin from './components/signin';
//  import Mainpage from './components/mainpage'
import Signup from './components/signup';
import ViewUser from './users/ViewUser';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import Home from './page/Home';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path ="/" element={<Signin/>}/> 
        <Route exact path="/signup" element={<Signup/>}/>
        {/* <Route exact path="/mainpage" element={<Mainpage/>}/>  */}
        
        <Route exact path = "/get/:launch" element={<ViewUser/>}/> 
        <Route exact path="/updateteams/" element={<EditUser/>}/>
        <Route exact path="/fetchteams" element={<Home/>} />
        <Route exact path="/postteams" element= {<AddUser/>}/>
        </Routes> 
      </Router>
    </div>
     
  );


}

export default App;
