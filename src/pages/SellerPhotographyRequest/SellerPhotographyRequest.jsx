import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './SellerPhotographyRequest.css'

function SellerPhotographyRequest() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
     
  const Order={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    fontWeight:'400',
    fontSize:'15px',
   
  
 }
 const serchbtn={
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'10px',
width:'100px',
fontWeight:'650',
fontSize:'15px',
  padding:'5px',
  outlineColor:'#FDE31A'
  
  
   }
  return (
  <>
  <Adminnavbar />
  <div className='row'>
    <div className='col-2' >
        <SellerSidebar />
    </div>
   <div className='col-10'>
    <div className='container' id='tabcontainer'  style={{padding:'20px 10px 20px 10px',width:'1100px',marginTop:'10px'}}>
 <div><h2>Photography Request</h2></div>
 <div className='row' style={{padding:'7px',margin:'20px',backgroundColor:'#FDE31A',borderRadius:'10px'}}>
            <div className='col'><button style={Order}>	Product Name</button></div>
            <div  className='col'><button style={Order}>	Sku Id</button></div>
            <div className='col'><button style={Order}>Varient</button></div>
            <div  className='col-md-auto'><button style={Order}>Dropshiper User ID</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Action</button></div>
            {/* <div className='col'> 
            <Button style={{color:'black',fontSize:'15px'}} onClick={handleClickOpen}>
        Photography Request
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Photography Request</DialogTitle>
        <DialogContent>
       <div>
        <form action="">
         <div className='flex' style={{justifyContent:'space-between',display:'flex'}}>
          <div className='flexl' style={{justifyContent:'left'}}>
            Choose Video
          </div>
          <div className='flexr' style={{justifyContent:'right'}}>
            <input type="file" />
          </div>
         </div>
         <div className='flexc' style={{justifyContent:'space-between',display:'flex'}}>
          <div className='flexl' style={{justifyContent:'left'}}>
            Choose Image
          </div>
          <div className='flexr' style={{justifyContent:'right'}}>
            <input type="file" />
          </div>
         </div>
       
        </form>
       </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className='clear'>Cancel</Button>
          <Button onClick={handleClose} className='product'>Submit</Button>
        </DialogActions>
      </Dialog>
      </div> */}



          </div>
    </div>

   </div>
  </div>
  </>
  )
}

export default SellerPhotographyRequest
