import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

function Connection() {

    const ADDBTN={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        width:'200px',
        borderRadius:'5px',
        padding:'5px',
        fontSize:'15px',
        fontWeight:'400',
        color:'black',
        marginTop:'300px',
        textAlign:'center'
    }
  return (
    <div style={{backgroundColor:'#31343A',padding:'0px 0px 100px 0px'}}>
      <div>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2'><Sidebar /></div>
            <div className='col-10'>
                <div className='container' id=''>
                    <div align='center' className='row'>
                        <div className='col-4'><button style={ADDBTN}>Add Automatic Connection</button></div>
                        <div className='col-6'><button style={ADDBTN}>Add Sourcing Connection</button></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Connection
