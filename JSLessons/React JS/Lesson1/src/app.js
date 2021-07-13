const root = document.getElementById('root');

const itemInfo = {
    name: "Azerbaijan"
    
}


const temp = (
  <div>
       <h1 style={{'color':'red'}}>{itemInfo.name}</h1>
   <ul>
       <li></li>
   </ul>
  </div>
    
);


ReactDOM.render(temp,root);