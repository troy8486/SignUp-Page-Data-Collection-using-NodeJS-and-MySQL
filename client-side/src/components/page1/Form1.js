import React,{useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Form1 =()=> {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [subject,setSubject] = useState([]);
    const [checkedvalues,setCheckedvalues] = useState({
      subjects : {
        Maths : false,
        Physics : false,
        Chemistry : false,
        Biology : false,
        English : false
      }
    })

const checkboxHandler = (e) => {
  const {name , checked} = e.target;
  checkedvalues.subjects[name] = checked;
  //console.log(checkedvalues);
 // console.log(Object.keys(checkedvalues.subjects).filter(sub => checkedvalues.subjects[sub]));
  setSubject(Object.keys(checkedvalues.subjects).filter(sub => checkedvalues.subjects[sub]));
  //console.log(subject);
}



const formhandler = () => {
  fetch('/postdetails',{
    method: "post",
    headers:{
      "content-type" : "application/json"
    },
    body:JSON.stringify({
      name,
      email, 
      phoneNo,
      subject
    })
  }).then(data => data.json())
  .then((res => {
    if(res.error){
      console.log(res.error)
    }
  }))
}
    return (
        <div>
             <div class="container">  
  <div id="contact" >
      
      <h3 style={{"color":'black' }}>Enter Student Details</h3>
      
    
    
    <fieldset>
      <input placeholder="Name" type="text" tabindex="1" onChange={(e) => {setName(e.target.value)}} required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Email Address" type="email" tabindex="2" onChange={(e) => {setEmail(e.target.value)}} required/>
    </fieldset>
    <fieldset>
      <input placeholder="Phone Number (optional)" type="tel" tabindex="3" onChange={(e) => {setPhoneNo(e.target.value)}} required/>
    </fieldset>
    
    <div className='checkbox_container'>
      <div><input type="checkbox" class = "Subject" name="Maths" onChange={checkboxHandler}/>Maths</div>
      <div><input type="checkbox" class = "Subject" name="Physics" onChange={checkboxHandler}/>Physics</div>
      <div><input type="checkbox" class = "Subject" name="Chemistry" onChange={checkboxHandler}/>Chemistry</div>
      <div><input type="checkbox" class = "Subject" name="Biology" onChange={checkboxHandler}/>Biology</div>
      <div><input type="checkbox" class = "Subject" name="English" onChange={checkboxHandler}/>English</div>
    </div>

    <fieldset>
    
      <button  class="Subbutton" onClick={formhandler}>Submit</button>
    </fieldset>
    </div>
</div>
        </div>
    )
}

export default Form1;