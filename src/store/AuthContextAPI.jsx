import {createContext} from 'react'



// Creating context first Or we can say global storage
const AuthContext = createContext();


// then create a provider (funtion), by this we pass our data to consumer(children) 
const AuthProvider = ({children})=>{

      const storeTokenInLocalStorage = (servertoken)=>{
         return localStorage.setItem("token", servertoken);
      }

      return <AuthContext.Provider value={{storeTokenInLocalStorage}}>
        {children}
      </AuthContext.Provider>
}


// consumer or deliveryman
// const useAuth = 


export default {AuthContext, AuthProvider}