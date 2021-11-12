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
          <PrivateRoute path="/exploreproducts">
            <ExploresProducts />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/purchases/:id">
            <PurchaseDetails />
          </Route>
        </Switch>
     </Router>
  </AuthProvider>
    
    </div>
  );
}

export default App;
