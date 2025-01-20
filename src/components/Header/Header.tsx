import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LinkedInIcon from '../../assets/icons/social_li_1.svg';
import InstagramIcon from '../../assets/icons/social_ig_1.svg';
import FacebookIcon from '../../assets/icons/social_fb_1.svg';
import YoutubeIcon from '../../assets/icons/social_yt_1.svg';
import logoCompany from '../../assets/images/logos/logo.svg';
import ListIcon from '../../assets/icons/list.svg';
import ExitIcon from '../../assets/icons/exit.svg';
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<header className="header">
			<div className="header__banner">
				<a
					href="https://maps.app.goo.gl/BKs28hRCQaCHQ68BA"
					target="blank"
					className="header__banner-link"
				>
					Av. Gaona 3707 - Piso 7 - Ciudad Autónoma de Buenos Aires
				</a>
			</div>
			<nav className="header__nav">
				<div className="header__nav-left">
					<Link to="/">
						<img src={logoCompany} alt="Logo" />
					</Link>
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
						<a
							className="header__nav-right-icon"
							href="https://www.linkedin.com/company/baekyco/?viewAsMember=true"
							target="blank"
						>
							<img src={LinkedInIcon} alt="LinkedIn" />
						</a>
						<a
							className="header__nav-right-icon"
							href="https://www.facebook.com/baekyco/"
							target="blank"
						>
							<img src={FacebookIcon} alt="Facebook" />
						</a>
						<a
							className="header__nav-right-icon"
							href="https://www.instagram.com/baekyco/"
							target="blank"
						>
							<img src={InstagramIcon} alt="Instagram" />
						</a>
						<a
							className="header__nav-right-icon"
							href="https://www.youtube.com/@baekyco"
							target="blank"
						>
							<img src={YoutubeIcon} alt="YouTube" />
						</a>
					</div>
				</div>
				<nav className="header__nav-mobile">
					{isSidebarOpen ? (
						<img src={ExitIcon} alt="Menu" onClick={toggleSidebar} />
					) : (
						<img src={ListIcon} alt="Menu" onClick={toggleSidebar} />
					)}
				</nav>
			</nav>
			<Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
		</header>
	);
};

export default Header;
