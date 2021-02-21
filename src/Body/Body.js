import React,{ Component } from "react";
import {Route} from 'react-router-dom';
import Register from './Register';

class Body extends Component
{
    render()
    {
        return(
            <div className="container m-5">
                <div className="row">
                    <Route path='/register' component={Register}/>
                </div>
            </div>
            
        )
    }
}

export default Body