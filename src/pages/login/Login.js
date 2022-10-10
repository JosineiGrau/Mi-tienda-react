import './Login.css';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import {
	FaAngleLeft,
	FaFacebook,
	FaGoogle,
	FaTwitter,
	FaUser,
} from 'react-icons/fa';
const Login = () => {
	const [formUser, setFormUser] = useState({
		email: '',
		password: '',
	});

	const {
		login,
		loginWithGoogle,
		loginWithFacebook,
		loginWithTwitter,
		loginAnónimo,
	} = useAuth();
	const navigate = useNavigate();

	const [error, setError] = useState();

	const handleChange = ({ target: { name, value } }) => {
		setFormUser({ ...formUser, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await login(formUser.email, formUser.password);
			navigate('/');
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				setError('Cuenta no encontrada');
			}
			if (error.code === 'auth/wrong-password') {
				setError('Contraseña incorrecta');
			}
			if (error.code === 'auth/invalid-email') {
				setError('Correo electrónico no válido');
			}
			if (error.code === 'auth/too-many-requests') {
				setError('Demasiados intentos');
			}
			if (error.code === 'auth/internal-error') {
				setError('Campo vació');
			}
		}
	};

	const handleGoogleSigning = async () => {
		try {
			await loginWithGoogle();
			setError('');
			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleFacebookSigning = async () => {
		try {
			await loginWithFacebook();
			setError('');
			navigate('/');
		} catch (error) {
			console.log(error.message);
			if (error.code === 'auth/account-exists-with-different-credential') {
				setError('Creo que ya te habías registrado con esta cuenta');
			}
		}
	};
	const handleTwitterSigning = async () => {
		try {
			await loginWithTwitter();
			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	};
	const handleAnónimoSigning = async () => {
		try {
			await loginAnónimo();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className="iniciar-sesion">
			<form className="form-login" onSubmit={handleSubmit}>
				<Link className="volver-inicio" to="/">
					<FaAngleLeft />
					Volver a Inicio
				</Link>
				<div className="modal-iniciar-sesion">
					<h1>INICIAR SESIÓN</h1>
					<div className="btns-terceros">
						<div className="btns-login">
							<div
								onClick={handleGoogleSigning}
								className="btn-iniciar-sesion-tercero"
							>
								<FaGoogle size={'20px'} />
							</div>
							<div
								onClick={handleFacebookSigning}
								className="btn-iniciar-sesion-tercero"
							>
								<FaFacebook size={'20px'} />
							</div>
							<div
								onClick={handleTwitterSigning}
								className="btn-iniciar-sesion-tercero"
							>
								<FaTwitter size={'20px'} />
							</div>
							<div
								onClick={handleAnónimoSigning}
								className="btn-iniciar-sesion-tercero"
							>
								<FaUser size={'20px'} />
							</div>
						</div>
					</div>
					{error === 'Cuenta no encontrada' && (
						<span className="error">{error}</span>
					)}
					{error === 'Demasiados intentos' && (
						<span className="error">{error}</span>
					)}
					{error === 'Creo que ya te habías registrado con esta cuenta' && (
						<span className="error">{error}</span>
					)}
					<div className="email-password">
						<div className="email">
							<input
								type="email"
								name="email"
								maxLength="50"
								onChange={handleChange}
							/>
							<label htmlFor="email">Correo electronico</label>
							{error === 'Correo electrónico no válido' && (
								<span className="error">{error}</span>
							)}
						</div>
						<div className="password">
							<input type="password" name="password" onChange={handleChange} />
							<label htmlFor="password">Contraseña</label>
							<div className="error-forgot-password">
								{error === 'Contraseña incorrecta' && (
									<span className="error">{error}</span>
								)}
								{error === 'Campo vacio' && (
									<span className="error">{error}</span>
								)}
								<Link to="/reset-password">Has olvidado tu contraseña?</Link>
							</div>
						</div>
					</div>
					<button type="submit" className="btn-iniciar-sesion">
						Iniciar Sesión<i className="fa-solid fa-arrow-right-long"></i>
					</button>
					<div className="btn-register">
						<Link to="/register">
							Registrarse<i className="fa-solid fa-arrow-right-long"></i>
						</Link>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Login;
