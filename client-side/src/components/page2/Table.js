import React , {useState,useEffect} from "react";
import Record from './Record';
const Table = () => {
    const [datas,setDatas] = useState([]);
    // {
    //     "id" : 1,
    //     "name":"Suvrajeet",
    //     "email":"suvrajeet@gmail.com",
    //     "phoneNo":"9101693484",
    //     "subject":"Maths , science , english"
    // },
    // {
    //     "id" : 2,
    //     "name":"tanmay",
    //     "email":"tanmay@gmail.com",
    //     "phoneNo":"9001693484",
    //     "subject":"Maths , english"
    // },
    // {
    //     "id" : 3,
    //     "name":"Satish",
    //     "email":"satish@gmail.com",
    //     "phoneNo":"9801693484",
    //     "subject":"science , english"
    // },{
    //     "id" : 4,
    //     "name":"rontu",
    //     "email":"rontu@gmail.com",
    //     "phoneNo":"9101693384",
    //     "subject":"Maths , science "
    // },{
    //     "id" : 5,
    //     "name":"Manash",
    //     "email":"manash@gmail.com",
    //     "phoneNo":"9101693484",
    //     "subject":"Maths , science , english"
    // },
    // {
    //     "id" : 6,
    //     "name":"Akash",
    //     "email":"akash@gmail.com",
    //     "phoneNo":"9231693484",
    //     "subject":"Maths , english"
    // },
    // {
    //     "id" : 7,
    //     "name":"Rakesh",
    //     "email":"Rakesh12@gmail.com",
    //     "phoneNo":"9801453484",
    //     "subject":"science , english"
    // },{
    //     "id" : 8,
    //     "name":"Rinku",
    //     "email":"rinku_03@gmail.com",
    //     "phoneNo":"9103983384",
    //     "subject":"Maths , science "
    // }
    // ]);  
    const test =()=>{
        let url = new URL('http://localhost:3000/subjects')
            url.search = new URLSearchParams({
                id:1,
               
            })

        fetch(url,{
            method:'get',
            headers:{ "content-type" : "application/json"},
            
        }).then(res=>res.json()).
        then(data=>console.log(data));
    }


    useEffect(() => {
        fetch('/students',{
            method:'get',
            headers:{ "content-type" : "application/json"},
        }).then(res=>res.json())
        .then(dat => console.log(dat));
        // .then(data => {
            
        //     data.forEach(element => {
        //         let url = new URL('http://localhost:3000/subjects')
        //         url.search = new URLSearchParams({
        //             id:element.id,
                   
        //         })
        //         fetch(url,{
        //             method:'get',
        //             headers:{ "content-type" : "application/json"},
                   
        //         }).then(res=>res.json()).
        //         then(val => {
                    
        //             const temp1 = [{"name" : element.name, "email": element.email, "phoneNo": element.phoneNo , "subjects": val}];
                    
        //              let temp2 = [...datas,...temp1];
        //             // temp2.push(temp);
                     
        //            // temp2.push(temp);
        //             setDatas(temp2);
                    
                    
        //         })
        //         .catch(error => {
        //             // handle the error
        //         });
                 
        //     });
        //     //console.log(data);
        // });
        
           
    },[])

    //console.log(datas);
    return (
        <div className='container'>
            <table width="100%" border="1">
  <caption>Student Details</caption>
  <tr className="row1">
    <th width="5%">sl.no</th>
    <th className="col2">Name</th>
    <th>Email</th>
    <th>Phone no.</th>
    <th>Subject</th>
  </tr>
  {datas.map(data => {
      return(
          <Record slno = {data.id} Name = {data.name} Email = {data.email} PhoneNo = {data.phoneNo} Subject={data.subject}/>
      )
  })}
<button onClick={test}>test</button>
</table>
        </div>
    )
}

export default Table;