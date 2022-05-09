import '../App.css';
function formatDate(date){
    return date.toLocaleDateString();
}
function Avatar(props){
    return <img src={props.users.link} 
                        alt={props.users.name}/>
}

function Comment(props){
    return(
        <div className="profile">
            <div className="user">
                <Avatar users={props.user}/>
                <div className='user-name'>
                    <p>{props.user.name}</p>
                </div>
                <div className='comment-text'>
                    {props.text}
                </div>
                <div className='comment-date'>
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    );
}
export default Comment;