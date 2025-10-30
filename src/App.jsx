 import Games from './Games.jsx';
 import SignPage from './SignPage.jsx';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import './App.css';
 
 function App() {
   return (
     <>
      {/* <SignPage />
       <Games /> */}

     <Router>
     <Routes>
      <Route path='/Game/play' element={<Games />} />
      <Route path='/Game' element={<SignPage />} />
     </Routes>
     </Router>
       
      </>
   )}
 export default App;