import NavBar from './Components/NavBar/Navbar'
import Home from './Screens/Home/Home';
import InfoPage from './Screens/Register/RegisterPage';
import Share from './Screens/Share /Share'
import SharedPage from './Screens/SharedPayments/SharedPayments';
import FrameworkBuild from './Screens/FrameworkBuild/Framework';
import NannyShare from './Screens/NannyShare/NannyShare';
import BecomeNanny from './Screens/BecomeNanny/BecomeNanny';

function App() {
  return (
    <div className="App">
    
    <NavBar />

        <Home />
        <Share />
        <InfoPage />
        <SharedPage />
        <FrameworkBuild />
        <NannyShare />
        <BecomeNanny />
    
     </div>

  );
}

export default App;
