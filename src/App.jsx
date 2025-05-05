// import React from 'react'

// import Nav from './Nav'
// import Hero from './Hero'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import ProductList from './components/ProductList'
// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//       <Nav/>
//       <Hero/>
//       <Routes>
//         <Route path='/' element={<ProductList/>}/>
//       </Routes>
//       </BrowserRouter>
    
//       </>
   
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const[show,setshow] = useState(false);
//   return (
//     <div>
//       {
//         show &&(
//           <div className='box bg-purple-500 md-hidden w-fit text-white p-2 rounded-lg mt-10 ml-10 h-32 text-sm flex flex-col items-center justify-center gap-y-2'>
            
          
//           <h1>Product Name:Laptop</h1>
//           <h1>Title:Brand New Laptop</h1>
//           <p>Description:This is latest laptop.</p>
//           </div>
//         )

//       }
//       <button className='cursor-pointer bg-purple-500 text-white mt-10 ml-10 p-2 text-sm' onClick={()=>setshow(!show)}>
//         {
//           show ? "Hide Box":"Show Box"
//         }
//       </button>

//     </div>
//   )
// }

// export default App

import React from 'react'
import Simpleform from './Simpleform'
const App = () => {
  return (
    <div>
      <Simpleform/>
    </div>
  )
}

export default App