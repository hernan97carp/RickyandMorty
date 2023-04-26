import { useState } from "react"
import validation from "./validation";
import "./stylesheet/form.css"
const Form =({login})=>{

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

  const [errors, SetErrors] = useState({
    username: "",
    password: ""
  });
  const handleInputChange = (event) =>{
     setUserData({
      ...userData,
      [event.target.name]:event.target.value
     })
     SetErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        })
     )
  }


    const handleSubmit= evento =>{
        evento.preventDefault();
        login(userData)
    }

return(
 <div className="form">
    <form action="" onSubmit={handleSubmit} className="form-react">
 <div className="form-control">
   <label htmlFor="username" className="label">Username:</label>
   <input type="text" name="username"  value={userData.username} onChange={(evento)=>handleInputChange(evento)} />
  {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
</div>
<div className="form-control">
  <label htmlFor="password">Password:</label>
  <input type="password" name="password"  value={userData.password} onChange={(evento)=>handleInputChange(evento)} />
  {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

</div>
  {Object.keys(errors).length === 0 ? <button type="submit">LOG IN</button> :null}
  {Object.keys(errors).length !== 0 ? <span style={{color: "black"}}>Valida tus datos</span> :null}
</form>


 </div>



)



}
export default Form;