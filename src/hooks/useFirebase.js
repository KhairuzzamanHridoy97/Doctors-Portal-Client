import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged  ,signOut } from "firebase/auth";


//initialize firebase app
initializeFirebase();

const useFirebase = () => {
   const[user,setUser]=useState({});
   const [isLoading,setIsLoading]=useState(true);
   const [authError,setAuthError]=useState('')

   const auth = getAuth();

   const registerUser=(email,password) =>{
       setIsLoading(true);
       createUserWithEmailAndPassword(auth,email,password)
       .then((userCredential) => {
           setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message)
        // ..
      })
      .finally(()=>setIsLoading(false));
      ;
   };

   const loginUser=(email,password)=>{
       setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
        setAuthError(error.message)
    })
    .finally(()=>setIsLoading(false));
    ;
  
   }

   const logout=()=>{
       setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsLoading(false));

      ;
      
   };
   // observer user state
   useEffect(()=>{
    const unsubscirbed=  onAuthStateChanged(auth, (user) => {
        if (user) {   
          setUser(user);
          // ...
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
      return ()=> unsubscirbed;
   },[])

   return{
        user,
        registerUser,
        authError,
        loginUser,
        logout

   }
};

export default useFirebase;