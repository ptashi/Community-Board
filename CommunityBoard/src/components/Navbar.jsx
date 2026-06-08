const Navbar = ({setFilter}) => {

    return (
        <nav className="navbar">
            <div className="dropdown">
                <button>CATEGORY</button>
                <div className="dropdownContent">
                    <button onClick={() => setFilter("All")}>
                        All
                    </button>

                    <button onClick={() => setFilter("Dessert")}>
                        Dessert
                    </button>

                    <button onClick={() => setFilter("Savory")}>
                        Savory
                    </button>
                </div>
            </div>

            <div className="dropdown">
                <button>DIFFICULTY</button>
                <div className="dropdownContent">
                    <button onClick={() => setFilter("All")}>
                        All
                    </button>

                    <button onClick={() => setFilter("Easy")}>
                        Easy
                    </button>

                    <button onClick={() => setFilter("Medium")}>
                        Medium
                    </button>

                    <button onClick={() => setFilter("Hard")}>
                        Hard
                    </button>
                </div>
            </div>

            <div className="dropdown">
                <button>PREP TIME</button>
                <div className="dropdownContent">
                    <button onClick={() => setFilter("All")}>
                        All
                    </button>
                    <button onClick={() => setFilter("15min")}>
                        Under 15 min
                    </button>

                    <button onClick={() => setFilter("30min")}>
                        15-30 min
                    </button>

                    <button onClick={() => setFilter("longmin")}>
                        30+ min
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;