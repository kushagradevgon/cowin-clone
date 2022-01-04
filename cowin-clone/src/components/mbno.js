import React from 'react'
function Mbno(props) {
    
    return (
        <div>
            <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Mobile no.</span>
                    <input type="text" class="form-control" placeholder="Phone no." aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => props.mobileNoChangeHandler(e)}></input>
                
                    <button onClick={props.sendOtpHandler}>Generate otp</button>                    
            </div>
        </div>
    )
}

export default Mbno
