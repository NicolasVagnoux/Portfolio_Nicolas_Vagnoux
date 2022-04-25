import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div className="home">
            <Typist avgTypingDelay={70} stdTypingDelay={0}>
                <Typist.Delay ms={1000} />
                <h1 className='home__mainHeader'>{'</> Nicolas Vagnoux'}</h1>
                <Typist.Delay ms={1000} />
                <h2 className='home__smallHeader'>Développeur Web FullStack Junior (React JS)</h2>
            </Typist>
            {/* <img className="homeWave" src="src/assets/home_wave.png" alt="wave" /> */}
            <Link className='home__downButton' to="presentation" smooth={false} duration={1000} activeClass="active">
                <p>﹀ VENEZ DECOUVRIR MON UNIVERS ﹀</p>
            </Link>
        </div>
    );
};

export default Home;