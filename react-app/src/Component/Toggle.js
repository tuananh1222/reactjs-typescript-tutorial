import React from "react";
function Login(props){
    if(!props.text){
        return null;
    }
    return(
        <div>
            Wellcome!!!
        </div>
    )
}
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLogin: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            isLogin: !prevState.isLogin
        }));
    } 
    render(){
        return(
            <div>
                <Login text={this.state.isLogin}/>
                <button onClick={this.handleClick}>
                    {this.state.isLogin ? "on" : "off"}
                </button>
            </div>
            
        )
    }
}
export default Toggle;