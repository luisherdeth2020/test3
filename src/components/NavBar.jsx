const Navbar = ({ title }) => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand text-uppercase" href="/">
					{title}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
