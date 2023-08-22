import React from 'react';
import user from "./../../assets/p1.png";

const Formulaire = () => {
    return (

     <div className='form'>
           <form action="" className='relative left-32'>
                   <img src={user} alt="" className='w-28 h-28 relative left-8 -top-4'/>
                   <h1 className="text-4xl  text-zinc-700 font-['Fallo One']">Se connecter</h1>
                    <input placeholder="Votre email" type="text" name="" id="" className='border-0 rounded-2xl bg-slate-200 relative top-10 -left-8  p-2 bg-red-100'/>
                    <input placeholder="Votre email" type="text" name="" id="" className='border-0 rounded-2xl bg-slate-200 relative top-16 -left-8  p-2 bg-red-100'/>
                    <button className="p-3 bg-emerald-500 rounded-2xl text-md text-slate-100 relative top-24 left-12 hover:bg-yellow-500 ">Se connecter</button>
                    <p className='relative top-32 left-8'>ou se connecter par : </p>
            </form> 
     </div>
    
    );
};

export default Formulaire;