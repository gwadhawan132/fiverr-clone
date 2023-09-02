import React from 'react'
import './Messages.scss'
import { Link } from 'react-router-dom';


export default function Messages(){
   
    const mssg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, totam quidem. Officiis veniam, natus labore voluptatem porro libero at consequuntur qui debitis necessitatibus voluptatibus quibusdam atque, dignissimos explicabo suscipit itaque.";

    return(
        
        <div className='messages'>
            <div className="container">
                <div className="title">
                <h1>Orders</h1>
             
                
                </div>
                <table border="1" frame="void"  rules="columns">
                <tr >
                    <th>Buyer</th>
                    <th>Last message</th>
                    <th>Date</th>
                    <th>Action </th>
                    </tr>
                    <tr className='active'>
                        <td>John Doe  </td>
                        <td>
                        <Link to='/message/123' className='link'> 
                        {mssg.substring(0,100)}
                        </Link>                       
                        </td>                    
                        <td>1 day ago</td>
                        <td>
                         <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr className='active'>
                        <td>John Doe  </td>
                        <td>
                        <Link to='/message/123' className='link'>
                        {mssg.substring(0,100)}
                        </Link>
                        </td>                    
                        <td>3 days ago</td>
                        <td>
                         <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr className='active'>
                        <td>John Doe  </td>
                        
                        <td>
                        <Link to='/message/123' className='link'>
                        {mssg.substring(0,100)}
                        </Link>
                        </td>                    
                        <td>1 week ago</td>
                        <td>
                         <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr className='active'>
                        <td>John Doe  </td>
                        <td>
                        <Link to='/message/123' className='link'>
                        {mssg.substring(0,100)}
                        </Link>
                        </td>                    
                        <td>1 hour ago</td>
                        <td>
                         <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr className='active'>
                        <td>John Doe  </td>
                        <td>
                        <Link to='/message/123' className='link'>
                        {mssg.substring(0,100)}
                        </Link>
                        </td>                    
                        <td>2 days ago</td>
                        <td>
                         <button>Mark as Read</button>
                        </td>
                    </tr>
                   
                </table>
            </div>
        </div>
    )
}