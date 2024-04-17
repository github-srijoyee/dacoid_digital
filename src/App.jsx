import { useState } from 'react'
import './App.css'
import { AndroidLarge1 } from './AndroidLarge1'
import { AndroidLarge2 } from './AndroidLarge2'
import AndroidLarge4 from './AndroidLarge4'
import AndroidLarge5 from './AndroidLarge5'
import AndroidLarge6 from './AndroidLarge6'
import AndroidLarge9 from './AndroidLarge9'
import AndroidLarge8 from './AndroidLarge8'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='bg-cornflowerblue-200 rounded-lg px-1 py-2'>Please view in mobile or view using mobile dimensions as these are the mobile versions of the designs</h2>
    <h4>Android Large-1</h4>
     <AndroidLarge1/>
     <h4>Android Large-2</h4>
     <AndroidLarge2/>
     <h4>Android Large-4</h4>
     <AndroidLarge4/>
     <h4>Android Large-5</h4>
     <AndroidLarge5/>
     <h4>Android Large-6</h4>
     <AndroidLarge6/>
     <h4>Android Large-8</h4>
<AndroidLarge8/>
     <h4>Android Large-9</h4>
     <AndroidLarge9/>
    </>
  )
}

export default App
