import React, { useState } from 'react'

const App = () => {
    const [show,setShow] = useState(false);
    const SimpleformFields=[
        {
            name:"name",
            type:"text",
            placeholder:"Enter your name",
        },
        {
            name:"description",
            type:"text",
            placeholder:"Enter your description",
        },
        {
            name:"price",
            type:"number",
            placeholder:"Enter your price",
        },
        {
            name:"category",
            type:"text",
            placeholder:"Enter your category",
        },
        {
            name:"email",
            type:"email",
            placeholder:"Enter your email",
        },
        {
            name:"image",
            type:"file",
            placeholder:"Enter your image",
        },
    ]

  return (
   <>
    {
        show && (
            <form className='flex flex-col gap-y-5 mx-auto p-3 w-96 cursor-pointer border-1'>
    <h1 className='text-2xl font-bold text-gray-400'>Simple Form</h1>

    <div className='flex flex-col w-96 '>
      <label htmlFor="Name">Name:</label> 
      <input type="text" name='name' id='name' placeholder='Enter the title '
      className='border-1 w-67 h-10' />
    </div>

    <div className='flex flex-col w-96 '>
      <label htmlFor="Description">Description:</label>
      <textarea type="text" name='description' id='description' placeholder='Enter the description '
       className='border-1  w-67 h-10' />
    </div>

    <div className='flex flex-col w-96 '>
      <label htmlFor="Price">Price:</label>
      <input type="number" name='price' id='price' placeholder='Enter the price'
       className='border-1 w-67 h-10' />
    </div>

    <div className='flex flex-col w-96 '>
      <label htmlFor="Category">Category:</label>
      <input type="text" name='category' id='category' placeholder='Enter the category'
       className='border-1 rounded-b-md col-2 w-67 h-10' />
    </div>

    <div className='flex flex-col w-96 '>
      <label htmlFor="Email">Email:</label>
      <input type="email" name='email' id='email' placeholder='Enter the email' 
      className='border-1 w-67 h-10'/>
    </div>

    <div className='flex flex-col w-96 '>
      <label htmlFor="Image URL">Image URL:</label>
      <input type="file" name='name' id='name' placeholder='Enter the image' 
      className='border-1 w-67 h-10' />
    </div>
   
   </form>
        )
    }
     
        <button className='rounded-2xl bg-gray-600 text-white p-2' onClick={()=>setShow(!show)}>Add Product</button>
    
   </>
  )
}

export default App
