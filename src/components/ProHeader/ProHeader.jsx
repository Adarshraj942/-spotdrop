import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import group8 from '../../assets/group8.png'
import group1 from '../../assets/group1.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'
import group4 from '../../assets/group4.png'
import group5 from '../../assets/group5.png'
import group6 from '../../assets/group6.png'
import './ProHeader.css'
import group7 from '../../assets/group7.png'

const header={
    justifyContent:'center',
    paddingTop:'10px',
    paddingBottom:'10px',
    backgroundColor:'#FDE31A',
    width:'200px',
    fontSize:'20px',
    borderRadius:'20px',
    marginBottom:'40px',
    marginTop:'40px'
  
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function ProHeader() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
  return (
    <div align="center" id="headerMedia"  ><h3  style={header}> 
    <button  style={{backgroundColor:'transparent',borderColor:'transparent'}}  onClick={handleClickOpen}>Trending Products</button> </h3>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle><div></div></DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <div className='row'>
            <div className='col-4'>
                    <div align='center' >
                    <div  className='bannerbtn'><img src={group8} alt="" /></div>
                      <div  ><button className='trendingbanner'>Trending Products</button></div>
                    </div>
            </div>
        
            <div className='col-4'>
            <div align="center" className='bannerbtn'><img src={group3} alt="" /></div>
            <div  ><button className='trendingbanner'>Super Deals</button></div>
            </div>
            <div className='col-4'>
            <div align="center" className='bannerbtn'><img src={group4} alt="" /></div>
            <div  ><button className='trendingbanner'>Hot Selling</button></div>
            </div>
           </div>
           <div className='row'>
            <div className='col-4'>
            <div align="center" className='bannerbtn'><img src={group5} alt="" /></div>
            <div  ><button className='trendingbanner'>Brand Section</button></div>
            </div>
            <div className='col-4'>
            <div align="center" className='bannerbtn'><img src={group6} alt="" /></div>
            <div  ><button className='trendingbanner'>Print on Demand</button></div>
            </div>
            <div className='col-4'>
            <div align="center" className='bannerbtn'><img src={group7} alt="" /></div>
            <div  ><button className='trendingbanner'>Recomanded Products</button></div>
            </div>
          
           </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor:'black',color:"white"}} onClick={handleClose}>Select</Button>
       
        </DialogActions>
      </Dialog>
  
  </div>
  )
}

export default ProHeader