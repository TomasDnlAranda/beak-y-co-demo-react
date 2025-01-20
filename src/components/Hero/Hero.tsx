import { useState, useEffect } from 'react';
import CircleFillIcon from '../../assets/icons/circle-fill.svg';
import HOME_SLIDE_1 from '../../assets/images/hero/home_slide_1.webp';
import HOME_SLIDE_2 from '../../assets/images/hero/home_slide_2.webp';
import HOME_SLIDE_3 from '../../assets/images/hero/home_slide_3.webp';
import HOME_SLIDE_4 from '../../assets/images/hero/home_slide_4.webp';
import HOME_SLIDE_5 from '../../assets/images/hero/home_slide_5.webp';
import HOME_SLIDE_6 from '../../assets/images/hero/home_slide_6.webp';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const slide = [
	{ id: 1, img: HOME_SLIDE_1 },
	{ id: 2, img: HOME_SLIDE_2 },
	{ id: 3, img: HOME_SLIDE_3 },
	{ id: 4, img: HOME_SLIDE_4 },
	{ id: 5, img: HOME_SLIDE_5 },
	{ id: 6, img: HOME_SLIDE_6 },
];

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const [fade, setFade] = useState(false);
	const [isChanging, setIsChanging] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false); // Estado para saber si las imágenes están cargadas

	const handlePaginationClick = (id: number) => {
		if (isChanging) return;

		setFade(false);
		setIsChanging(true);
		setCurrentSlide(id);
	};

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
		});
	}, []);

	// Pre-cargar las imágenes al montar el componente
	useEffect(() => {
		const loadImages = slide.map((image) => {
			const img = new Image();
			img.src = image.img;
			return new Promise<void>((resolve, reject) => {
				img.onload = () => resolve();
				img.onerror = () => reject(new Error(`Failed to load image: ${image.img}`));
			});
		});

		// Esperar que todas las imágenes se carguen antes de cambiar el estado
		Promise.all(loadImages)
			.then(() => {
				setImageLoaded(true); // Cuando todas las imágenes se cargan correctamente
			})
			.catch((error) => {
				console.error(error); // Manejo de errores
			});
	}, []); // Solo se ejecuta cuando el componente se monta

	useEffect(() => {
		setFade(false);
		const timeout = setTimeout(() => {
			setFade(true);
		}, 100);

		return () => clearTimeout(timeout);
	}, [currentSlide]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsChanging(false);
		}, 500);
		return () => clearTimeout(timeout);
	}, [isChanging]);

	const currentImage = slide.find((image) => image.id === currentSlide)?.img;

	return (
		<div className="hero">
			{/* Mostrar la imagen de fondo solo cuando las imágenes estén cargadas */}
			{imageLoaded && (
				<div
					className={`hero__background ${fade ? 'visible' : ''}`}
					style={{ backgroundImage: `url(${currentImage})` }}
				></div>
			)}

			<h1 className="hero__title" data-aos="fade-up" data-aos-duration="1000">
				Desarrollos Inmobiliarios en Buenos Aires
			</h1>
			<p className="hero__subtitle" data-aos="fade-up" data-aos-duration="1500">
				Con una visión realista y funcional, acompañamos a nuestros clientes e inversores en todo el
				proceso para garantizarles un hogar confortable y de atractiva rentabilidad.
			</p>
			<div className="hero__container-btn" data-aos="fade-up" data-aos-duration="2000">
				<Link to="contacto" className="hero-btn hero-btn-1">
					Contacto
				</Link>
				<Link to="desarrollos" className="hero-btn hero-btn-2">
					Ver Mas
				</Link>
			</div>

			<div className="hero__pagination" data-aos="fade-up" data-aos-duration="2500">
				{slide.map((image) => (
					<img
						key={image.id}
						src={CircleFillIcon}
						id={String(image.id)}
						alt={`pagination-icon-${image.id}`}
						onClick={() => handlePaginationClick(image.id)}
						style={{
							cursor: 'pointer',
							opacity: currentSlide === image.id ? 1 : 0.3,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Hero;
