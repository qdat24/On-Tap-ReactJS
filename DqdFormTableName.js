import axios from '../dqd_apis/dqd-2210900139'
import React, { useEffect, useState } from 'react'

export default function dqdFormTableName({renderdqdTableName,ondqdEdit}) {
    const[dqdId,setdqdId]=useState(renderdqdTableName.dqdId)
    const[dqdTbName,setdqdTbName]=useState(renderdqdTableName.dqdTbName)
    const[dqdTbEmail,setdqdTbEmail]=useState(renderdqdTableName.dqdTbEmail)
    const[dqdTbphone,setdqdTbphone]=useState(renderdqdTableName.dqdTbphone)
    const[dqdTbStatus,setdqdTbStatus]=useState(renderdqdTableName.dqdTbStatus)

useEffect(()=>{
    setdqdId(renderdqdTableName.dqdId)
    setdqdTbName(renderdqdTableName.dqdTbName)
    setdqdTbEmail(renderdqdTableName.dqdTbEmail)
    setdqdTbphone(renderdqdTableName.dqdTbphone)
    setdqdTbStatus(renderdqdTableName.dqdTbStatus)
},[renderdqdTableName])

    const dqdHandleSumit= async (dqdEvent)=>{
        dqdEvent.preventDefault();
        const dqdObjTableName={
            "dqdTbName": dqdTbName,
            "dqdTbEmail": dqdTbEmail,
            "dqdTbphone":dqdTbphone,
            "dqdTbStatus": dqdTbStatus,
            "dqdId": dqdId,
        }
        console.log(dqdObjTableName);
        await axios.put ("dqdTableName/"+dqdObjTableName.dqdId,dqdObjTableName);
        ondqdEdit();
    }
  return (
    <div>
        <h2>form xu ly du lieu them moi</h2>
        <form>
        <div className="input-group mb-3">
             <span className="input-group-text" id="dqdId">dqdId</span>
            <input type="text" className="form-control" placeholder="dqdId" 
            name='dqdId'
            value={dqdId}
            onChange={(dqdEv)=>setdqdId(dqdEv.target.value)}
            aria-label="dqdId" 
            aria-describedby="dqdId"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="dqdTbName">dqdTbName</span>
            <input type="text" className="form-control" placeholder="dqdTbName" 
            name='dqdTbName'
            value={dqdTbName}
            onChange={(dqdEv)=>setdqdTbName(dqdEv.target.value)}

            aria-label="dqdTbName" 
            aria-describedby="dqdTbName"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="dqdTbEmail">dqdTbEmail</span>
            <input type="text" className="form-control" placeholder="khoavu27082k4@gmail.com" 
            name='dqdTbEmail'
            value={dqdTbEmail}
            onChange={(dqdEv)=>setdqdTbEmail(dqdEv.target.value)}

            aria-label="dqdTbEmail" 
            aria-describedby="dqdTbEmail"/>
        </div> 
        <div className="input-group mb-3">
             <span className="input-group-text" id="dqdTbphone">dqdTbphone</span>
            <input type="text" className="form-control" placeholder="0567699711" 
            name='dqdTbphone'
            value={dqdTbphone}
            onChange={(dqdEv)=>setdqdTbphone(dqdEv.target.value)}

            aria-label="dqdTbphone" 
            aria-describedby="dqdTbphone"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="dqdTbStatus">dqdTbStatus</span>
            <select id='dqdTbStatus' className='form-control'
            name='dqdTbStatus'
            value={dqdTbStatus}
            onChange={(dqdEv)=>setdqdTbStatus(dqdEv.target.value)}

            >
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary' name='btndqdSave' onClick={dqdHandleSumit}>dqd: save</button>
        </form>
    </div> 
  )
}
