import React, { useState } from "react";

const Thirteen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers]= useState([]);
  const handleAuthentication=()=>{
   
    if(isRegistered){
      
        if(isRegistered){
            const user= users.find((u)=>u.email===email && u.password===password);
            if(user){
                setIsLoggedIn(true);
            }
            else{
                alert('Please check ur credentials');
            }
        }
    }
    else{
        const newUser= {email,password};
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        alert('you are registered');
        setIsLoggedIn(true);
        //setIsRegistered(true);
        //{console.log(isRegistered)}
        {console.log('isloggedin  '+isLoggedIn)}
    }
  };

  const handleLogout=()=>{
    setIsLoggedIn(false);
  }
  return (
    <div>
      {isLoggedIn ? (
        <div>
           <h2>Welcome, {email}</h2>
           <button onClick={handleLogout}>Logout</button>
         
        </div>
      ) : (
        <div>
          <p>{isRegistered ? "Login" : "Register"}</p>
          <form>
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleAuthentication}>{isRegistered ? "Login" : "Register"}</button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an account Register"
              : "Already have an account Log in!"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Thirteen;
