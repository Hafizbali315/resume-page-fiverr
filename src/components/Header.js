import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pathname === pn) return 'active'
	}

	const [showMobileNavbar, setShowMobileNavbar] = useState(false)
	return (
		<>
			{/* Large Screen Navbar */}
			<div className="header d-lg-flex d-none">
				<div className="header_logo">
					<Link to="/" className="link">
						<h1>
							Ramsés Cabello, MSc <br />
							<span>interaction Designer</span>
						</h1>
					</Link>
				</div>

				<div className="header_links">
					<div className="link_container">
						<Link to="/work" className={`link navHover ${isActive('/work')}`}>
							Work
						</Link>
					</div>
					<div className="link_container">
						<Link to="/notes" className={`link navHover ${isActive('/notes')}`}>
							Notes
						</Link>
					</div>
					<div className="link_container">
						<Link to="/bio" className={`link navHover ${isActive('/bio')}`}>
							Bio
						</Link>
					</div>

					<div className="link_container">
						<Link to="/play" className={`link navHover ${isActive('/play')}`}>
							play
						</Link>
					</div>
					<div className="link_container">
						<Link to="/contact" className={`link navHover ${isActive('/contacts')}`}>
							contact
						</Link>
					</div>

					<div className="link_container">
						<Link to="/jp" className={`link navHover ${isActive('/jp')}`}>
							日本語
						</Link>
					</div>
				</div>
			</div>

			{/* Small Screen Navbar */}
			<div className="small_screen_header d-lg-none d-flex">
				<div className="header_logo">
					<Link to="/" className="link">
						<h1>
							Ramsés Cabello, MSc <br />
							<span>interaction Designer</span>
						</h1>
					</Link>
				</div>
				<div className="hamburger_menu">
					<div className="hamburger_icon" onClick={() => setShowMobileNavbar(true)}>
						<div></div>
						<div></div>
						<div></div>
					</div>

					{showMobileNavbar && (
						<div className="overlay_navbar text-center">
							<div className="links">
								<h2>
									<Link to="/Work" className="link" onClick={() => setShowMobileNavbar(false)}>
										Work
									</Link>
								</h2>
								<h2>
									<Link to="/notes" className="link" onClick={() => setShowMobileNavbar(false)}>
										notes
									</Link>
								</h2>
								<h2>
									<Link to="/bio" className="link" onClick={() => setShowMobileNavbar(false)}>
										bio
									</Link>
								</h2>
								<h2>
									<Link to="/play" className="link" onClick={() => setShowMobileNavbar(false)}>
										play
									</Link>
								</h2>
								<h2>
									<Link to="/contact" className="link" onClick={() => setShowMobileNavbar(false)}>
										contact
									</Link>
								</h2>
								<h2>
									<Link to="/jp" className="link" onClick={() => setShowMobileNavbar(false)}>
										日本語
									</Link>
								</h2>
							</div>
							<div className="hamburger_close_icon" onClick={() => setShowMobileNavbar(false)}>
								X
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Header
