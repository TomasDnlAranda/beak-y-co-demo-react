import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Project from '../../components/Project/Project';
import './Home.css';

const Home = () => {
	return (
		<>
			<div className="home">
				<Header />
				<Hero />
			</div>
			<Project />
		</>
	);
};

export default Home;
