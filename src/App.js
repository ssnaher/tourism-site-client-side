import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/LoginPage/Firebase/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import Packages from './Pages/Home/Packages/Packages';
import Booking from './Pages/Home/Booking/Booking';
import AuthProvider from './Contexts/AuthProvider';
import Register from './Pages/LoginPage/Firebase/Register/Register';
import PrivateRoute from './Pages/LoginPage/Firebase/Login/PrivateRoute/PrivateRoute';
import About from './Pages/Home/About/About';
;

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <PrivateRoute path="/booking/:packageId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
