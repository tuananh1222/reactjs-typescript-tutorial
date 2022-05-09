import React  from 'react';
import Welcome from '../Welcome';
import Comment from '../Component/Comment';
import Toggle from '../Component/Toggle';
import NumberList from '../Component/NumberList';
import Form from '../Component/Form';
import Caculator from '../Component/Caculator';

const user = {
    firstname: "tuan anh",
    lastname: "le"
} 
const comment ={
    date: new Date(),
    text: "My cat",
    author:{
        name: "kitty",
        link: "http://placekitten.com/g/64/64"
    }
   
}
const array =[1,2,3,4]
function formatName(user){
    if(user)
        return user.firstname + " "+ user.lastname;    
}
function FormatDate(props){
    return  <h3>It is {props.date.toLocaleTimeString()} </h3> 
}
class Hi extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState((state, props) => ({
             date: state.date + props.name
        }))       

    }
   
    render()
    {
        return (       
            <div>
                <h2>Hello {formatName(user)}</h2>  
                <FormatDate date={new Date()} />
                <Welcome name="tuan "/> 
                <Comment 
                    user={comment.author} 
                    date={comment.date}
                    text= {comment.text}
                />   
                <Toggle />    
                <NumberList numbers={array} />
                <Form />              
                <Caculator />                 
            </div>                 
        );
    }
} 

export default Hi;