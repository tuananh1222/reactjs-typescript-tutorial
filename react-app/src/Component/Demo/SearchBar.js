import React, { Component } from 'react'
 class SearchBar extends Component {
     constructor(props) {
         super(props);
         this.handleStockChange = this.handleStockChange.bind(this);
     }
     
    handleStockChange(e){
        this.props.onChange(e.target.checked);
    }
  render() {
      const isStock = this.props.isStock;
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <p>
            <input type="checkbox" 
                value={isStock}
                onChange={this.handleStockChange}
            />
            {' '}
            Only show products in stock
            </p>
      </form>
    );
  }
}
export default SearchBar