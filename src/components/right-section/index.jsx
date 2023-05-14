import React, { useEffect } from 'react';
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Asset1 from "./assets/first_step_pic.png"
import Asset2 from "./assets/2nd_step_1.webp"
import Asset3 from "./assets/3rd_step_pic.webp"

const ScrollableRightSection = () => {
    useEffect(() => {
        AOS.init();
        const handleScroll = (e) => {
            const delta = e.deltaY;
            const rightSection = document.querySelector('.right-section');
            if (delta > 0 && rightSection.scrollHeight - rightSection.scrollTop === rightSection.clientHeight) {
                e.preventDefault();
            }
            if (delta < 0 && rightSection.scrollTop === 0) {
                e.preventDefault();
            }
        };
        document.addEventListener('wheel', handleScroll);
        return () => {
            document.removeEventListener('wheel', handleScroll);
        };
    }, []);

    const CardsArray = [
        {
            icon : Asset1,
            heading: '<h3>A keyboard<br>first experience.</h3>',
            subHeading: `Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time! Bullets to visuals in a click. Transform any block to any other and try different options without any design hassle`
        },
        {
            icon : Asset2,
            heading: `<h3>Bullet to visuals in a click</h3>`,
            subHeading: "Transform any block to any other and try different options without any design hassle"
        },
        {
            icon : Asset3,
            heading: "<h3>A powerful assistant just a click away</h3>",
            subHeading: "Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard"
        }
    ]

    return (
        <div data-aos="zoom-in-up" className="container">
            <div className="left-section">
                <span className="iconContainer">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[3px]"><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#A594FD"></path></svg>
                    <div>Workflow</div>
                </span>
                <div className='headingContainer'>
                    Create at the speed of thought.
                </div>
                <span className='iconSubheading'>
                    Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you
                </span>
            </div>
            <div className="right-section">
               <Cards cardsArray={CardsArray} />
            </div>
        </div>
    );
};

const Cards = ({cardsArray = []}) => {
    useEffect(() =>  {
        AOS.init()
    }, [])
    return <>
    {cardsArray.map((item, idx) => {
        const { icon = "", heading = "", subHeading = "" } = item || {}
        return (
            <div className="cardsContainer">
                <img alt={idx} src={icon} className="cardsIconStyle" />
                <div className='cardsHeading' dangerouslySetInnerHTML={{
                    __html: heading
                }} />
                <div className="cardsSubHeading">{subHeading}</div>
            </div>
        )
    })}
    </>
}










export default ScrollableRightSection;




