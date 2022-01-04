import React from 'react'

function OtpConfirmation(props) {
    if(props.OtpTxnId!==""){
        return (<div>
            <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Enter Otp</span>
                    <input type="text" class="form-control" placeholder="OTP" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => props.otpHandler(e)}></input>
                    <button onClick={props.OtpConfirmationHandler}>Confirm</button>
            </div>
        </div>);
    }
    return null
}

export default OtpConfirmation
