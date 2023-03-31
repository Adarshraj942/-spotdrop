import React, { useState } from "react";
import "./MoreProduct.css";
import { useHistory } from "react-router-dom";
import shopingcard from "../../assets/shopingcard.png";
import { useLocation } from "react-router-dom";
import connection from "../../assets/connection.png";
import list from "../../assets/list.png";
import { useEffect } from "react";
import { getAllProducts } from "../../Api/ProductRequest.js";
import { addToWishlist, getWishlist } from "../../Api/WishlistRoute";

import swal from "sweetalert";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const list_second = {
    color: "rgba(165, 165, 165, 1)",
    fontstyle: "Poppins",
    fontWeight: "500",
    fontSize: "13.82px",
    lineHeigt: "22.23px",
    paddingLeft: "13px",
    fontFamily: "poppins",
    backgroundColor:'transparent',
    borderColor:'transparent',
    float:'left',
    paddingBottom:'10px'
  
   
  
  };

  const header={
    justifyContent:'center',
    paddingTop:'10px',
    paddingBottom:'10px',
    backgroundColor:'#FDE31A',
    width:'270px',
    fontSize:'20px',
    borderRadius:'20px',
    marginBottom:'40px',
    marginTop:'40px'
  
  }
  
  const subbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'200px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
  }
  const subbtnlist={
    backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
  }
  
  const carddesign = {
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
   height:'350px',
   boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" ,
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
   
  };

