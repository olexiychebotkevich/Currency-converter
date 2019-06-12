import React, { Component } from 'react';
import axios from 'axios';





class currconv extends Component {
    state = { 
        loading:true,
        isOpen: false,
        currency:[],
        changevalue:100,
        changecurrency:"USD",
        currencytoconvert:"USD",
        result:100
     }

     constructor(props) {
        super(props);
    
       
    
        this.onChangeCurrencyInput = this.onChangeCurrencyInput.bind(this);
        this.onChangeSelectCurrency = this.onChangeSelectCurrency.bind(this);
        this.CurrencyNameToConvert = this.CurrencyNameToConvert.bind(this);
        this.Convert = this.Convert.bind(this);

        
    }
   

     toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

     componentDidMount(){
         const url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
        axios.get(url).then(
            (res)=>{
                this.setState({currency: res.data});
               
            },
            
            (err)=>{
                console.log('Error upload data------',err.response.data);
            }
        );

         
     }
    


     onChangeCurrencyInput(e) {
        let value=e.target.value;
        this.setState({
          changevalue: value,
        
        });
        
        }



        onChangeSelectCurrency(e) {
            let {name, value} = e.target;
            this.setState({
              changecurrency: value
            
            });
            
            }


            CurrencyNameToConvert(e) {
                let {name, value} = e.target;
                this.setState({
                    currencytoconvert: value
                
                });
                
                }




            Convert(){
             let currencyarr=this.state.currency.map((currency, key) =>(currency)); 
             let convertvalue=this.state.changevalue;
             let changecurrency=this.state.changecurrency;
             let currencytoconvert=this.state.currencytoconvert;
             let convertedvalue=(convertvalue*currencyarr.find(x => x.cc === changecurrency).rate)/currencyarr.find(x => x.cc === currencytoconvert).rate;
             this.setState({result: parseInt( convertedvalue)});
            
            }
    render() { 
    

      return(
            <div className="container">

                <div className="row justify-content-center">
                    <div>
                        <h6>Change:</h6>
                        <input type="number" min="1" value={this.state.changevalue} onChange={this.onChangeCurrencyInput} ></input>

                    </div>


                    <div style={{ marginTop: "2rem", marginLeft: "2rem" }} className="drop-down">
                        <select onChange={this.onChangeSelectCurrency}>
                            {this.state.currency.map((currency, key) => <option key={key} >{currency.cc}</option>)}
                        </select>
                    </div>

                  
                   
                  

                    <div style={{ marginLeft: "2rem" }}>
                        <h6>Result:</h6>
                        <input type="text" readOnly value={this.state.result}></input>
                    </div>

                    <div className="drop-down">
                        <select style={{ marginTop: "2rem", marginLeft: "2rem" }} onChange={this.CurrencyNameToConvert}>
                            {this.state.currency.map((currency, key) => <option key={key} >{currency.cc}</option>)}
                        </select>
                    </div>


                </div>


                <div style={{marginTop:"4rem"}} className="row justify-content-center">
                    <button onClick={this.Convert} className="btn btn-success">Get result</button>
                </div>

            </div>


        );

    }
}

export default currconv;
