import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();  // step 1 creation of context isko export bhi krna padega

export default function AppContextProvider({children}){       // step 2 provision of context iske ander childeren as a prop pass karenege becz main.jsx ke ander stricmode hata ke AppContext ke ander App rkh diya aur usko as a prop pass kr diya mtlb children yha pe ho gya hai app.jsx i.e  // yha pe children mtlb jo AppContextProvider ke ander listed hai jo ki hai 
                                    
    const [loading , setloading] =useState(false);
    const [posts,setposts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpage , settotalpage] = useState(null);
    
    // data filling 

    async function fetchdata(page=1) {

        setloading(true);

         let url = `${baseUrl}?page=${page}`

         try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setpage(data.page);
            setposts(data.posts);
            settotalpage(data.totalPages);
        }
        catch(error){
            console.log('Error in fetching data')
            setpage(1);
            setposts([]);
            settotalpage(null);
        }

        setloading(false);
        
    }

    function handlepagechange(page){
        setpage(page);
        fetchdata(page);      //so ek centarlized data create kr liya using context provider aur is data ko kisis bhi component me use kr lenge uisng a hook called as useContext() without any prop drill or state lifting

    }

    const value = {   // value ek object hai jisme required data hai  aur value ki jgh kuch bhi naam dal sakte hai .

        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalpage,
        settotalpage,
        fetchdata,
        handlepagechange
    };

    


    return <AppContext.Provider value={value}>

            {children}    {/* i.e ye children i.e app ko ye value de di jo ki AppcontextProvider ke ander hai hence AppContextProvider ke ander ke children ko ye wali value de di  */}
    </AppContext.Provider>


}