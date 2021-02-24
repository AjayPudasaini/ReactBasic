import React,{ Component } from "react";
import {Route} from 'react-router-dom';
import Register from './Register';
import Home from './Home'

class Body extends Component
{
    render()
    {
        return(
            <div className="container m-5">
                <div className="row">
                    <Route path='/' exact component={Home}/>
                    <Route path='/register' exact component={Register}/>
                </div>
            </div>
            
        )
    }
}

export default Body