// class stateless function component
// React v16+ : function component + hook => stateful function component

import React, { useState } from 'react';

const Hook  = (props) =>{

    const [count,setData] = useState(props.count);
    const setCount = ()=>{
        setData(count+1);
    }

    return(
        <div>
            <p>{count}
                clicked</p>
            <button onClick={setCount}>+1</button>
            <button onClick={()=>setData(count-1)}>-1</button>
            <button onClick={()=>setData(0)}>Reset</button>
        </div>
    )
}

Hook.defaultProps = {
    count:0
}

export default Hook
