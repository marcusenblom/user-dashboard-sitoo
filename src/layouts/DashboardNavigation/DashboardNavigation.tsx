import { Outlet } from "react-router-dom";
import styles from "./DashboardNavigation.module.scss";
import routes from "../../routes/routes";
import NavigationBar from "./NavigationBar/NavigationBar";
import TopNavigation from "./TopNavigation/TopNavigation";

export default function DashboardNavigation() {


	return (
		<div className={styles.wrapper}>
			
			<div className={styles.topNav}>
				<TopNavigation />
			</div>
			
			<section className={styles.nav}>
				<NavigationBar />
			</section>

			<main className={styles.content}>
				<Outlet />
			</main>

		</div>
	);
}