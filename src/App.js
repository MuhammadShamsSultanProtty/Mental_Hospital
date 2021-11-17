
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import DoctorsList from './components/DoctorsList';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Meeting from './components/Meeting';
import NotFound from './components/NotFound';
import ServiceDetails from './components/ServiceDetails';
import SignUp from './components/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './private/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
         <Switch>
         <Route path="/" exact>
             <Home></Home>
           </Route>
           <Route path="/home" exact>
             <Home></Home>
           </Route>
           <Route path="/login" exact>
              <SignUp></SignUp>
           </Route>
           <PrivateRoute path="/schedule" exact>
              <Meeting></Meeting>
           </PrivateRoute>
           <PrivateRoute path="/doctorslist" exact>
              <DoctorsList></DoctorsList>
           </PrivateRoute>
           <PrivateRoute path="/service/:id" exact>
              <ServiceDetails></ServiceDetails>
           </PrivateRoute>
           <Route path="*" exact>
              <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
