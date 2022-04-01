import {createContext, userState, useEffect,useContext } from "react";
import { supabase } from " ../utils/supabase";
import { useRouter } from "next/router";


const Context = createContext();


// WHen the user refreshes the application
// They will get the current loggedIn User
// with supabase.auth.user()
//
const Provider = ({ children }) => {
    const [usre, setUser] = useState(supabase.auth.user())

    // This function will update the user once the user logs in (again)
    useEffect() => {
        supabase.auth.onAuthStateChange(()=> {
            setuser(supabase.auth.user(  ))
        });
    }, []);

 const login = async () => {
    await supabase.auth.signIn({
      provider: "github",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

    // Lets choose what to expose to the user
    const exposed = {
       user,
    }



    return (
        <Context.Provider>
        {children}
         </Context.Provider>
    )
};

// export the useContext provider

export const useUser = () => useContext(Context);

export default Provider;
