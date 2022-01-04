import React,{useState} from 'react';
import Navbar from '../components/navbar';
import Mbno from '../components/mbno';
import axios from 'axios';
import OtpConfirmation from '../components/otpConfirmation';
import Benificary from '../components/benificary_id';
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function DownloadCerti() {
    const [mobileNo, setMobileNo] = useState({mobileNo: ""});
    const [OtpTxnId, setOtpTxnId] = useState("");
    const [Otp, setOtp] = useState("");
    const [Token, setToken] = useState("");
    const [refId, setrefId] = useState("");
    // let number;

    var crypto = require("crypto");



    const mobileNoChangeHandler = (e) => {
        setMobileNo(String(e.target.value));
      };

    const otpHandler = (e) => {
      setOtp(String(e.target.value));
    };
    const refHandler = (e) => {
      setrefId(String(e.target.value));
    };
    
      let generateOTPReqBody = {
        mobile: mobileNo,
      };

      var otpSha256 = crypto.createHash("sha256").update(Otp).digest("hex");
      let tokenReqBody = {
        otp: otpSha256,
        txnId: OtpTxnId,
      };

      const config = {
        headers: { Authorization: `Bearer ${Token}` },
        responseType: "arraybuffer",
      };

      const certDownload = () => {
        axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=${refId}`,
        config,
        { responseType: "blob" }
      )
      .then((res) => {
        // setAlertCode("3");
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = `${refId}`;
        link.click();
      })
      .catch((err) => {
        alert(err);
        // setAlertCode("6");
      });
      }
      
      const OtpConfirmationHandler = ()=> {
        axios
            .post(
              `https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP`,
              tokenReqBody
            )
            .then((res) => {
              
              setToken(String(res.data.token));
            })
            .catch((err) => {
              alert(err);
            //   setAlertCode("4");
            });
      }
      const sendOtpHandler = () => {
        
        if (mobileNo.length === 10) {
          axios
            .post(
              `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
              generateOTPReqBody
            )
            .then((res) => {
                
              setOtpTxnId(String(res.data.txnId));
            })
            .catch((err) => {
              alert(err);
            //   setAlertCode("4");
            });
        } else {
        //   setAlertCode("7");
        }
      };  
    return (
      
      // <Router>
        <div>
        
            <Navbar/>
            <Mbno
                  mobileNoChangeHandler={mobileNoChangeHandler}
                  sendOtpHandler={sendOtpHandler}/>


            <OtpConfirmation
                  OtpTxnId={OtpTxnId}
                  otpHandler={otpHandler}
                  OtpConfirmationHandler={OtpConfirmationHandler}
              />

            <Benificary
                Token={Token}
                refHandler={refHandler}
                certDownload={certDownload}
            />
            
        </div>
    )
}

export default DownloadCerti
