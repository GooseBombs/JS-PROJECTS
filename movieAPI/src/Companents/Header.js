import react from "react";



const MainHeader = () => {

    return(
        <header className="bg-dark">
        <div className="container-lg">
        <nav className="nav align-items-center justify-content-between">
            <a className="navbar-brand text-light fs-2" href="http://localhost.com">BEST MOVIES</a>
            <form>
            <input type="text" className="form-control " placeholder="Search a Movie..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </form>
            <ul className="navbar-nav ">
                <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="http://localhost:3000">Home</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="http://localhost:3000">Best Movies</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="http://localhost:3000">New Movies</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="http://localhost:3000">Contact</a>
                </li>
            </ul>
            </nav>
        </div>
        </header>

    )

}
export default MainHeader