import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
function Dropshiporder() {

    const stybtn={
        backgroundColor:'#FFE51A',
        borderColor:'transparent',
        padding:'5px',
        width:'100px',
        fontWeight:'400',
        fontColor:'black',
        borderRadius:'10px'
    }

    const skubnt={
        width:'300px',
        height:'35px',
        borderColor:'transparent',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: '10px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '13px',
       
        outlineColor:'rgba(0, 0, 0, 0.15)',
      
      
        
      }
      const skubntselect ={
        width:'300px',
        height:'35px',
        borderColor:'transparent',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: '10px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '13px',
       
        outlineColor:'rgba(0, 0, 0, 0.15)', 
      }
      const serchbtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        
        padding:'10px',
        outlineColor:'#FDE31A',
        marginRight:'10px',
        fontSize:'15px',
        width:'150px',
        fontWeight:'650'
        
        
         }
        
         const Clearbtn={
            backgroundColor:'black',
            borderColor:'transparent',
            borderRadius:'10px',
            color:'white',
            padding:'10px',
            
        
            width:'150px',
            fontWeight:'650',
         }
        
  return (
    <div  style={{backgroundColor:'#31343A',padding:'0px 0px 40px 0px'}}>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2' style={{backgroundColor:'#32333A'}}><Sidebar /></div>
            <div className='col-10'>
             <div className='container' id='tabcontainer' style={{  display: 'block',color:'black',borderRadius:'20px',width:'auto',margin:'20px 20px 20px 20px', border:"0.5px solid rgba(0, 0, 0, 0.25)" ,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',padding:'20px',}}>
                <div className='Dashboardheading'><h3>Pre-Inventory Orders</h3></div>
             <div className='row' style={{marginTop:'20px'}}>
                    <div className='col'>
                        <select name="" id="" style={skubntselect}>
                            <option value="">Your Order Time</option>
                            
                        </select>
                    </div>
                    <div className='col'><p><input style={skubnt} type="date" /></p></div>
                </div>
                <div className='row' style={{marginTop:'20px'}}>
                    
                    <div className='col'>
                        <input style={skubnt} placeholder='please enter the name' type="text" />
                    </div>
                    <div className='col'>
                        <input style={skubnt} placeholder='plaese enter product title' type="text" />
                    </div>
                </div>

                
                <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                        <input style={skubnt} placeholder='please enter order number' type="text" />
                    </div>
                 

                    
                   
                </div>
                <div className='row'>
                <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
                </div>
                <div className='row' style={{backgroundColor:'#FFE627',padding:'5px',marginTop:'20px'}}>
                    <div className='col'>Your Order Number
                    {/* <div className='col-2'><p>Your Order number<span><select name="" id="" style={{width:'30px'}}  >
                        <option value="all">All</option>
                        <option value="">Store</option>
                        <option value="">Excel imported</option>
                        <option value="">Created</option>
                        <option value="">Suplier</option>
                        
                        </select></span></p> */}
                    </div>
                    <div className='col'>
                        <button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Your order Time</button>
                    </div>
                    <div className='col'>
                        <button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Seller ID</button>
                    </div>
                    <div className='col'>
                        <button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Product Url</button>
                    </div>
                   
                    
                    <div className='col-2'>
                       
                        <p>Sku ID</p>
                        
                    </div>
                     <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >Cost</button></div>   
                    <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >Available Stock</button></div>
                    
                    <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >action</button></div>
                </div>
             </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dropshiporder
