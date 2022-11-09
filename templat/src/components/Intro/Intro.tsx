import React from 'react';
import './Intro-module.css'
const Intro = () => {
    return (
        <section className="intro" style={{backgroundImage:`url('img/R.jpg)`}} >

            <div className="container">
                <div className="intro__content">
                    <div className="intro__block">
                        <h1 className="intro__title">
                            PORTEN
                        </h1>
                        <p className="intro__title-item">
                            санкт-петербург
                        </p>
                        <h4 className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in.
                            Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis.
                            Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;