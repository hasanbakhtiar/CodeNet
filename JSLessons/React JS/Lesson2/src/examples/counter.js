const root = document.getElementById('root');

let number = 0;

const addOne = ()=>{
    number++;
renderApp();
    

}

const clearOne = ()=>{
    number--;
renderApp();

    
}


var renderApp = ()=>{
    var temp = 
<div>
    <h1>Number: {number}</h1>
    <button onClick = {clearOne}>-1</button>
    <button onClick={addOne}>+1</button>
</div>
ReactDOM.render(temp,root);

}

renderApp();
 
