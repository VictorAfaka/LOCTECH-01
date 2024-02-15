"use client"

 import { useState } from "firstreact";

export default function Login() {

   

   const [errEmail, setErrEmail]=useState('')
   const [errpass, setErrpass]=useState('')


// create a function to handle my form submision
   function submitHandler(e){


    // stop the form default ,that refreshes the page
    e.preventDefalt();
    // save form input values in a variable
    // n:h the arrangement of the form input is imporant
    console.log(e);
    let email=e.target[0].value;
    let password=e.target[1].value;
    
     // validate the form
    /*we want to validate the form so if the user submits the for without
    filling the in the fields
    we will have an err mssg */
    
    console.log(Email, PWord)
    if(!email){
        serErrEmail('Fill in Email');
    }
    if(!password){
        serErrpass('Fill in Password');
    }
    
// if the user input is not empty
    // send form data to the api
    // we are using axios

    const res=axios.post('/api/Login/', {
        body:(email, password)
    })

    console.log(res)
    if(res.status==200){
        Router.push('/login');
    }
    else{
        setErrMsg("status code is 201")
    }

   }

    return(

        <form action="" onsubmit={submitHandler}>
            

            <div className="input-group">
                <label htmlfor="" className="form-label">Email</label>
                <input type="emai" className="form-control" /*onchange={(e)=setfirstName(e.target.vaue)}*//>
                {/* {console.log(firstName)} */}

                {
                //display error message
                //when err performing conditional rendering ,if error message is true, display error message
                erremail ? <span style={{color:'red'}}>{errEmail}</span> :''
                //if (errmsg){
                 //   errMsg
               // }

               // else{
                // setErrMsg('')
                // }
            }

            </div>
          
            <div className="input-group">
                <label htmlfor="" className="form-labe">Password</label>
                <input type="text" className="form-control" />
                {
                    errpass ? <span style={{color:'red'}}>{errpass}</span> :''
                }
            </div>

            <button ClassName="button">submit</button>
        </form>
    )
}