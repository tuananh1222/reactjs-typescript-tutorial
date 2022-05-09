import React, { Component } from 'react'
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

 class ProductTable extends Component {
  render() {
      const rows = [];
      let lastCategory = null;
      const isStock = this.props.isStock;
      this.props.products.forEach((product) => {
          if(isStock && !product.stocked){
              return;
          }
          if(product.category !== lastCategory){
              rows.push(
                  <ProductCategory 
                        category={product.category}
                        key={product.category}
                    />
              )
          }
          rows.push(
              <ProductRow
                    product = {product}
                    key={product.name}
              />
          )
          lastCategory = product.category;
      });        
      
    return (
        
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    )
  }
}
export default ProductTable

