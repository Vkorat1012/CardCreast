import React, { useState } from "react";
import {
  EyeOutlined,
  FileZipOutlined,
  CheckOutlined,
  LockOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Slider from "react-slick";
import "../css/content.css";
//import Cards from './cards';
import hdfcLogo from "../css/hdfc.png";
import master from "../css/master.jpg";
import { useSelector, useDispatch } from "react-redux";

const CardShow = (props) => {


  //for redux //
  const cards = useSelector((state) => state.cardItem.cards);
  const initial_slide = useSelector((state) => state.cardItem.current_slide);

  const dispatch = useDispatch();

  const result = props.type==="debit"? 
  ( cards.filter((item) => 
  ( item.id === initial_slide && item.card_type === "debit" )  &&  <>{item}</> ))
  :
  ( cards.filter((item) => 
   ( item.id === initial_slide && item.card_type === "credit" )  &&  <>{item}</> ));

  //  const show_status = cards.map((card)=>card.show )
  //  const [view] = show_status;
  //  console.log("hide status",view)

  const des = result.map((item)=>item.card_type )
const [cardType] = des;
  


  //for slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      dispatch({
        type: "INITIAL_SLIDE",
        // payload : next,
        current_slide: next,
       
      });
    },
    afterChange: (current) => {
     dispatch({ type: "INITIAL_SLIDE",
      // payload : next,
      current_slide: current,})
    },
  };

  //This function is for add space between card Number //
  function showCardHandler(num, lastDigit,view) {
    if (view) {
      return (
        <>
          {num.map((item) => {
            return (
              <>
                {item} <span style={{ paddingRight: "13px" }}></span>
              </>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {lastDigit.map((item) => {
            return (
              <>
                {" "}
                0000<span style={{ paddingRight: "13px" }}></span>0000
                <span style={{ paddingRight: "13px" }}></span>
                0000<span style={{ paddingRight: "13px" }}></span>
                {item}
                <span style={{ paddingRight: "13px" }}></span>
              </>
            );
          })}
        </>
      );
    }
  }
  // till hear //
  // card functionalities functions //

  // function archiveHandler(){
  //   dispatch({
  //     type : "ARCHIVE"
  //   })
  // }

  //
  function lockHandler(cardTp){
    dispatch({
      type:"LOCK",
      payload : initial_slide,
      card : cardTp
    })
    console.log("slide :", initial_slide)
  } 
  function showReducer(cardTp){
    dispatch({
      type : "SHOW_CARD",
      payload: initial_slide,
      card :cardTp
      
    })
    console.log("cards",cards)

  }
  return (
     <div style={{ display: "flex" }}>
      <div style={{ width: "330px" }}>
        <div>
          <div className="header--name">
            {props.type === "credit" ? "Credit" : "Debit"} Cards
          </div>
          
        </div>
        <Slider {...settings}>
          {cards.map((card) => {
            if (card.card_type === props.type) {
              const original = card.number;
              const output_number = original.toString().match(/\d{1,4}/g);
              const lastDigit = output_number.slice(-1);
              return (
                <div style={{ display: "block", padding: "0 0" }}>
                        <div className="flex">
                          {card.show? (
                            <button
                              onClick={() => showReducer(cardType)  
                                //setView(false);
                              }
                              className="status-button"
                            >
                              <EyeOutlined style={{ paddingRight: " 5px" }} /> Hide Card
                              Number
                            </button>
                          ) : (
                            <button
                            onClick={() => showReducer(cardType)}
                              className="status-button"
                            >
                              <EyeOutlined /> Show Card Number
                            </button>
                          )}
                        </div>
                  <div className =  { card.lock ? "lockcard" : "unlockcard"}>
                 
                    <div className="flex">
                      <img
                        src={hdfcLogo}
                        height="60px" 
                        width="95px"
                        alt="hdfc"
                      ></img>
                    </div>
                    <div className="name">
                      <div style={{ fontFamily: "Montserrat" }}>
                        {card.name}
                      </div>
                      <div className="cvv">
                        <div>
                          <h5 className="white">
                            {" "}
                            {showCardHandler(output_number, lastDigit,card.show)}
                          </h5>
                          <div className="cvv">
                            <h6 className="white">
                              {" "}
                              Valid till : {card.valid_month}/{card.valid_year}{" "}
                            </h6>
                            <h6
                              className="white "
                              style={{ paddingLeft: "25px" }}
                            >
                              {" "}
                              CVV : {card.cvv}
                            </h6>
                          </div>
                        </div>
                        <div className="flex">
                          <img src={master} height="40px" alt="hdfc"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    <div className="card-modifier">
        <div className="card-box">

          <div className="item">
            <div className=" item-design">
              <div className="item-logo">
                {" "}
                <button className="nothing-btn" onClick={ ()=>lockHandler(cardType) }> <LockOutlined style={{ color: "white" }} /> </button>
              </div>
            </div>
            <div>
              {/* {result?.map((val) => {
                if (val.lock) {
                  return <h5> Card is Locked  </h5>;
                } else {
                  return <h5> unlock</h5>;
                }
              })}   */}
 <h5>Lock Card</h5>
</div> 
          </div>
          <div className="item" style={{paddingRight : "15px"}}>
            <div className=" item-design" style={{paddingLeft : "2px"}}>
              <div className="item-logo">
                {" "}
                <button className="nothing-btn" onClick={ ()=>lockHandler(cardType) }> <FileZipOutlined style={{ color: "white" }} /> </button>
              </div>
            </div>
            <div>
              <h5 style={{paddingLeft : "10px"}}> Archive</h5>
            </div>
          </div> 
          <div className="item" style={{paddingLeft : "22px"}}>
            <div className=" item-design">
              <div className="item-logo">
                {" "}
                <button className="nothing-btn" onClick={ ()=>lockHandler(cardType) }> <CheckOutlined style={{ color: "white" }} /> </button>
              </div>
            </div>
            <div>
              <h5> Set Default </h5>
            </div>
          </div>
          <div className="item"  style={{paddingLeft : "21px"}} >
            <div className=" item-design">
              <div className="item-logo" style={{paddingRight : "2px"}}>
                {" "}
                <button className="nothing-btn" onClick={ ()=>lockHandler(cardType) }> <GoogleOutlined style={{ color: "white" }} /> </button>
              </div>
            </div>
            <div>
              <h5> Google pay</h5>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default CardShow;
