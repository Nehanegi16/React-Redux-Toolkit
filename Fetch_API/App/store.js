import { configureStore} from "@reduxjs/toolkit";
import  gituser from  '../Features/UserSlice'

const store=configureStore({
    reducer:{
        app: gituser

    }
})

export default store