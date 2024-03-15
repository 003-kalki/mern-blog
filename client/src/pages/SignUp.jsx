import { Label, TextInput,Button } from 'flowbite-react';


import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
   <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
    {/* left*/}
    <div className="flex-1">
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

            ARTICLES ON TECHNOLOGY, HACKING AND PHILOSOPHY
           
             
           </p>
            </div>
{/*right */}
        <div className='flex-1'>
        <form className=''>
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
                   placeholder= 'name@company.com'
                   id ='email'/>
                  
               </div> 
               <div>
               <Label value ='Your Password'/>
                <TextInput
                   type ='text'
                   placeholder= 'Password'
                   id ='Password'/>
                  
               </div> 
               <Button  className='mt-4 px-9 bg-gradient-to-r   from-orange-500 to            
                  to-orange-300 ' type='submit '>
                Sign Up 
               </Button>
         </form>
         <div className="flex gap-2 text-sm mt-5">
          Have an account ?
          <Link to='/sign-in' className='text-orange-500'>
            Sign In
          </Link>
         </div>
</div>
   </div>
    </div>
  )
}

