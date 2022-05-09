import React, { Component } from 'react'
import {SearchBar, ProductTable} from './index';

 class FilterProduct extends Component {
     constructor(props){
         super(props);
         this.state={isStock: false}
         this.handleStockChange = this.handleStockChange.bind(this);
     }
    handleStockChange(isStock){
        this.setState({
            isStock: isStock
        })
    }
  render() {
      console.log(this.state.isStock);
    return (      
      <div>
        <SearchBar 
            isStock={this.state.isStock}
            onChange={this.handleStockChange}/>          
        <ProductTable
            isStock={this.state.isStock}
            products ={this.props.products}
        />
      </div>
    )     
  } 
}
export default FilterProduct