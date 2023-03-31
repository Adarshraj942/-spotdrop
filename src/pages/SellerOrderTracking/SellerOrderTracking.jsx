import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'

function SellerOrderTracking() {
    const serchbtn={
      backgroundColor:'#FDE31A',
      borderColor:'transparent',
      borderRadius:'10px',
      
      padding:'7px',
      outlineColor:'#FDE31A',
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
      width:'150px',
      fontWeight:'650'
        
        
         }
         const skubnt={
          width:'300px',
          height:'35px',
          borderColor:'transparent',
        
          borderRadius: '86px',
         
          backgroundColor:'rgba(231, 231, 231, 1)',
          color: 'rgba(50, 51, 58, 1)',
          fontSize: '15px',
          paddingLeft: '20px',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        
        
        
          outlineColor:'transparent', 
        }
        
         const Clearbtn={
          backgroundColor:'black',
          borderColor:'transparent',
          borderRadius:'10px',
          color:'white',
         
          padding:'7px',
          marginLeft:'1px',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"  ,
          width:'150px',
          fontWeight:'650'
         }
        
         const Order={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            fontWeight:'400',
            fontSize:'15px',
           
          
         }
        
   
  return (
    <>
    <Adminnavbar />
    <div className='row' style={{backgroundColor:'#32333A',padding:'0px 0px 100px 0px'}}>
        <div className='col-2' >
            <SellerSidebar />
        </div>
        <div className='col-10'>
         
        <div className='container' id='tabcontainer' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto', margin:'10px 20px 20px 10px', padding:'20px',overflowX:'scroll' }}>
            <div><h2>Order Tracking</h2></div>
           <div className='row'>
                <div className='col'>
                <div>
                <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={skubnt} type="date" /></div>

            
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px',width:'1700px'}}>
            <div className='col-md-auto'><button style={Order}>	Date</button></div>
            <div className='col-md-auto'><button style={Order}>	Order</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping<br /> Label Quantity</button></div>
            <div className='col-md-auto'><button style={Order}>Dispatched <br /> (Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>En Route <br />(Normal/Abnormal)Shipping Method</button></div>
            <div className='col-md-auto'><button style={Order}>Arrived <br />(Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>Out for <br /> Delivery(Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>Available for Pickup<br />(Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>Delivered</button></div>
            <div className='col-md-auto'><button style={Order}>Action</button></div>


          </div>
                </div>
                
                </div>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default SellerOrderTracking