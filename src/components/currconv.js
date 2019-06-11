import React, { Component } from 'react';
import axios from 'axios';





class currconv extends Component {
    state = { 
        loading:true,
        isOpen: false,
        currency:[],
        changevalue:100,
        changecurrency:"USD",
        currencytoconvert:""
     }

     constructor(props) {
        super(props);
    
       
    
        this.onChangeCurrencyInput = this.onChangeCurrencyInput.bind(this);
        this.onChangeSelectCurrency = this.onChangeSelectCurrency.bind(this);
        this.Convert = this.Convert.bind(this);

        
    }
   

     toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

     componentDidMount(){
         const url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
        axios.get(url).then(
            (res)=>{
                this.setState({currency:res.data});
                console.log("currency:",this.currency);
            },
            (err)=>{
                console.log('Error upload data------',err.response.data);
            }
        )

         
     }


     onChangeCurrencyInput(e) {
        let value=e.target.value;
        console.log(value);
        this.setState({
          changevalue: value,
        
        });
        
        }



        onChangeSelectCurrency(e) {
            let {name, value} = e.target;
            console.log(value);
            this.setState({
              changecurrency: value
            
            });
            
            }


            Convert(){
                console.log(this.currency);
             let convertvalue=this.changevalue;
             let changecurrency=this.state.changecurrency;
             let currencytoconvert=this.state.currencytoconvert;
             let convertedvalue=(convertvalue*this.currency.filter(x => x.cc === this.changecurrency).rate)/this.currency.filter(x => x.cc === this.currencytoconvert)[0].rate;
             console.log(convertedvalue);
            }
    render() { 
    
     console.log(this.currency);
      return(
              <div>
              <h6>Change</h6>
              <input type="number" onChange={this.onChangeCurrencyInput} value="100"></input>
                  <div className="drop-down">
                      <select onChange={this.onChangeSelectCurrency}>
                          {this.state.currency.map((currency, key) => <option key={key} >{currency.cc}</option>)}
                      </select>
                  </div>
              <h6>Get</h6>
              <input type="text" readOnly value="1"></input>    
              
              <div className="drop-down">
                      <select>
                          {this.state.currency.map((currency, key) => <option key={key} >{currency.cc}</option>)}
                      </select>
             </div>
             
             <button onClick={this.Convert}>Get </button>
             </div>


          
      );

    }
}
 
export default currconv;
