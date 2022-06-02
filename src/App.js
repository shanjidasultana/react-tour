import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Search from './Components/Search/Search';
import { createContext, useState } from 'react';
import { useLocation } from 'react-router';
import Login from './Components/Auth/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/search/:id">
            <Search></Search>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
