import React from 'react'

function benificary_id(props) {
    if(props.Token !==""){
    return (
        <div>
             <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">benificary Id</span>
                    <input type="text" class="form-control" placeholder="Benificary id" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => props.refHandler(e)}></input>
                    <button onClick={props.certDownload}>Confirm</button>
            </div>
        </div>
    )
    }
    return null
}

export default benificary_id
