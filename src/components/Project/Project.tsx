import './Project.css';
import SERIE_HOME_AURIAN from '../../assets/images/projects/series_home_aurian.webp';
import SERIE_HOME_LELIS from '../../assets/images/projects/series_home_lelis.webp';
import TORRE_BEAK from '../../assets/images/projects/torre_baek.webp';

import LOGO_AURIAN from '../../assets/icons/logo_aurian.svg';
import LOGO_LELIS from '../../assets/icons/logo_lelis.svg';

import CIRC_FLECHA_DER from '../../assets/icons/circ_flecha_der.svg';
import CIRC_FLECHA_IZQ from '../../assets/icons/circ_flecha_izq.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Project = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
		});
	}, []);

	return (
		<div className="project">
			<div className="slogan-home">
				<div className="slogan-home__left" data-aos="fade-right">
					<img src={TORRE_BEAK} />
				</div>
				<div className="slogan-home__right" data-aos="fade-left">
					<h2>Comprometidos con el habitar de las personas</h2>
					<p>
						<span>
							Apuntamos a un alto nivel de calidad en todos nuestros proyectos inmobiliarios
						</span>{' '}
						haciendo hincapié en el proceso constructivo; desde la optimización de recursos humanos,
						materiales y económicos.
					</p>
					<Link to="desarrollos">Ver más</Link>
				</div>
			</div>
			<div className="series-home" data-aos="fade-up">
				<Link
					to="/desarrollos/serie_aurian"
					className="series-home__left series-box"
					style={{ backgroundImage: `url(${SERIE_HOME_AURIAN})` }}
				>
					<div className="series-home__title">
						<img className="series-home__logo-aurian" src={LOGO_AURIAN} />
						<img src={CIRC_FLECHA_DER} className="series-home__arrow-right" />
					</div>
					<p className="series-home__description">
						<span>
							Más allá de ser un lugar para vivir; es una experiencia de estilo de vida conectado y
							enriquecido.{' '}
						</span>
						Combina vanguardia tecnológica y diseño innovador para hogares preparados para el
						futuro.
					</p>
				</Link>
				<Link
					to="/desarrollos/serie_lelis"
					className="series-home__right series-box"
					style={{ backgroundImage: `url(${SERIE_HOME_LELIS})` }}
				>
					<div className="series-home__title">
						<img src={CIRC_FLECHA_IZQ} className="series-home__arrow-left" />
						<img className="series-home__logo-lelis" src={LOGO_LELIS} />
					</div>
					<p className="series-home__description">
						<span>
							Reinterpreta la arquitectura clásica francesa para integrarla con la funcionalidad
							moderna{' '}
						</span>
						y las nuevas formas de vivir, desarrollando espacios innovadores y estéticamente
						refinado.
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Project;
