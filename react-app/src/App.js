import React, {useState} from 'react';
import './App.css';
import FilterProduct from './Component/Demo/FilterProduct';
import { Counter, TodoList } from './Component/Hooks/index';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];


// function removeItem(index) {
//   const newArrayList = [...arrayList];
//   newArrayList.slice(index, 1);
//   setArrayList(newArrayList)
// }
function App() {
    const [arrayList, setArrayList] = useState([
      { id: 1, title: "apple" },
      { id: 2, title: "orange" },
      { id: 3, title: "banana" },
    ]);
    function handleTodoClick(todo){
        const index = arrayList.findIndex(x => x.id === todo.id);
        if(index < 0) return;

        const newArrayList = [... arrayList];
        newArrayList.splice(index , 1);
        setArrayList(newArrayList);

    }
  return (
    <>
      <FilterProduct products={PRODUCTS} />
      <Counter />
      <TodoList todos ={arrayList} onTodoClick = {handleTodoClick}/>
    </>

  )
}

export default App;
