import React, { Component } from 'react';
import axios from 'axios';
import Dropdown from './dropdown';




class currconv extends Component {
    state = { 
        loading:true,
        isOpen: false
     }

     toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

     componentDidMount(){
         const url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
        axios.get(url).then(
            (res)=>{
                console.log('----- response privat bank -----',res.data);
            },
            (err)=>{
                console.log('Error upload data------',err.response.data);
            }
        )

         
     }
    render() { 
    
        for(var i = 4; i <= 10; i++) {
           
         
       }
      return(
          <div className="container">
              <div className='row'>
              <h6>change</h6>
              <input type="number"></input>
            
              <Dropdown/>
              <select >
               Helo
              </select>
             
              </div>

          </div>
      );

    }
}
 
export default currconv;
