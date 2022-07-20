import { useState,useEffect } from "react";
import React from 'react'

export default function usestate() {
    const [count,setcount]=useState(0);
    const [msg,setmsg]=useState('initial message')
    useEffect(()=>{
        console.log('component mounted / updated');
        console.log(msg);
        console.log('count is increased to',count);
    },[count])
    useEffect(()=>(
        console.log('componentdidmount')
    ))
    useEffect(()=>(
        console.log('componentdidmount')
    ),[])
    useEffect(()=>(
        console.log('componentdidupdate')
    ),[count])
  return (
    <div>
        <p>{count}</p>
        <button onChange={()=>setcount(count+1)}>increace</button>
        <button onChange={()=>setcount(count-1)}>decrese</button>
        <button onChange={()=>setcount("")}>reset</button>
        <button onClick={()=>{setmsg('msg updated on click event')}}>updated message</button>
    </div>
  )
}
