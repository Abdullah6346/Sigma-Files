import React from 'react';
import { useEffect } from 'react'

const Navbar = ({ color, tag, type }) => {

  useEffect(() => {
  alert("I am in the navbar")
    return () => {
      alert("I was removed / unmounted")
    }
  }, [])


  return (
    <div>
      I am the navbar with {color} {tag} {type} 
    </div>
  );
};

export default Navbar;
