import { NavLink } from "react-router-dom"

import classes from './MainHeader.module.css'

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink exact to='/welcome' activeClassName={classes.active}>Welcome</NavLink>
					</li>
					<li>
						<NavLink exact to='/products' activeClassName={classes.active}>Products</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader

// activeClassName, there is error!   (doesn't work like it should)