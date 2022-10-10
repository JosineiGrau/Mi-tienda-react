import './Item.css';
import { FaRegHeart, FaInfoCircle, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import HeartContext from '../../context/HeartContext';
import NotificationContext from '../Notification/Notification';
import { useAuth } from '../../context/AuthContext';

const Item = ({ name, price, img, id, stock, genero }) => {
	const { addItem, heart } = useContext(HeartContext);
	const { setNotification } = useContext(NotificationContext);

	const { user } = useAuth();

	const [mostrar, setMostrar] = useState(false);

	useEffect(() => {
		const data = heart.some((item) => item.id === id);
		setMostrar(data);
	}, [heart]);

	const productosEnFavoritos = (e) => {
		e.stopPropagation();
		if (user) {
			const productToAdd = {
				id,
				name,
				price,
				img,
				stock,
			};
			addItem(productToAdd);

			if (mostrar) {
				setMostrar(false);
				setNotification(
					'Producto quitado de favoritos',
					'error',
					'productRemove'
				);
			} else {
				setMostrar(true);
				setNotification(
					'Producto agregado a favoritos',
					'correcto',
					'productToHeart'
				);
			}
		} else {
			setNotification(
				'Debes iniciar sesión antes de agregar a la lista',
				'error',
				'productRemove'
			);
		}
	};

	return (
		<div className="producto">
			<div className="producto-card">
				<div className="producto-precio">
					<Link to={`/${genero}/Detail/${id}`} title={name}>
						{name}
					</Link>
					<p>S/.{price}</p>
				</div>
				{stock === 0 && (
					<div className="sin-stock">
						<FaInfoCircle />
						<span>Producto sin stock</span>
					</div>
				)}
				<div className="ver-detalles">
					<Link to={`/${genero}/Detail/${id}`} title="VER DETALLES">
						VER DETALLES
					</Link>
				</div>
			</div>
			<Link to={`/${genero}/Detail/${id}`} title={name} className="img-card">
				<img loading="lazy" src={img} alt={name} />
			</Link>
			<button
				className="favorito"
				onClick={productosEnFavoritos}
				style={{ display: mostrar && 'block' }}
			>
				{mostrar === true ? (
					<FaHeart size="25px" color="black" />
				) : (
					<FaRegHeart size="25px" />
				)}
			</button>
		</div>
	);
};
export default Item;
