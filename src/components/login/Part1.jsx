import React from "react";
import Typewriter from "typewriter-effect";

import couverture from "./../../assets/wave.png";
import logo from "./../../assets/undraw_shopping_bags_o6w5.svg";

const Part1 = () => {
  return (
    <div>
      <img src={couverture} className="h-screen w-3/5" alt="" />
      <img src={logo} className="h-96 w-96 absolute top-64 left-52" alt="" />

      <div className="intro">
        <h1 className="typewriter text-stone-950">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
               
                .typeString("Bienvenue sur Shop-Dago ")
                .start();
            }}
          />
        </h1>

        <h2 className="text-xl text-zinc-700 absolute top-36 w-72 text-center left-52">Ceci est  un site web pour vous faliciter la vie</h2>

        <button className="p-3 bg-emerald-500 rounded-2xl text-md text-slate-100 relative top-56 left-72 hover:bg-yellow-500 ">S' inscrire à nous</button>
      </div>
    </div>
  );
};

export default Part1;
