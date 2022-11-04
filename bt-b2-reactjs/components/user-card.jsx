const User = ({ user }) => {
    return (
        <div className="User">
            <img src={user.avatar} alt={user.fullname} />
            <h3 className="user-name">{user.fullname}</h3>
            <button>View Profile</button>
        </div>
    )
};

const UserType = PropTypes.exact({
    id: PropTypes.string,
    fullname: PropTypes.string,
    job: PropTypes.string,
    avatar: PropTypes.string,
})


User.propTypes = {
    user: UserType,
}