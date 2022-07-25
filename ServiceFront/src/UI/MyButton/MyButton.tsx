import MybuttonCss from "./Mybutton.module.css"

const MyButton = function ({children,...props}) {

  

    return(
        <div >
            <button className={ MybuttonCss.mybtn} type = "submit" style = {{cursor:"pointer"}} {...props} >
                 {children} 
             </button>
        </div>
    )


}


export default MyButton