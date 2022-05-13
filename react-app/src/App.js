import React, { useEffect, useState } from 'react';
import './App.css';
import FilterProduct from './Component/Demo/FilterProduct';
import { Counter, TodoForm, TodoList } from './Component/Hooks/index';
import Pagination from './Component/Hooks/Pagination/Pagination';
import Post from './Component/Hooks/Posts/Post';
import queryString from 'query-string'
import Search from './Component/Hooks/Search/Search';

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
  // const [arrayList, setArrayList] = useState([
  //   { id: 1, title: "apple" },
  //   { id: 2, title: "orange" },
  //   { id: 3, title: "banana" },
  // ]);
  // function handleTodoClick(todo) {
  //   const index = arrayList.findIndex(x => x.id === todo.id);
  //   if (index < 0) return;
  //   const newArrayList = [...arrayList];
  //   newArrayList.splice(index, 1);
  //   setArrayList(newArrayList);
  // }
  // function handleTodoForm(formValue) {
  //   const newField = {
  //     id: arrayList.length + 1,
  //     ...formValue
  //   }
  //   const newList = [...arrayList];
  //   newList.push(newField);
  //   setArrayList(newList);
  // }
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });
  
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10
  });
  useEffect(() =>{
      const paramString = queryString.stringify(filter);
      async function fetchPostList(){
         const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
         const response = await fetch(requestUrl);
         const responseJSON = await response.json();        
         const {data, pagination} = responseJSON;
         console.log(responseJSON);
         setPostList(data);
         setPagination(pagination);
      };
      fetchPostList();

  }, [filter]);
  function handleTodoPageChange(newPage){
     setFilter({
       ...filter,
       _page: newPage
     })
  }
  function handleFilterChange(newFilters){
      console.log(newFilters);
  }
  return (
    <>
      {/* <FilterProduct products={PRODUCTS} />
      <Counter />
      <TodoForm onTodoSubmit={handleTodoForm} />
      <TodoList todos={arrayList} onTodoClick={handleTodoClick} />
       */}
      <Search onSubmit={handleFilterChange}/>
      <Post posts={postList} />
      <Pagination 
        pagination={pagination}
        onPageChange={handleTodoPageChange}
      />
      
    </>

  )
}

export default App;
