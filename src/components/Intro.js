import React from 'react';
import '../styles/Intro.scss';


const Intro = () => {
    return (
        <section className="intro">
            <div className="heading">
                <p className="intro__title heading__header">
                    Magali Fabri
                </p>
                <p className="intro__subtitle heading__subheader">
                    full stack web dev student
                </p>
            </div>
            <p className="intro__description">
                Little intro. Nam quis neque at nunc vestibulum mollis. Morbi sit amet ipsum ac justo dignissim elementum. Proin mollis mauris vitae arcu feugiat, a ornare quam iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse bibendum risus mattis leo faucibus, id luctus ligula varius.
            </p>
            <a className="intro__contact btn" href="todo">contact</a>
        </section>
    );
};

export default Intro;
