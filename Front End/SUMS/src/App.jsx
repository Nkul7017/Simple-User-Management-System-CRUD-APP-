import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewList from './Components/ViewList'
import CreateAndUpdate from './Components/CreateAndUpdate'
import ViewUser from './Components/ViewUser'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<ViewList/>}/>
      <Route path="/CreateAndUpdate/:_id" element={<CreateAndUpdate/>}/>
      <Route path="/ViewUser/:_id" element={<ViewUser/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
