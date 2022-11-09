import React from 'react';
import './SecondLine-module.css'
const SecondLine = () => {
    return (
        <header className="header__second" >
            <div className="container__second">
                <div className="header__wrapper-second">
                    <div className="header__block-second">
                        <a href="#" className="header__logo-second">
                            <img src="img/PORTEN.svg" alt=""/>
                        </a>
                    </div>
                    {/*header__block*/}
                    <nav className="nav__second">
                        <a href="#" className="nav__link active">Понравилось</a>
                        <a href="#" className="nav__link">личный кабинет</a>
                        <a href="#" className="nav__link">настройки</a>
                    </nav>
                    <div className="header__block-second">
                        <div className="header__lng-second">
                            <a href="#" className="header__lng-link-second">
                                <img src="img/Vector (1).svg" alt=""/>
                            </a>
                            <a href="#" className="header__lng-link-second active">
                                <img src="img/Vector (2).svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                {/*header__wrapper*/}
            </div>
            {/*container*/}
        </header>
    );
};

export default SecondLine;