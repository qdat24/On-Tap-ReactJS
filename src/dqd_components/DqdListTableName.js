import React from 'react'

export default function DqdListTableName({renderDqdListTableName,onDqdDelete,onDqdEdit}) {
    console.log("list:",renderDqdistTableName);
    //hien thi du lieu
    const DqdElementTableName = renderDqdListTableName.map((DqdItem,DqdIndex)=>{
        return(
            <tr key={DqdIndex}>
                <td>{DqdItem.DqdId}</td>
                <td>{DqdItem.DqdTbName}</td>
                <td>{DqdItem.DqdTbEmail}</td>
                <td>{DqdItem.DqdTbphone}</td>
                <td>{(DqdItem.DqdTbStatus===true||DqdItem.DqdTbStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                    onClick={()=>DqdHandelEdit(DqdItem)}
                    >Dqd-edit</button>
                    <button className='btn btn-danger'
                        onClick={()=>DqdHanldeDelete(DqdItem.DqdId)}
                    >Dqd-delete</button>
                </td>
            </tr>
        );
    })
    const DqdHanldeDelete=(DqdId)=>{
        if(window.confirm('ban co muon xoa'+DqdId)){
            onDqdDelete(DqdId);
        }
    }
    const DqdHandelEdit=(DqdObjTableName)=>{
        onDqdEdit(DqdObjTableName);
    }
  return (
    <div>
        <h2>danh sách thông tin ......</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <th>DqdId</th>
                <th>DqdTbName</th>
                <th>DqdTbEmail</th>
                <th>DqdTbphone</th>
                <th>DqdTbStatus</th>
                <th>Dqd: chuc nang</th>

            </thead>
            <tbody>
                {DqdElementTableName}
            </tbody>
        </table>
    </div>
  )
}
