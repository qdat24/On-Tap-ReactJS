import React, { useEffect, useState } from 'react'

import axios from './dqd_apis/dqd-2210900139'
import dqdListTableName from './dqd_components/dqdListTableName';
import dqdFormTableName from './dqd_components/dqdFormTableName';


export default function dqdApp() {
  const[dqdListTableName,setdqdListTableName]=useState([])
  const dqdGetTableName = async ()=>{
    let dqdResp= await axios.get("dqdTableName");
    console.log("App list:",dqdResp.data);
    setdqdListTableName(dqdResp.data);
  }
  useEffect(()=>{
    dqdGetTableName();
  },[])

  const dqdHanldeDelete=async (dqdId)=>{
    let dqdRes= await axios.delete("dqdTableName/"+dqdId);
    dqdGetTableName();
  }
  const dqdObjTableName={
    "dqdTbName": "Dinh Quoc Dat",
    "dqdTbEmail": "quocdat30075@gmail.com",
    "dqdTbphone": "0357100129",
    "dqdTbStatus": true,
    "dqdId": "2210900139"
  };
  const [dqdTableName,setdqdTableName]=useState(dqdObjTableName);
 const dqdHandleAdd =()=>{
   dqdGetTableName();
 }
// const dqdHandelEdit =()=>{
//   dqdGetTableName();
// }
const dqdHandleEdit=(dqdObjEditTableName)=>{
  setdqdTableName(dqdObjEditTableName);
}
  return (
    <div className='container border my-3'>
      <h1>bài đánh giá hết học phần -Đinh Quốc Đạt:2210900139</h1>
      <hr/>
       <dqdListTableName renderdqdListTableName={dqdListTableName} ondqdDelete={dqdHanldeDelete}/>
      <dqdFormTableName renderdqdTableName={dqdTableName} ondqdAdd={dqdHandleAdd}/>
    </div>
  )
}
