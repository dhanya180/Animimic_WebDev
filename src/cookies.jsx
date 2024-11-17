import React,{useEffect} from 'react';
import './cookies.css';
import { Link } from 'react-router-dom';



const Cookies = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="cookie-container">
            <main className="cookie-content">
            <h1>Animimic Cookie Policy</h1>
                <section>
                <blockquote>Last updated: Nov 2024</blockquote>
                    <h2><strong>1. Who we are</strong></h2>
                    <p>We are Animimic. We offer a browser platform where you can read and upload blogs, participate in discussion forums, and experience 3D Simulation of animals in an easy and accessible way (“Platform”). You can access our Platform via an account (“Account”). 
                        The Platform is made available via one of Animimic' websites as visible in the address bar depending on your region (“Website”).</p>
                    <p>Legal information about Animimic ("Animimic", "we", "us"):<br></br>IIT Tirupati<br></br>Yerpedu-Venkatagiri Road,Chindepalle<br></br>Andhra Pradesh 517619<br></br> Call 000-800-919-1694</p>
                    
                </section>

                <section>
                    <h2><strong>2. What are Cookies?</strong></h2>
                    <p>Cookies are small files that are saved on your computer when you visit web pages. They contain information linked to a web browser and the specific website. They are saved in a specific folder on your hard drive. If you return to a specific website, this page can 
                    recognize the visitor by means of the cookie and further elaborate the history. A web beacon is an (often transparent) graphic image, usually no larger than 1 pixel, that is placed on a website and that is used to monitor the behaviour of the user visiting the website.</p>
                    <p>Cookies are used to increase visitor-friendliness: by identifying visitors with a cookie, they do not always have to enter the same data such as login information or screen settings every time you visit the website.</p><p>In this Cookie Policy, we explain what cookies are, 
                    their purposes and which cookies we use on our Websites. More information on your privacy and data protection rights can be found in our Privacy Policy.</p>
                </section>

                <section>
                    <h2><strong>3. What kind of cookies exist?</strong></h2>
                    <p>Often a distinction is made between two large groups of cookies:</p>
                    <ul>
                        <li><strong>First party cookies:</strong> These cookies are created by a website to make the web page function better. They regulate the technical part of a site, such as language choice or remembering the products in the shopping basket in an online store. The visited website 
                        creates and places first party cookies.</li>
                        <li><strong>Third party cookies:</strong> These cookies are created and placed on your computer by another (third) party than the website you visit. They remember the behaviour of a surfer. Examples are social media such as Facebook or Twitter, but Google Analytics as well. 
                        This is the system used most to measure website visits.</li>
                        <li>Cookies essential for the correct functioning of our Websites do not require permission. All other cookies do.</li>
                    </ul>
                </section>

                <section>
                    <h2><strong>4. Why do we use Cookies?</strong></h2>
                    <p>Cookies are generally used to increase visitor-friendliness: by identifying visitors with a cookie, they do not always have to enter the same data such as login information or screen settings every time you visit the Websites. Like other commercial websites, Animimic and our authorised, third-party service providers use cookies 
                    and other similar information-gathering technologies throughout our Platform to collect certain information automatically and store it in log files for a variety of legitimate business interests and purposes.</p>
                    <p>Animimic and its authorised, third-party service providers use cookies, beacons, and other similar technologies on our Websites either with your consent or for our legitimate business purposes to ensure you can navigate or otherwise use our Websites and access secure areas of our Websites. We also use these technologies for statistical 
                    purposes and to analyse and improve the use of our Platform and prepare aggregated usage reports.</p>
                    <p>Animimic wants to inform users as much as possible about the cookies we use. Cookies are essential for us to optimise each visit to the Platform and offer you a better game experience or offer you relevant ads that you might be interested in. For example, cookies remember each choice made by you (e.g. choices related to language, 
                    newsletter, etc.) and help offer you all relevant services and suggestions.</p>
                </section>

                <section>
                    <h2><strong>5. What is our legal basis?</strong></h2>
                    <p>On our free, ad-supported Platform, we use these technologies for our legitimate business purposes of providing standard advertising controls, determining user response to advertisements and promotions, and delivering targeted advertisements that we or our authorised, third-party service providers believe will be of most interest to you.</p>
                </section>

                <section>
                    <h2><strong>6. Which Cookies do we use?</strong></h2>
                    <p><strong>First party:</strong> We will only use first party cookies to help improve your user and experience on the Platform. We would do this by recording specific information about the user such as the language chosen, the pages visited and the duration of the visits.</p>
                    <p><strong>Third party:</strong>  Third parties might use information gathered by cookies and/or web beacons for the purpose of online behavioural advertising and/or multisite advertising. The types of information that is gathered by third party cookies and/or web beacons as well as the purpose(s) for which this information is used, are set out in the privacy policy
                     of said third parties which Animimic encourages you to review. Animimic declines all and any liability for any third-party cookies or web beacons deployed by third parties for whatever purpose.</p>
                    <p><strong>Google Analytics:</strong> In addition, the Website also uses third party cookies such as cookies from Google Analytics. Google Analytics is a free service by Google to collect statistics of websites and to represent them in detail. The website administrator thus has a clear view on visitor flows, traffic flows and page displays. This way it is possible to 
                    adapt parts of a website or complete websites to the behaviour and interests of the visitors.</p>
                </section>

                <section>
                    <h2><strong>7. How to manage your Cookies?</strong></h2>
                    <p>When you first visit our Websites, you will be prompted to accept, reject or set our cookies according to your preference via our Consent Management Platform (“CMP”). You can access this CMP at any time in the top right corner of our Websites (next to the "Login" button) via the "Preferences" button and you can configure your ad preferences.</p>
                    <p>In addition, at the browser level you can manage your cookies by adapting your browser settings. Modern browsers allow you to choose to block cookies or to accept only cookies from specific websites. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Platform. Please note that limiting third-party cookies via your browser controls does not prevent our first-party cookies from being set in this way.</p>
                    <p>If you would like to learn more about behavioural advertising or to opt-out of having this information used by companies that are part of the Network Advertising Initiative to deliver personalised ads, please visit <a href="http://www.networkadvertising.org" target rel>http://www.networkadvertising.org</a>. Many of the same companies are members of the Self-Regulatory Program for Online Behavioral Advertising. You can learn more and opt-out of receiving personalised ads from them at <a href="http://www.aboutads.info/choices" target rel>http://www.aboutads.info/choices</a>.</p>
                </section>

                <section>
                    <h2><strong>8. Changes to our Cookie Policy</strong></h2>
                <p>From time to time, it may be necessary to amend this Cookie Policy. When we announce changes to our Cookie Policy, we will change the "last updated" date at the top of the document. In case you have an Account, we will also notify you by email. You will always be able to access the most recent version of this Cookie Policy on our Platform.</p>
                </section>

                <section>
                    <h2><strong>9. More questions about Cookies</strong></h2>
                    <p>If you have any questions or concerns about this Cookie Policy or our use of cookies, please send a message to data-protection@crazygames.com or through our contact form.</p>
                </section>
                
            </main>
        </div>
    );
};

export default Cookies;
