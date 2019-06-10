import React, { Component } from 'react';




class dropdown extends Component {
    state = { 
        isOpen: false
     }

     toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

     render() { 
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        console.log(menuClass);
      return(   
        <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Dropdown
        </button>
        <div className={menuClass} id="dropdownmenu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item" >
            Item 1
          </p>
          <a className="dropdown-item" href="#nogo">
            Item 2
          </a>
          <a className="dropdown-item" href="#nogo">
            Item 3
          </a>
        </div>
        </div>
    
      );
    }
}

 
export default dropdown;
