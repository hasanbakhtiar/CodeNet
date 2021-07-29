import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';


const Nav =()=>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
              

              
            </ul>
           
          </div>
        </div>
      </nav>
            
        </div>
    )
}


const Home = () =>{
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

const About = () =>{
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}

const Blog = () =>{
    return(
        <div>
            <h1>Blog</h1>
        </div>
    )
}

const Contact = () =>{
    return(
        <div>
            <h1>Contact</h1>
        </div>
    )
}

const App = () => {
    return (
       <BrowserRouter>
           <Nav />

           <Route exact path="/" component={Home}></Route>
           <Route path="/about" component={About}></Route>
           <Route path="/blog" component={Blog}></Route>
           <Route path="/contact" component={Contact}></Route>

       </BrowserRouter>
    )
}

export default App
