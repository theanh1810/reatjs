const Hello = ({ name }) => {
    return <div>Hello {name === "Ba" ? "Ba dep trai" : "Ba xau trai"}
        {name === "Ba" && <button>Like</button>}</div>

}

Hello.propTypes = {
    name : PropTypes.string.isRequired,
}

Hello.defaultProps = {
    name : ""
}

// conditional Rendering
// ? thuong su dung de tra ve 1 trong 2 gia tri khac nhau, thuong su dung voi thuoc tinh, hoac la 2 doan jsx khac nhau
//  && thuong su dung de hien yhi 1 doan JSX tuy thuoc vao bien
// if else



function User({ user }) {
  if (user) {
    return (
      <div>
        <Hello name={user.name} />
        <button>Logout</button>
        {user.isAdmin && <button>Admin page</button>}
      </div>
    );
  } else {
    return (
      <div>
        <button>Đăng nhập</button>
        <button>Đăng ký</button>
      </div>
    );
  }
}

User.propTypes = {
    user: PropTypes.exact({
        name: PropTypes.string.isRequired,
        isAdmin: PropTypes.bool,
    })
}

User.defaultProps = {
    name: "User",
    isAdmin : true
}