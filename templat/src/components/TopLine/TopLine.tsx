import React from 'react';
import './TopLine-module.css'
const TopLine = () => {
    return (
            <header className="header" >
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__block">
                            <a href="#" className="header__logo">
                                <img src="img/phone.svg" alt=""/>
                            </a>
                           <p className="info">
                               8 (812) 123-45-67 / Работаем 7 дней в неделю / 9:00 — 18:00
                           </p>
                        </div>
                        {/*header__block*/}
                        <nav className="nav">
                            <a href="#" className="nav__link item">Войти</a>
                            <a href="#" className="nav__link">Регистрация</a>
                        </nav>
                    </div>

                </div>

            </header>
    );
};

export default TopLine;