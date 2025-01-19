import { NavLink } from 'react-router-dom';
import LinkedInIcon from '../../assets/icons/social_li_1.svg';
import InstagramIcon from '../../assets/icons/social_ig_1.svg';
import FacebookIcon from '../../assets/icons/social_fb_1.svg';
import YoutubeIcon from '../../assets/icons/social_yt_1.svg';
import logoCompany from '../../assets/images/logos/logo.svg';
import ListIcon from '../../assets/icons/list.svg';
import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="header__banner">
				<a href="#" className="header__banner-link">
					Av. Gaona 3707 - Piso 7 - Ciudad Autónoma de Buenos Aires
				</a>
			</div>
			<nav className="header__nav">
				<div className="header__nav-left">
					<img src={logoCompany} />
				</div>
				<div className="header__nav-desktop">
					<div className="header__nav-center">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/desarrollos">Desarrollos</NavLink>
						<NavLink to="/inversion">Inversión</NavLink>
						<NavLink to="/nosotros">Nosotros</NavLink>
						<NavLink to="/clientes">Clientes</NavLink>
						<NavLink to="/buscar-propiedades">Buscar Propiedades</NavLink>
					</div>
					<div className="header__nav-right">
						<a className="header__nav-right-icon">
							<img src={LinkedInIcon} />
						</a>
						<a className="header__nav-right-icon">
							<img src={InstagramIcon} />
						</a>
						<a className="header__nav-right-icon">
							<img src={FacebookIcon} />
						</a>
						<a className="header__nav-right-icon">
							<img src={YoutubeIcon} />
						</a>
					</div>
				</div>
				<nav className="header__nav-mobile">
					<img src={ListIcon} />
				</nav>
			</nav>
		</header>
	);
};

export default Header;
