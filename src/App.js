import './App.css';
import { SignupInitial } from './components/SignupInitial';
import { ParkingDetails } from './components/ParkingDetails';

import MapContainer from './components/MapContainer';
import {useState} from 'react'
import 'animate.css';
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { ImageLoader } from './components/ImageLoader';
import { GSTImageLoader } from './components/GSTImageUploader';
import { ParkDesc } from './components/ParkDesc';
import Map from './components/Map';
import { CollectedData } from './components/CollectedData';
//import './stylesheet.'
//import imagee from './dadueco.jpg'


function App() {

  //const [signupstatus,setSignupstatus]=useState(false);
  const [showing,setShowing]=useState(1);
  const [imageClasses, setImageClasses] = useState(`d-none`);
  

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const [operator,setOperator]=useState('');
  const [parking,setParking]=useState('');
  const [address,setAddress]=useState('');
  const [gstno,setGstno]=useState('');
  const [gstpic,setGstpic]=useState([]);
  const [files, setFiles] = useState([]);
  const [parkdesc, setParkdesc] = useState('');


 
  
  

  




  function hideImage(node) {
    setImageClasses(`d-none`);
    //node.style.display = "none";

  }

  function showImage(node) {
    setImageClasses(`d-block`);
    node.style.opacity = 0;
    //node.style.display = "block";

  }

  function removeOpacity (node) {
    node.style.opacity = 1;
  }


  

  return (
    <>
    <div className='background'>
      <div className='brand-logo'><h2>Brand</h2></div>
      <div className='section-logo'><p>Sign Up</p></div>
   <CSSTransition in={showing==1} timeout={500} classNames={{
           enterActive: 'animate__bounceIn',
           exitActive: 'animate__bounceOut'
        }} 
        onEnter={showImage}
        onEntered={removeOpacity}
        onExited={hideImage}
        className={`testclass ${imageClasses}`}>
         
          <SignupInitial showing={showing} setShowing={setShowing} email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>
        </CSSTransition>
    
   
        <CSSTransition in={showing==2} timeout={500} classNames={{
           enterActive: 'animate__bounceIn',
           exitActive: 'animate__bounceOut'
        }} 
        onEnter={showImage}
        onEntered={removeOpacity}
        onExited={hideImage}
        className={`testclass ${imageClasses}`}>
          
          <ParkingDetails showing={showing} setShowing={setShowing} operator={operator} parking={parking} address={address} setOperator={setOperator} setParking={setParking} setAddress={setAddress}/>
        
        </CSSTransition>

        


        <CSSTransition in={showing==3} timeout={500} classNames={{
           enterActive: 'animate__bounceIn',
           exitActive: 'animate__bounceOut'
        }} 
        onEnter={showImage}
        onEntered={removeOpacity}
        onExited={hideImage}
        className={`testclass ${imageClasses}`}>
          
          <ImageLoader showing={showing} setShowing={setShowing} files={files} setFiles={setFiles}/>
        </CSSTransition>
      



        
        <CSSTransition in={showing==4} timeout={500} classNames={{
          enterActive: 'animate__bounceIn',
          exitActive: 'animate__bounceOut'
        }} 
        onEnter={showImage}
        onEntered={removeOpacity}
        onExited={hideImage}
        className={`testclass ${imageClasses}`}>
          
          <GSTImageLoader showing={showing} setShowing={setShowing} gstno={gstno} gstpic={gstpic} setGstno={setGstno} setGstpic={setGstpic}/>
        </CSSTransition>
   





        
       
        
          <CSSTransition in={showing==5} timeout={500} classNames={{
           enterActive: 'animate__bounceIn',
           exitActive: 'animate__bounceOut'
        }} 
        onEnter={showImage}
        onEntered={removeOpacity}
        onExited={hideImage}
        className={`testclass ${imageClasses}`}>
          
          <MapContainer showing={showing} setShowing={setShowing} address={address} />
        </CSSTransition>
      

        <CSSTransition in={showing==6} timeout={500} classNames={{
           enterActive: 'animate__bounceIn',
           exitActive: 'animate__bounceOut'
        }} 
        onEnter={showImage}
        onEntered={removeOpacity}
        onExited={hideImage}
        className={`testclass ${imageClasses}`}>
          
          <ParkDesc showing={showing} setShowing={setShowing} parkdesc={parkdesc} setParkdesc={setParkdesc}/>
        </CSSTransition>


  
          {(showing==7)&&(
          <CollectedData email={email} password={password} operator={operator} parking={parking} address={address} gstno={gstno} parkdesc={parkdesc}/>
        )}


        </div>
    </>
  );
}

export default App;
