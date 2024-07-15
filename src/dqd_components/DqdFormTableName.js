import axios from '../Dqd_apis/Dqd-2210900139'
import React, { useEffect, useState } from 'react'

export default function DqdFormTableName({renderDqdTableName,onDqdAdd}) {
    const[DqdId,setDqdId]=useState(renderDqdTableName.DqdId)
    const[DqdTbName,setDqdTbName]=useState(renderDqdTableName.DqdTbName)
    const[DqdTbEmail,setDqdTbEmail]=useState(renderDqdTableName.DqdTbEmail)
    const[DqdTbphone,setDqdTbphone]=useState(renderDqdTableName.DqdTbphone)
    const[DqdTbStatus,setDqdTbStatus]=useState(renderDqdTableName.DqdTbStatus)

    const DqdHandleSumit= async (DqdEvent)=>{
        DqdEvent.preventDefault();
        const DqdObjTableName={
            "DqdTbName": DqdTbName,
            "DqdTbEmail": DqdTbEmail,
            "DqdTbphone":DqdTbphone,
            "DqdTbStatus": DqdTbStatus,
            "DqdId": DqdId,
        }
        console.log(DqdObjTableName);
        await axios.post ("DqdTableName",DqdObjTableName);
        onDqdAdd();
    }
  return (
    <div>
        <h2>form xu ly du lieu them moi</h2>
        <form>
        <div className="input-group mb-3">
             <span className="input-group-text" id="DqdId">DqdId</span>
            <input type="text" className="form-control" placeholder="DqdId" 
            name='DqdId'
            value={DqdId}
            onChange={(DqdEv)=>setDqdId(DqdEv.target.value)}
            aria-label="DqdId" 
            aria-describedby="DqdId"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="DqdTbName">DqdTbName</span>
            <input type="text" className="form-control" placeholder="DqdTbName" 
            name='DqdTbName'
            value={DqdTbName}
            onChange={(DqdEv)=>setDqdTbName(DqdEv.target.value)}

            aria-label="DqdTbName" 
            aria-describedby="DqdTbName"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="DqdTbEmail">DqdTbEmail</span>
            <input type="text" className="form-control" placeholder="quocdat30075@gmail.com" 
            name='DqdTbEmail'
            value={DqdTbEmail}
            onChange={(DqdEv)=>setDqdTbEmail(DqdEv.target.value)}

            aria-label="DqdTbEmail" 
            aria-describedby="DqdTbEmail"/>
        </div> 
        <div className="input-group mb-3">
             <span className="input-group-text" id="D0357100129" 
            name='DqdTbphone'
            value={DqdTbphone}
            onChange={(DqdEv)=>setDqdTbphone(DqdEv.target.value)}

            aria-label="DqdTbphone" 
            aria-describedby="DqdTbphone"/>
        </div>
        <div className="input-group mb-3">
             <span className="input-group-text" id="DqdTbStatus">DqdTbStatus</span>
            <select id='DqdTbStatus' className='form-control'
            name='DqdTbStatus'
            value={DqdTbStatus}
            onChange={(DqdEv)=>setDqdTbStatus(DqdEv.target.value)}

            >
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary' name='btnDqdSave' onClick={DqdHandleSumit}>Dqd: save</button>
        </form>
    </div> 
  )
}
