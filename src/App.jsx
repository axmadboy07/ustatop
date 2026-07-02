
import React from 'react'
import Home from './Componet/pages/Home/Home'
import Section1 from './Componet/pages/Section1/Section1'
import Dashboard from './Componet/Dashboard/pages/Dashboard'
import Chat from './Componet/Chat/pages/Chat'
import Settings from './Componet/Settings/pages/Settings'

const App = () => {
  return (
    <div>
       <Home />    
      <Section1 />   
      <Dashboard />
      <Chat />
      <Settings />
    </div>
  )
}

export default App



// import Router from "./Router";

// function App() {
//   return <Router />;
// }

// export default App;
