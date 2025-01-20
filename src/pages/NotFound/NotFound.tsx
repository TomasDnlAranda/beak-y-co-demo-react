import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
	return (
		<div className="not-found">
			<h1 className="not-found__title">Página en Construcción</h1>
			<p className="not-found__message">
				¡Lo sentimos! Esta página aún está en desarrollo. Vuelve pronto.
			</p>
			<Link to="/" className="not-found__btn">
				Home
			</Link>
		</div>
	);
};

export default NotFound;
