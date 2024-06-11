import {} from "./navbar.scss"
const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Real Estate</span>
        </a>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Agents</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/">Sign in</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
