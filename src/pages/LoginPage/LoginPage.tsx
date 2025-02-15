import { useState } from 'react';
import CustomTextInput from '../../components/Utils/Inputs/CustomTextInput/CustomTextInput';
import styles from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

// Page to visualize a log in flow with routing
// Hard-coded account information

export default function LoginPage(){
	const navigate = useNavigate();
	const [formData] = useState({
		username: "MARCUS_ENBLOM",
		password: "PASSWORD"
	});

	function login(event: React.FormEvent){
		event.preventDefault();
		navigate(routes.users.path);
	}

	return (
		<section className={styles.wrapper}>
			
			<div className={styles.loginWrapper}>

					<div className={styles.topBar}>
						<div className={styles.logoContainer}>
							<img src="/img/logos/logo_transparent.png" alt="" />
						</div>
					</div>

					<form className={styles.form} onSubmit={login}>

						<div className={styles.inputWrapper}>
							<CustomTextInput
								inputLabel="Username"
								type="text"
								value={formData?.username}
								placeholder="User name"
								name="username"
								handleChange={()=>{}}
								disabled={true}
							/>
						</div>

						<div className={styles.inputWrapper}>
							<CustomTextInput
								inputLabel="Password"
								type="password"
								value={formData?.password}
								placeholder="Password"
								name="password"
								handleChange={()=>{}}
								disabled={true}
							/>
						</div>
						
						<div className={styles.buttonContainer}>
							<button className={styles.mainButton} type="submit">
								Click me to log in
							</button>
						</div>
					</form>
				</div>

		</section>
	);
	
};