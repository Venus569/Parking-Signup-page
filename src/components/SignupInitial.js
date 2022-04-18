import React from 'react'
import './Styles/signup.css' 

export const SignupInitial = ({showing,setShowing,email,password,setEmail,setPassword}) => {
  return (
    <>
   {(showing==1)&&( 
    <div className="container">
      <form onSubmit={(e)=>{
          e.preventDefault();

          setEmail(email)
          setPassword(password);
          setShowing(showing+1)


      }}>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value={email} required={true} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label for="password">password</label>
          <input type="password" id="password" name="password" value={password} required={true} onChange={e => setPassword(e.target.value)}/>
        </div>

        <div><a href="./forget-password">Forget password</a></div>

        <button type="submit">Next</button>
      </form>
     
      
    </div>
   )}
    </>
  )
}
