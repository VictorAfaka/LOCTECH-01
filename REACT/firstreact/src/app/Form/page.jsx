"use client"

 import { useState } from "react";

export default function Form() {

   const [errMsg, setErrMsg]=useState('')

   function submitHandler(e){
    // stop default form submission
    e.preventDefalt();
    console.log(e);
    let fName=e.target[0].value;
    let LName=e.target[1].value;
    let age=e.target[2].value;
    let phone=e.target[3].value;
    console.log(fName.LName,age,phone)
    if(fName){
        serErrMsg('Fill in firstname');
    }
    else if(LName){
        serErrMsg('Fill in lastname');
    }
    else if(phone){
        serErrMsg('Fill in phone');
    }
    else if(age){
        serErrMsg('Fill in age');
    }

    // send form data to the api
    const res=axios.post('/api/register/', {
        body:(fName, LName, phone, age )
    })

    console.log(res)
    if(res.status==200){
        Router.push('/contact');
    }
    else{
        setErrMsg("status code is 201")
    }

   }

    return(

        <form action="" onsubmit={submitHander}>
            {
                errMsg && < p className="err">{}errMsg</p>
            }

            <div className="input-group">
                <label htmlfor="" className="form-labe">Firstname</label>
                <input type="text" className="form-control" /*onchange={(e)=setfirstName(e.target.vaue)}*//>
                {/* {console.log(firstName)} */}
            </div>

            <div className="input-group">
                <label htmlfor="" className="form-labe">Firstname</label>
                <input type="text" className="form-control" />
            </div>

            <div className="input-group">
                <label htmlfor="" className="form-labe">Firstname</label>
                <input type="text" className="form-control" />
            </div>

            <div className="input-group">
                <label htmlfor="" className="form-labe">Firstname</label>
                <input type="text" className="form-control" />
            </div>

            <button ClassName="button">submit</button>
        </form>
    )
}