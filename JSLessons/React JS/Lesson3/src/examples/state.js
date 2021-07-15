const root = document.getElementById('root');

// class infoClass {

//     sayHi(){
//         return "Hello React";
//     }
// }

// class infoBase extends infoClass{
//     sayBye(){
//         return "Bye React";
//     }
// }

// var infoData = new infoClass();
// console.log(infoData.sayHi());
// console.log(infoData.sayBye());


class BookItem extends React.Component{

     render(){
        return(
           <li>{this.props.item}</li>
        );
    }
}

class BookList extends React.Component{
    render(){
        const bookdata = {
            name:"Cinayet ve Ceza",
            author:"Dostayevski"
        }
        return(
            <ul>
<BookItem item={bookdata.name} />
<BookItem item={bookdata.author} />
            </ul>
        );
    }
}


class Book extends React.Component{
        render(){
            return(
                    <div>
                        <h1>hi</h1>
                        <BookList />
                    </div>
            );
        }
}




ReactDOM.render(<Book />,root);