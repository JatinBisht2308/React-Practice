import React,{useState} from 'react'

export default function ToggleSwitch() {
    const [toggle,setToggle] = useState(false);
  return (
    <div>
      <input type="checkbox" 
      onChange={() => setToggle(!toggle)}
      />
      {toggle?"On":"Off"}
    </div>
  )
}
