import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail,
	FacebookAuthProvider,
	signInAnonymously,
	RecaptchaVerifier,
	TwitterAuthProvider,
	// signInWithPhoneNumber,
} from 'firebase/auth';

import { auth } from '../services/firebase';

const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('No hay provider');
	return context;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const signup = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const login = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	const logout = () => signOut(auth);

	const loginWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const resetPassword = (email) => sendPasswordResetEmail(auth, email);

	const loginWithFacebook = () => {
		const facebookProvider = new FacebookAuthProvider();
		return signInWithPopup(auth, facebookProvider);
	};
	const loginWithTwitter = () => {
		const twitterProvider = new TwitterAuthProvider();
		return signInWithPopup(auth, twitterProvider);
	};

	const loginAnónimo = () => {
		return signInAnonymously(auth);
	};

	const phone = () => {
		let appCaptcha = new RecaptchaVerifier('captha');
		appCaptcha.render().then((widgetId) => {
			window.recaptchaWidgetId = widgetId;
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(currentUser);
		});
	}, []);

	useEffect(() => {
		const token = JSON.parse(sessionStorage.getItem('user'));
		if (token) {
			setUser(token);
		}
	}, []);

	useEffect(() => {
		sessionStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				user,
				logout,
				loginWithGoogle,
				resetPassword,
				loginWithFacebook,
				loginWithTwitter,
				loginAnónimo,
				phone,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
