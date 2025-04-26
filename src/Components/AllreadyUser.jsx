import React from 'react'

const AllreadyUser = () => {
  return (
    <div className="flex items-center justify-center  h-screen bg-gray-100">
    <div className="text-left mb-2 w-4/5 lg:w-1/5 h-4/5  bg-white  shadow-xl  p-4 ">
       <p className="text-3xl mb-4">
           Account Settings
       </p>
      <div className='bg-gray-50 p-0'>
       <div className='flex'>
       <div className="relative w-24 h-24">
            <img 
              alt="profile photo" 
              src="https://react-project-chi-steel.vercel.app/static/media/profile.88d10524cbd3359fb0a5.png" 
              className="w-full h-full rounded-full object-cover" 
            />
          
            <img 
              alt="photo" 
              src="https://react-project-chi-steel.vercel.app/static/media/edit.374415c21bed9ec767dbb9b506985d9d.svg" 
              className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full p-1 border border-gray-300 " 
            />
        </div>
        <div className='ml-8'>
           <h1>Marry Doe</h1>
           <h1 className='text-gray-500'>Marry@gmail.com</h1>
        </div>
       </div>
       <p className='mt-6 pb-4 border-b-2 border-dashed border-b-stone-300'>
         Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam      
       </p>
    </div>
   </div>
  </div>
    )
}

export default AllreadyUser