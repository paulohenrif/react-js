import React, { useEffect } from "react";
import styleHome from '../home/Home.module.css';

const Home = () => {
    useEffect(() => {
        const hideLoadingOverlay = () => {
            const loadingOverlay = document.getElementById('loadingOverlay');
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        };
        window.addEventListener('load', hideLoadingOverlay);

        return () => {
            window.removeEventListener('load', hideLoadingOverlay);
        };
    }, []);

    return (
        <>
            <div id="loadingOverlay" className={styleHome.loadingOverlay}>
                <div>
                    <div className={styleHome.loader}></div>
                    <p className={styleHome.loadingText}>loading...</p>
                </div>
            </div>
        </>
    );
}

export default Home;
