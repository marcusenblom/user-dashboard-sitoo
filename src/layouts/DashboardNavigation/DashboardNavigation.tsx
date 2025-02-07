import { Outlet, useLocation } from "react-router-dom";
import styles from "./DashboardNavigation.module.scss";
import NavigationBar from "./NavigationBar/NavigationBar";
import TopNavigation from "./TopNavigation/TopNavigation";
import { useEffect, useState } from "react";
import cn from 'classnames';

export default function DashboardNavigation() {
	const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
	const location = useLocation();

	// Collapse mobile menu when route changes
	useEffect(() => {
		setMenuExpanded(false);
	}, [location.pathname]);

	return (
		<div className={styles.wrapper} id="topOfPage">
			
			<div className={styles.topNav}>
				<TopNavigation toggleExpanded={()=>{setMenuExpanded(!menuExpanded)}}/>
			</div>
			
			<section className={cn(styles.nav, menuExpanded && styles.show)}>
				<NavigationBar setMenuExpanded={setMenuExpanded}/>
			</section>

			<main className={styles.content}>
				<Outlet />
			</main>

		</div>
	);
}