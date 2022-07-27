import React from "react"
import MybuttonCss from "./Mybutton.module.css"


interface MyButtonInterface {
    children?: React.ReactChild| React.ReactNode;
    onClick: (e: any) => void

}



const MyButton = function ({children,...props}:MyButtonInterface) {



    return(
        <div >
            <button className={ MybuttonCss.mybtn} type = "submit" style = {{cursor:"pointer"}} {...props} >
                 {children}
             </button>
        </div>
    )


}


export default MyButton
