import React, { useState } from 'react'
import Structure from './components/structure/Structure'
import Homepage from './components/homepage/Homepage'
import NameForm from './components/nameForm/NameForm'

const App = () => {

  const [username,setusername] = useState("")

  return (
    <div>
      <Structure />
      {/* <Homepage /> */}
      {username === ""?<NameForm username={username} setusername={setusername} />:<Homepage/>}
      {/* <NameForm /> */}
    </div>
  )
}

export default App
