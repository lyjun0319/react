import React from "react";

function Wrapper({ children }){
    const style = {
        padding: "10px",
        border: "2px solid #000"
    }
return <div style={style}>{children}</div>
}

export default Wrapper;