import React from 'react';
import Part1 from '../components/login/Part1';
import Formulaire from '../components/login/Formulaire';
const Login = () => {
    return (
        <div className="bg-slate-50 h-screen w-full">
              <Part1/>  
              <Formulaire/>  
        </div>
    );
};

export default Login;