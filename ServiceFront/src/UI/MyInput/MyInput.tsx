import React from "react";


const MyInput = React.forwardRef( (props,ref)=> {
 
    return(
        <div>
           <input  ref={ref} {...props}  type="text" placeholder = {props.title}/>
          
        </div>
    )


});


export default MyInput