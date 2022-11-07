const UserList = ({ users }) => {
    const list = users.map((user) => <User user={user} key={ user.id}/>)
    
    return <div className="user-list">{list}</div>
};

UserList.propTypes = {
    users: PropTypes.arrayOf(UserType)
}