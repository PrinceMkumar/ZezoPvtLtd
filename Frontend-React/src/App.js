//import logo from './logo.svg';
import './App.css';
import RegistrationFormUsers from './RegistrationFormUsers';
import RegistrationFormTransporters from './RegistrationFormTransporters';
import UserLogin from './UserLogin';
import TransporterLogin from './TransporterLogin';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route  , Switch  } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import Truck from './Truck';
import Menu from './Menu';
import Sample from './Sample';
import RegistrationFormAdmin from './RegistrationFormAdmin';
import AdminLogin from './AdminLogin';
import Admin_Users from './Admin_Users';
import Admin_Transporters from './Admin_Transporters';
import TransporterProfile from './TransporterProfile';
import UserProfile from './UserProfile';
import AuthServiceUsers from './service/AuthServiceUsers';
import UserService from './service/UserService';
import AdminService from './service/AdminService';
import AuthServiceAdmin from './service/AuthServiceAdmin';
import Transport_Trip_Start from './Transport_Trip_Start';
import Transport_Trip_Active from './Transport_Trip_Active';
import Transport_Trip_Pending from './Transport_Trip_Pending';
import Transport_Trip_History from './Transport_Trip_History';
import User_Order_Pending from './User_Order_Pending';
import User_Order_Active from './User_Order_Active';
import User_Order_History from './User_Order_History';
import Admin_Active from './Admin_Active';
import Admin_Requests from './Admin_Requests';
import Admin_Completed from './Admin_Completed';
import TransporterProfile_Edit from './TransporterProfile_Edit';
import UserProfile_Edit from './UserProfile_Edit';

function App() {
 return (
 <div className="container-fluid"> 
 {/* <Menu /> */}
 {/* <HomePage/> */}
{/* <RegistrationFormUsers/> */}
{/* <RegistrationFormTransporters/> */}
{/* <UserLogin/> */}
{/* <TransporterLogin/> */}
{/* <Sample /> */}
{/* <RegistrationFormAdmin/> */}
{/* <Admin_Transporters/> */}
{/* <Admin_Users/> */}
{/* <AdminLogin/> */}
<Router>
<Switch>
<Route exact path="/" component={HomePage}></Route>
<Route exact path="/about" component={About}></Route>
<Route exact path="/contact" component={Contact}></Route>
<Route exact path="/truck" component={FAQ}></Route>
<Route exact path="/RegistrationFormUsers" component={RegistrationFormUsers}></Route>
<Route exact path="/RegistrationFormTransporters" component={RegistrationFormTransporters}></Route>
<Route exact path="/RegistrationFormAdmin" component={RegistrationFormAdmin}></Route>
<Route exact path="/FAQ" component={Truck}></Route>
<Route exact path="/TransporterLogin" component={TransporterLogin}></Route>
<Route exact path="/UserLogin" component={UserLogin}></Route>
<Route exact path="/AdminLogin" component={AdminLogin}></Route>
<Route exact path="/Admin_Users" component={Admin_Users}></Route>
<Route exact path="/Admin_Transporters" component={Admin_Transporters}></Route>
<Route exact path="/TransporterProfile" component={TransporterProfile}></Route>
<Route exact path="/UserProfile" component={UserProfile}></Route>
<Route exact path="/Transport_Trip_Start" component={Transport_Trip_Start}></Route>
<Route exact path="/Transport_Trip_Active" component={Transport_Trip_Active}></Route>
<Route exact path="/Transport_Trip_Pending" component={Transport_Trip_Pending}></Route>
<Route exact path="/Transport_Trip_History" component={Transport_Trip_History}></Route>
<Route exact path="/User_Order_Pending" component={User_Order_Pending}></Route>
<Route exact path="/User_Order_Active" component={User_Order_Active}></Route>
<Route exact path="/User_Order_History" component={User_Order_History}></Route>
<Route exact path="/Admin_Active" component={Admin_Active}></Route>
<Route exact path="/Admin_Requests" component={Admin_Requests}></Route>
<Route exact path="/Admin_Completed" component={Admin_Completed}></Route>
<Route exact path="/TransporterProfile_Edit" component={TransporterProfile_Edit}></Route>
<Route exact path="/UserProfile_Edit" component={UserProfile_Edit}></Route>
</Switch>
</Router>
<Router>
<Switch>
{/* <Route exact path="/AdminLogin" component={AdminLogin}></Route> */}
{/* <Route exact path="/AdminLogin/Admin_Users" component={Admin_Users}></Route> */}
</Switch>
</Router>

</div>
  );
}

export default App;
