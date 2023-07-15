

const Header = (heading) => {
  return (
    <nav className="navbar bg-Primary border-bottom"
    data-bs-theme="dark">
      <span
      className="navbar-brand text-center container-fluid justify-content-center py-2"
      >
        <h1>{heading.title}</h1>
      </span>
    </nav>
  )
}

export default Header