
const root = document.getElementById('root');
import imgPhoto from '../img/img.jpg';


var mytime = ()=>{

    var infoTime = (
        <div>
            <img src={imgPhoto} />
            <h2>Time is:
                {new Date().toLocaleTimeString()}
            </h2>
        </div>
    )
ReactDOM.render(infoTime,root);
    
}

setInterval(mytime, 1000)


