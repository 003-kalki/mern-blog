import { Label, TextInput } from 'flowbite-react';


import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
   <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
    {/* left*/}
    <div className="">
    <Link   to ="/" className='self-center whitespace-nowrap  font-semibold dark:text-white text-4xl'>
                <span  className='px-2 py-2 bg-gradient-to-r
                 from-orange-500             
                  to-orange-300
                  rounded-lg
                  text-white' 
                  
                >Shyam 
                </span>
                Say's
            </Link>
           <p className='text-sm mt-5 font-semibold'>

            ARTICLES ON   COMPUTER SCIENCE , HACKING AND PHILOSOPHY
           
             
           </p>
            </div>
{/*right */}
        <div className=''>
        <form>
         <div >
         <Label value ='Your Username'/>
                <TextInput
                   type ='text'
                   placeholder= 'username'
                   id ='username'/>
                  
               </div> 
               <div>
               <Label value ='Your Email'/>
                <TextInput
                   type ='text'
                   placeholder= 'Email'
                   id ='email'/>
                  
               </div> 
               <div>
               <Label value ='Your Password'/>
                <TextInput
                   type ='text'
                   placeholder= 'Password'
                   id ='Password'/>
                  
               </div> 
         </form>
</div>
   </div>
    </div>
  )
}

