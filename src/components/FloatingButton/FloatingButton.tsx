import './FloatingButton.css';
import FloatingButtonIcon from '../../assets/icons/btn_whatsapp.svg';

const FloatingButton = () => {
	return (
		<a
			href="https://wa.me/5491134608762?text=Hola!%20Me%20gustaría%20recibir%20más%20información."
			className="floating-btn"
		>
			<img src={FloatingButtonIcon} alt="WhatsApp" />
		</a>
	);
};

export default FloatingButton;
