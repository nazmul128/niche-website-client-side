import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ExploresProducts from './Pages/ExploresProducts/ExploresProducts/ExploresProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PurchaseDetails from './Pages/Home/PurchaseDetails/PurchaseDetails';
import NotFound from './Pages/Home/NotFound/NotFound';

function App() {
  return (
    <div className="App">
  <AuthProvider>
  <Router>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/exploreproducts">
            <ExploresProducts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/purchases/:id">
            <PurchaseDetails />
          </PrivateRoute>
          <Route path='*'>
              <NotFound></NotFound>
            </Route>
        </Switch>
     </Router>
  </AuthProvider>
    
    </div>
  );
}

export default App;
