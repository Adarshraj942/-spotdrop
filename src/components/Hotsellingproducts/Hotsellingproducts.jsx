import React, { Component } from "react";
import Slider from "react-slick";
import shopingcard from "../../assets/shopingcard.png";
import './Hotsellingproduct.css'
import ProHeader from "../ProHeader/ProHeader";



const cardsize = {
  width: "140px",
  padding:'10px 2px 2px 2px'
};




export default class Responsive extends Component {



  state = {
    products: [1, 2, 3, 4, 5, 6],
  };
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
    
    <ProHeader />
      <div className="container">
      
      
        <div align="center" id="MediaProduct">
          <Slider {...settings}>
          
            {/* <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div> */}
            {this.state.products.map((ele, i) => (
              <div key={i}>
                <div className="card" style={cardsize}>

<div align='center' ><img style={{width:'120px'}}  src={shopingcard}  alt="" />{" "}</div>
<div className="row " style={{marginTop:'20px'}}>
          <div className="col">
          <div className="first">
          <div className="d-flex justify-content-between align-items-center">
            <span className="wishlist">
            {/* <i class= "fa fa-heart"></i>
            <i class= " fa fa-heart-o"></i> */}
             

            

                   

            
            </span>{" "}
            
          </div>
        </div>  {" "}   <button  className="super_btnMedia" > ₹ </button>
          </div>
        </div>
        <div><span > <button className="discount01" > + Queue </button> </span>{" "} </div>
        <div className="row" >
            {" "}

            <div align="center" >  <button  className="listbtnlist01"  >  List</button>
           
            

</div>

           
          </div>

 
 
</div> 
               
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </>
    );
  }
}
