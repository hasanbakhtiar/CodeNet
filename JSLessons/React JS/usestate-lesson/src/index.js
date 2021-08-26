import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';



const App =(props)=>{
  
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  // componentDidMount
  // useEffect(()=>{
  //   console.log('text');
  // },[])

  // componentDidUpdate
  // useEffect(()=>{
  //   console.log('text');
  // })

  useEffect(()=>{
    console.log("useEffect");
  },[text])

  return(

    <div>
      <p>U clicked {count} button</p>
      <p>U entered text: {text}</p>
      <button onClick={()=> setCount(count+1)}>+1</button>
      <button onClick={()=> setCount(count-1)}>-1</button>
      <button onClick={()=> setCount(props.count)}>reset</button>
      <button onClick={()=> setText(text + " EveryOne")}>Add Text</button>
    </div>
  );
}

App.defaultProps = {
  count:0,
  text: "Hello"
}


ReactDOM.render(
 <App />,
  document.getElementById('root')
);


