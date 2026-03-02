import React from 'react';

const pictureRandomiser = () => {
    // array of pop singer pics, will be randomly selected for display on home page
    const pics = [
        "https://assets.capitalfm.com/2025/07/sabrina-carpenter-1740082007-editorial-short-form-0.png",
        "https://assets.capitalfm.com/2025/07/lady-gaga-mayhem-1740084202-editorial-short-form-0.png",
        "https://assets.capitalfm.com/2025/07/billie-eilish-1740082839-editorial-short-form-1.jpg",
        "https://assets.capitalfm.com/2025/07/the-weeknd-1740082648-editorial-short-form-0.jpg",
        "https://assets.capitalfm.com/2025/07/beyonc-1740083452-editorial-short-form-0.png",
        "https://assets.capitalfm.com/2026/03/harry-styles-kiss-disco-1768929222-editorial-short-form-1.jpg",
        "https://assets.capitalfm.com/2020/19/press-photo---pharrell-williams-1589191659-editorial-long-form-0.jpeg",
        "https://assets.capitalfm.com/2011/48/jason-derulo-live-at-the-2011-jingle-bell-ball--1322940766-hero-promo-1.jpg",
        "https://images.saymedia-content.com/.image/t_share/MjAwMjEzNTY1NDUyMzMwMzYw/best-female-pop-singers-of-the-2000s-and-2010s.jpg",
        "https://www.tjtoday.org/wp-content/uploads/2024/01/tate-mcrae-scaled.webp"
        
    ];
    const randomIndex = Math.floor(Math.random() * pics.length);
    return pics[randomIndex];
}

// hosts the data for the home page, containing quiz instructions and an example question.

const HomePage = () => {
    return (
        <div>
            <p>
                This quiz will test your ability to NAME THAT POP SINGER. Please read
                through the how to rules below before continuing, and see the example
                question to understand the quiz. Click 'Start Quiz' when you are ready!
            </p>
            <h3 className="subheader">
                <strong>How to quiz :</strong>
            </h3>
            <br />
            <ul id="rules">
                <li>Answers are given as blank responses, multiple choice or true or false</li>
                <li>The quiz will ask you about pop singers from 2000-2020</li>
                <li>You will be asked the 5 questions in a random order</li>
                <li>Videos will be supplied with captions to help</li>
            </ul>
            <img src={pictureRandomiser()} alt="celebrity pop singer" />
            <img src={pictureRandomiser()} alt="celebrity pop singer" />
        </div>        
    );
};

export default HomePage;