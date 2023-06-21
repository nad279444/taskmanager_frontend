
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                 Tasks
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="">Task Manager</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;