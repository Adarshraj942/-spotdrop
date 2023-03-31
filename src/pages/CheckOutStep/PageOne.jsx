import React, { useEffect, useState } from 'react'
import shopingcard from '../../assets/shopingcard.png'
// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';


// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'


import './PageOne.css'
import { useHistory, useParams } from 'react-router-dom'
import { getProduct } from '../../Api/ProductRequest'
import swal from 'sweetalert'
import { createOrder } from '../../Api/OrderRequest'







function PageOne() {
  const [post ,setPost]=useState({})
  const [shipping ,setshipping]=useState(0)
  const [platform ,setPlatform]=useState(0)
  const [total ,setTotal]=useState(0)
  const [states,setState]=useState([])
  const [stateCode,setStateCode]=useState("AN")
  const [cityCode,setCityCode]=useState("Bamboo Flat")
  const [city,setCity]=useState([])
  const [address, setAddress] =React.useState({
    firstName:"",

    email: "",

    lastName: "",
    mobile:"",
    DAddress:"",
    city:"",
    state:"",
    zip:"",
    

  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
const params =useParams()
useEffect(() => {
  async function fetchData() {
    // You can await here
    const {data}=await getProduct(params.id)

    setPost(data)
    // ...
    console.log(post.price);
    const totalPrice=shipping+platform+Number(post.price )
    setTotal(totalPrice)
    setState( State.getStatesOfCountry("IN"))
    setCity(City.getCitiesOfState("IN", stateCode))

  }
  fetchData();
}, [stateCode]); // Or [] if effect doesn't need props or state
console.log("states",states)
const userData =localStorage.getItem("userId")
const userInfo =localStorage.getItem("userInfo")
  const history = useHistory();
  const handlesubmitinfo= () => {
      history.push("/PurchaseItem");
          } 

          const order=async(e)=>{
            e.preventDefault();
           
            if(userData && userInfo){
             const ata={
               productId:post._id,
               productName:post.name,
               userId:userData,
               quantity:1,
               price:post.price,
               deliveryAddress:{
                  firstName:address.firstName,
                  lastName:address.lastName,
                  mobile:address.mobile,
                  email:address.email,
                  state:stateCode,
                  city:cityCode,
                  post:address.zip,
                  address1:address.DAddress
        
               },
               orderType:"Seller",
               paymentMod:"COD",
               PaymentStatus:"PENDING",
               DeliveryStatus:"PENDING",
               OrderStatus:"ORDERED"
             }
             console.log(ata);
             const tata= await createOrder(ata)
             if(tata){
              swal("Ordered Successfully...!")
              history.push("/SellerOrderFullfillment")
              
             }
            }else{
             swal("Login first")
             history.push('/signin')
            }
            
              
           }
          
           console.log(stateCode);
           console.log(city);
  return (
    <div>
    
      <div align='center' className='flex-contianer' >
      <div className='flex-item-right'>
          <div className='card' id='cardComponet'>
            <div className='imagecontainer'><img style={{height:"18rem",width:"21rem",padding:"1rem 2rem 1rem 2rem  ",borderRadius:"16%"}} src={post.image1?"https://server.dropspot.in/images/"+post.image1:""} alt="" /></div>
           <div className='containerMAx'>
           <div className='flexitem'>
              <div className='flexleft'>
                <h5>Price </h5>
              </div>
              <div className='flexright'>
              ₹  {post.price}
              </div>
            </div>
              <div className='flexitem'>
              <div className='flexleft'>
                <h5>Platform charge </h5>
              </div>
              <div className='flexright'>
              ₹  {platform}
              </div>
            </div>
            <div className='flexitem'>
              <div className='flexleft'>
                <h5>Shiping</h5>
              </div>
              <div className='flexright'>
              ₹  {shipping}
              </div>
            </div>
            <div className='flexitem'>
              <div className='flexleft'>
                <h5>Total Price</h5>
              </div>
              <div className='flexright'>
              ₹ {total}
              </div>
            </div>
           </div>
          </div>
        </div>
        <div className='flex-item-left' >
        <div align='center'><h4 className='header1'>Contact Information</h4></div>
       <div align='left'  style={{height:'0px'}} className='mediay' ></div>
        <div align='right' style={{height:'0px'}} className='imghim'></div>
        <div className='container'>
        <form action=""  onSubmit={order}>
          <div >
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
          <div align='left'><label htmlFor="">First Name</label></div>
              <div><input className='Mobiinput' onChange={handleChange} name='firstName' value={address.firstName} type="text" required /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
             <div align='left'><label htmlFor="">Last</label></div>
              <div><input className='Mobiinput' name='lastName'     onChange={handleChange} value={address.lastName} type="text" required  /></div>
        </div>
         
          </div>
       
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Mobile number</label></div>
              <div><input className='Mobiinput'   onChange={handleChange} name='mobile' value={address.mobile} type="text" required  /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Email</label></div>
              <div><input className='Mobiinput'  onChange={handleChange} name='email' value={address.email} type="text" required  /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Address</label></div>
              <div><input className='Mobiinput' onChange={handleChange} name='DAddress' value={address.DAddress} type="text" required  /></div>
        </div>
        <div>
          <div>
   
        <div>
    <div  >
     
      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">State</label></div>
              <div>
              <select className='Mobiinput'  required onChange={(e)=>{
                  setStateCode(e.target.value)
                 
            
              }} name="" id="">
            
              {states &&
            states.length > 0 &&
            states.map((ele) => (  
              <option value={ele.isoCode} >{ele.name}</option>
             ))}
                
              </select>
              </div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">City</label></div>
              <div>
              <select className='Mobiinput' required  name="" id="" onChange={(e)=>{
                  setCityCode(e.target.value)
                 
            
              }}>
             { city.length > 0 &&
            city.map((ele) => (  
              <option value={ele.name} >{ele.name}</option>
             ))}
              </select>
              </div>
        </div>
          
          <div>
           
          </div>
          <div>
       
          </div>
          
      </div>

      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Zip</label></div>
              <div><input name='zip' value={address.zip}     onChange={handleChange}  className='Mobiinput' type="text" required  /></div>
        </div> 
        </div>
          </div>
        </div>
      
        <button className='submitbutton' onClick={handlesubmitinfo}>Pay Now</button>
<button className='submitbutton' >PreOrder</button>
        
        </form>
        </div>
       
      
      
        </div>

       

      
       
       
      </div>
<div align='center' style={{margin:'40px'}}> 

</div>
      

     
      
     
    
    </div>
  )
}

export default PageOne