import { NavLink } from 'react-router-dom';
import LinkedInIcon from '../../assets/icons/social_li_1.svg';
import InstagramIcon from '../../assets/icons/social_ig_1.svg';
import FacebookIcon from '../../assets/icons/social_fb_1.svg';
import YoutubeIcon from '../../assets/icons/social_yt_1.svg';
import ExitIcon from '../../assets/icons/exit.svg';
import './Sidebar.css';

interface Props {
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isSidebarOpen: boolean;
}

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }: Props) => {
	return (
		<div className={`sidebar sidebar-${isSidebarOpen ? 'show' : 'hide'}`}>
			<div className="sidebar__row-exit">
				<img src={ExitIcon} alt="Exit Menu" onClick={() => setIsSidebarOpen((prev) => !prev)} />
			</div>
			<div className="sidebar__row">
				<NavLink to="/">Home</NavLink>
			</div>
			<div className="sidebar__row">
				<NavLink to="/desarrollos">Desarrollos</NavLink>
			</div>
			<div className="sidebar__row">
				<NavLink to="/inversion">Inversión</NavLink>
			</div>
			<div className="sidebar__row">
				<NavLink to="/nosotros">Nosotros</NavLink>
			</div>
			<div className="sidebar__row">
				<NavLink to="/clientes">Clientes</NavLink>
			</div>
			<div className="sidebar__row">
				<NavLink to="/buscar-propiedades">Buscar Propiedades</NavLink>
			</div>
			<div className="sidebar__footer">
				<a
					className="sidebar__footer-icon"
					href="https://www.linkedin.com/company/baekyco/?viewAsMember=true"
					target="blank"
				>
					<img src={LinkedInIcon} />
				</a>
				<a className="sidebar__footer-icon" href="https://www.facebook.com/baekyco/" target="blank">
					<img src={FacebookIcon} />
				</a>
				<a
					className="sidebar__footer-icon"
					href="https://www.instagram.com/baekyco/"
					target="blank"
				>
					<img src={InstagramIcon} />
				</a>
				<a className="sidebar__footer-icon" href="https://www.youtube.com/@baekyco" target="blank">
					<img src={YoutubeIcon} />
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
