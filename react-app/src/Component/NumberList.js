function NumberList(props){
    const numbers = props.numbers;
    const listnumber = numbers.map((number)=>
        <li key={number.toString()}>{number}</li>
    );
    return(
        <ul>{listnumber}</ul>
    )
}
export default NumberList;