function MoreProduct() {

    const history = useHistory();
    const [products,setProduct]=useState([])
    const Productpage = () => {
        history.push(`/ProductPage/${products._id}`)
    } 
  
    const userData =localStorage.getItem("userId")
   const userInfo =localStorage.getItem("userInfo")
    // useEffect(async()=>{
    //   const fetchProducts=async()=>{
    //     const {data}=await getAllProducts()
    //     setProduct(data)
        
    //   }
    //   fetchProducts()
    // },[])
  
    useEffect(() => {
      async function fetchData() {
        // You can await here
        const {data}=await getAllProducts()
        setProduct(data)
        
        // ...
      }
      fetchData();
    }, []); // Or [] if effect doesn't need props or state
  
  
    const wishlist=async(data)=>{
     if(userData && userInfo){
      const ata={
        productId:data,
        userId:userData,
        quantity:1
      }
      const tata= await addToWishlist(ata)
      if(tata){
       swal("Added to wishlist")
       
      }
     }else{
      swal("Login first")
      history.push('/signin')
     }
     
       
    }
  
      
    const[users,setUsers]=useState([]);
  const [search,setSearch]=useState("");
  const [filterUsers,setFilteredUsers]=useState([]);
  
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const beta={userId:userData}
      const {data}=await getWishlist(beta)
      setUsers(data)
      setFilteredUsers(data.Wishlist.products)
      console.log(userData);
      console.log(data.Wishlist.products);
      // ...
    }
    fetchData();
  }, []);
  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <div align="center" id="headerMediayo"  ><h3  style={header}>Recomended Products</h3></div>
    <div id='reomdProduct'>
    <div className="col-md-6" >
    <div className="row">
          {products &&
            products.length > 0 &&
            products.map((ele) => (
              <div className="col" style={{width:'50%'}}  >
                <div align="center"       
                  
                     onClick={() => {
                      history.push(`/ProductPage/${ele._id}`)
                  } } className="card"  style={{width:'160px'}}>
                  <div className="image" style={{width:'100%'}}>
                    
                    <img
                     src={ele.image1?"https://server.dropspot.in/images/"+ele.image1:"" }
                     style={{cursor:"pointer",width:"100%",height:"200px",borderRadius:'10px' }}
                     onClick={() => {
                      history.push(`/ProductPage/${ele._id}`)
                  } }
                     />
                  </div>
                  <div className="product-detail-container">
                    <div className="d-flex">
                      <h4 align="center" className="dress-name" >
                        {ele.name}
                      </h4>
                    </div>
                    <div className="row">
                      <div className="col">
                      <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                      <span className="wishlist">
                        {/* <i class= "fa fa-heart"></i>
                        <i class= " fa fa-heart-o"></i> */}
                         

                         {(toggle==false)?<i className=" fa fa-heart-o" onClick={()=>{
                                wishlist(ele._id)
                                
                                handleToggle()
                               }} />:  <i className=" fa fa-heart" onClick={()=>{
                                wishlist(ele._id)
                                    handleToggle()
                               }} />}
                              

                               

                        
                        </span>{" "}
                        
                      </div>
                    </div>  {" "}   <button  className="super_btn" > ₹ {ele.price} </button>
                      </div>
                    </div>
                   
                
                   
                      <div  >
                        {" "}
                        <div><span > <button className="discount01" > + Queue </button> </span>{" "} </div>
                    <div className="row" >
                        {" "}

                        <div align="center" >  <button  className="listbtnlist01" onClick={handleClickOpen}  > <img src={list} alt="" />   List</button>
                       
                        
 
  </div>
 
                       
                      </div>
                       
                    
                        <div className="col" >
                          <Dialog   open={open} 
                              sx={{
                                "& .MuiDialog-container": {
                                  "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: "1500px",  // Set your width here
                                  },
                                },
                              }}
                             onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
            <div className="container" >
              
              <div className="flexcontinaer" style={{width:'300px'}}>
                <div className="flexleft" style={{marginTop:'10px'}}>
                <h5>Store</h5>
                </div>
                <div className="flexright">
                <select className="Selectbox" name="" id="">
                    <option value=""></option>
                     <option value=""></option>
                      <option value=""></option>
                    </select>
                </div>
              </div>
            </div>
           
            <div align="center" className="row" style={{width:'1000px',marginTop:'20px'}} >
              <div className="col-2"><button className="bulkbtn">Bulk Revise</button></div>
              <div className="col-4"><button className="bulkbtnprice">Price Change</button></div>
              <div className="col-2"> <input className="inputflied" type="text" /> </div>
              <div className="col-2"><button className="bulkbtnok">OK</button></div>
              <div className="col-2"><button className="bulkbtnrec">Recommended Listed Price </button></div>
            </div>
            <div align="middle" className="row" style={{backgroundColor:'rgba(255, 214, 0, 1)',marginTop:'40px',padding:'10px',borderRadius:'20px'}}>
              <div className="col"><input style={{width:'20px',height:'20px'}} type="checkbox" /></div>
              <div className="col"><button className="buttonbox">Image</button></div>
              <div className="col"><button className="buttonbox">Sku</button></div>
              <div className="col"><button className="buttonbox"> Catogory</button></div>

              <div className="col"><button className="buttonbox">MRP</button></div>
              <div className="col-md-auto"><button className="buttonbox">Shipping Fee</button></div>
              <div className="col-2"><button className="buttonbox">Service fee</button></div>
              <div className="col-md-auto"><button className="buttonbox" >Total Dropshipping Cost</button></div>
              <div className="col"><button className="buttonbox">Price</button></div>
            </div>
            <div align="middle" className="row" style={{backgroundColor:'rgba(217, 217, 217, 1)',marginTop:'40px',padding:'10px',borderRadius:'20px'}}>
              <div className="col"><input style={{width:'20px',height:'20px'}} type="checkbox" /></div>
              <div className="col"><button className="buttonbox">Image</button></div>
              <div className="col"><button className="buttonbox">Sku</button></div>
              <div className="col"><button className="buttonbox"> Catogory</button></div>

              <div className="col"><button className="buttonbox">MRP</button></div>
              <div className="col-md-auto"><button className="buttonbox">Shipping Fee</button></div>
              <div className="col-2"><button className="buttonbox">Service fee</button></div>
              <div className="col-md-auto"><button className="buttonbox" >Total Dropshipping Cost</button></div>
              <div className="col"><button className="buttonbox">Price</button></div>
            </div>
              <div className="row" style={{backgroundColor:'rgba(0, 0, 0, 1)',marginTop:'40px',padding:'20px',borderRadius:'20px'}}>
             
              <div className="col"><button className="buttonboxsecond">Estimated Delvery Time</button></div>
              <div className="col"><button className="buttonboxrange">Time range</button></div>
              <div className="col"><button className="buttonboxsecond"> Shipping Cost</button></div>
              <div className="col"><button className="buttonboxcost">₹Cost</button></div>
              <div className="col"><button className="buttonboxTcking">Tracking Information :</button></div>
              <div className="col"><button className="Availblity">Available</button></div>
            </div>
         
        </DialogContent>
        <DialogActions >
          <div align="center" style={{marginRight:'33%',display:'flex',marginBottom:'10px'}}>
          <div ><button style={{backgroundColor:'black',padding:'5px',color:'white',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'5px' }} onClick={handleClose}>Cancel</button></div>
          <div ><button style={subbtnlist} onClick={handleClose}>List Now</button></div>
          <div ><button style={subbtn} onClick={handleClose}>Listing Before Edit</button></div>
          </div>

       
         
        </DialogActions>
      </Dialog>
 
  </div>

                       
                      </div>



                    <div className="d-flex justify-content-between align-items-left pt-1">
                      <div>
                        {" "}
                        
                        
                      </div>{" "}
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
    </div>
    </>
  )
}

export default MoreProduct
