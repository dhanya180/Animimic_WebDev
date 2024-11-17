import React,{useEffect} from 'react';
import './privacy.css';
import { Link } from 'react-router-dom';



const PrivacyPolicy = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-container">
            {/*<header className="privacy-header">
                <h1>Privacy Policy</h1>
            </header>*/}
            <main className="privacy-content">
            <h1>Privacy Policy</h1>
                <section>
                <blockquote>Last updated: Nov 2024</blockquote>
                    <h2><strong>1. Who we are</strong></h2>
                    <p>We are Animimic. We offer a browser platform where you can read and upload blogs, participate in discussion forums, and experience 3D Simulation of animals in an easy and accessible way (“Platform”). You can access our Platform via an account (“Account”). 
                        The Platform is made available via one of Animimic' websites as visible in the address bar depending on your region (“Website”).</p>
                    <p>Legal information about Animimic ("Animimic", "we", "us"):<br></br>IIT Tirupati<br></br>Yerpedu-Venkatagiri Road,Chindepalle<br></br>Andhra Pradesh 517619<br></br> Call 000-800-919-1694</p>
                    <p>We recognize the trust you place in us and take our responsibility to protect your privacy seriously. This Privacy Policy (this “Policy”) provides important details about how we collect, process, disclose, retain, and protect your personal data. 
                    Please review it carefully to understand your rights and our obligations regarding your information.</p>
                    <p>The Platform is intended for visitors and users who are five (5) years of age (or the applicable minimum age in your country) or older. If you are under five (5) years of age (or the applicable minimum age in your country), this Platform is not 
                    intended for you. We do not knowingly collect or solicit personal information from children under the age of five (5) (or the applicable minimum age in your country) through our Platform.Animimic does not allow personalised advertising on its Platform.
                    For information about the terms upon which we do business, you should also read our <a href="https://www.animimic.com/terms-and-conditions" target rel>Terms of Service</a>.</p>
                </section>

                <section>
                    <h2><strong>2. What is Personal Data?</strong></h2>
                    <p>Personal Data is any information about you that allows us to identify you. This could be, for example, your name or email address. But equally data about the pages like blogs and forums you opened if we can link it to your account on our Platform (“Account”) .</p>
                    <p>Animimic strongly recommends not to use your real name or share any other personal data in any of the pages/websites provided on our Platform including, without limitation.If you do that, then it is not our responsibility to handle all those consequences.</p>
                </section>

                <section>
                    <h2><strong>3. From whom do we collect personal data?</strong></h2>
                    <p>In order to operate our Platform, we may collect data from users and visitors of the Platform and Website, developers of blogs,discussion forums, persons who otherwise provide us with their contact details, and persons who contact us by email or other means. As described above 
                    under article 1.3, we do collect personal data from children older than the age of five(5) or the applicable minimum age in your country.</p>
                </section>

                <section>
                    <h2><strong>4. What personal data does Animimic process and why?</strong></h2>
                    <p>CrazyGames may collect the following Personal Data of you:</p>
                    <p>To evaluate your job application</p>
                    <ul>
                        <li>Which personal data: Email address, name, age, gender</li>
                        <li>On what basis: Necessary for the performance of a contract or to take steps at your request, before entering a contract</li>
                    </ul>
                    <p>To register and authenticate your Account of the Platform</p>
                    <ul>
                        <li>Which personal data: email address, name, age, gender external account, username and password</li>
                        <li>On what basis: The prior, express, free, specific and informed consent of you</li>
                    </ul>
                    <p>Personalisation of your experience (Account)</p>
                    <ul>
                        <li>Which personal data: username, device and connection data, selected interests and feedback</li>
                        <li>On what basis: The prior, express, free, specific and informed consent of you</li>
                    </ul>
                    <p>To respond to your question or complaint, or to help you with technical problems</p>
                    <ul>
                        <li>Which personal data: name, e-mail address and other information that you provide to us</li>
                        <li>On what basis: Necessary for the exercise of our legitimate interests, in particular to enhance the quality of our Platform</li>
                    </ul>
                    <p>To inform you of new functionalities of our Platform</p>
                    <ul>
                        <li>Which personal data: username and email address</li>
                        <li>On what basis: Necessary for the exercise of our legitimate interests, in particular to communicate relevant information about our Platform</li>
                    </ul>
                    <p>To comply with legal obligations</p>
                    <ul>
                        <li>Which personal data: data required by applicable law</li>
                        <li>On what basis: Necessary to comply with a legal obligation</li>
                    </ul>
                    <p>To prevent, detect and combat fraud and other illegal or unauthorised activities</p>
                    <ul>
                        <li>Which personal data: data required for detection of fraud and illegal activities</li>
                        <li>On what basis: Necessary for the exercise of our legitimate interests, in particular the prevention of fraud and other illegal activities</li>
                    </ul>
                    <p>For marketing of Animimic (for example newsletters)</p>
                    <ul>
                        <li>Which personal data: username and email address</li>
                        <li>On what basis: The prior, express, free, specific and informed consent of you</li>
                    </ul>
                    <p>To enable advertising on our Platform</p>
                    <ul>
                        <li>Which personal data: data gathered by the use cookies, web beacons or similar technologies such as IP address, user ID’s, browser type and operating system</li>
                        <li>On what basis: The prior, express, free, specific and informed consent of you when you accept our Privacy and Cookie Policy, and confirm your ad preferences. 
                        This authorisation can be withdrawn by you at any time. For more information, please consult ‘Manage Your Ad Preferences’ and our Cookie Policy.</li>
                    </ul>
                    <p>Animimic does not collect any specific payment data when you see/upload blogs. The payment is executed by a third party payment provider. We store and link your web purchases to your Account. | Necessary for the performance of a contract |</p>
                    <p><strong>Registration of Account:</strong> If you register an Account with us you give your explicit consent to collect a password, email address, user agent, and IP address. We also facilitate the login via third party providers. If you log-in to our Platform using 
                    social media (such as Facebook) or Google log-in, you are granting permission to the third party service to share your user details with us. This may include your name, email address, date of birth and location, which will then be used to create your Account. These third party services 
                    may use information about your visit to our Platform on their pages. If you browse these pages while still logged in to your Account with us, information they collect may be connected to your Account on their website. For more information on how these third party services use information, please review their privacy policies.</p>
                    <p><strong>Advertising:</strong> Animimic displays ads from various advertising companies on the Platform. These ads may be personalised or non-personalised content-related ads. To show you personalised ads and only if you have given consent via our Consent Management Platform (“CMP”), we share certain data (such as your IP address, 
                    ad identifiers and the information that you have given consent for personalised ads) with third-party advertisers and ad networks. We also use this information to measure how effective these ads are. In our CMP shown to you when you first visit our Website, you can customise your ad tracking preferences or choose not to accept personalised ads at all. 
                    You can change your ad preferences at any time via “Preferences” in the menu of the Website. If you choose not to receive personalised ads at all, we will still show you ads, but they may not reflect your interests, as these ads will be content-specific and not user-specific.</p>
                    <p><strong>Profiling:</strong> Animimic may analyse your web data from the pages you visit on our Platform. Based on your intrests, Animimic may then recommend blogs/discussions you might be interested in. However, you will not be subject to decisions that will have a significant impact on you based solely on automated decision making, unless we have a lawful basis for doing so, 
                    e.g., if we have compelling legitimate grounds for us to continue or to establish a legal defence,and we have notified you. Please note that if you are located in the European Economic Area (EEA) or the United Kingdom (UK), you may have the right to object at any time to your personal data being processed for direct marketing purposes (including profiling to the extent that it is related to such direct marketing).</p>
                </section>

                <section>
                    <h2><strong>5. Do we share your perseonal data with others?</strong></h2>
                    <p>Yes. We may share your personal data with other companies. These companies help Animimic to perform tasks for the Platform. For example, we may disclose your personal data to suppliers of IT and payment services, external consultants and other subcontractors of Animimic who provide services for the Website andPlatform.</p>
                    <p><strong>Advertising:</strong> Additionally, we may share information that we collect from you, such as your email (in hashed form), IP address or information about your browser or operating system, with our identity partners/service providers. These partners return an online identification code that we may store in our first-party cookie for our use in advertising and it may be shared with advertising companies to enable interest-based 
                    and personalised advertising. Personalised advertising means that companies can send you ads for products you might be interested in. Animimic works among others with the following ad partners: <strong>Appnexus, Google Ad Exchange, Magnite, Amazon, SmartAdServer etc...</strong></p>
                    <p><strong>ID:</strong> ID providers manage and distribute unique identifiers associated with users across various digital platforms. Unique identifiers are pieces of information assigned to individual users to track their activities and preferences across different websites and apps. These identifiers help advertisers and platforms understand user behaviour and deliver personalised ads. Due to the changing privacy-landscape, ID providers are adapting by 
                    finding ways to maintain personalised advertising capabilities while respecting user privacy. This might involve using anonymized or aggregated data, implementing stricter data protection measures (e.g., encryption), and providing users with more control over their data and ad preferences. Encryption scrambles for example your email address into a secret code that can only be deciphered with a decryption key.</p>
                </section>

                <section>
                    <h2><strong>6. How long do we keep your personal data?</strong></h2>
                    <p>Animimic will keep your data for as long as strictly necessary for the purposes listed below. With respect to your Account and linked personal data, we will keep your Account until you request us to delete it. You can always delete your account via Account Settings. Please be aware that the deletion of your Account is permanent and you will no longer have access to any purchases linked to your Account.</p>
                    <p>Following a long period of inactivity, Animimic might delete or archive personal data. Where we have your email address, we will notify you in advance before such deletion or archiving of data.</p>
                    <p>We might keep your data for longer if necessary to comply with a particular law or regulation, protect against fraud or abusive incidents, or in correspondence with any legal claims or disputes.</p>
                </section>

                <section>
                    <h2><strong>7. Is your data safe at Animimic?</strong></h2>
                    <p>Yes. A secure environment for your personal data is very important to us. We promise that we will make every effort to keep any personal data safe and take appropriate security measures.<br></br>Within Animimic, personal data is only available to people who need to have access to it in relation to their job.<br></br>
                    When we use external providers to help us with the processing of your personal data (“Processor”), we will always ensure that your personal data is handled confidentially and in a safe manner. We also always draw up a contract with these Processors. This way the Processor will never be allowed to use your personal data on its own initiative and your personal data has to be erased as soon as the Processor has completed the assignment for Animimic.</p>
                    <p>You are and always will be the boss of your personal data. After all, it is your personal data. You therefore have some rights that you can use.<br></br>We will respond to all requests without undue delay. Should our response take more than one month due to the complexity or number of requests, we will inform you in a timely manner and keep you informed. In addition, we may ask you for more information to confirm your identity before we can respond to a request.</p>
                </section>

                <section>
                    <h2><strong>8. Manage your ad preferences</strong></h2>
                    <p>When you first visit our Websites, you will be prompted to accept, reject or set advertising services according to your preference via our Consent Management Platform (“CMP”). You can access this CMP at any time in the menu of our Platform via the "Preferences"-button.</p>
                    <p>In addition, at the browser level you can manage your cookies by adapting your browser settings. Modern browsers allow you to choose to block cookies or to accept only cookies from specific websites. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Platform. Please note that limiting third-party cookies via your browser controls does not prevent our first-party cookies from being set in this way.</p>
                    <p>Some advertising networks require that we specifically list their opt-out links below. When you opt-out of a network, you may receive an “opt-out” cookie so that the network will know not to assign you new cookies in the future. You will continue to receive ads from that network, but not behaviorally targeted ads. If you erase your browser’s cookies, you may need to perform this process again.<br></br>Please remember, if you opt-out of behaviorally targeted advertising you will continue to receive ads on our free, ad-supported Platform,
                     but not behaviorally targeted ads. Also, if you opt-out of Animimic's practices, you may continue to receive interest-based or contextual advertising through other companies.</p>
                </section>

                <section>
                    <h2><strong>9. Links to other Websites</strong></h2>
                    <p>Our Platform or web games of developers may contain links to other websites that do not belong to us. If you click on such a link, you will be directed to that other company's website such as social media. You should check the privacy policy of each website you visit by clicking on such a link.<br></br>We have no control over and take no responsibility for the content, privacy policies or practices of any third-party websites or services.</p>
                </section>

                <section>
                    <h2><strong>10. Changes to our Privacy Policy</strong></h2>
                    <p>From time to time, it may be necessary to amend this Privacy Policy. When we announce changes to our Privacy Policy, we will change the "last updated" date at the top of the document. In case you have an Account, we will also notify you by email. You will always be able to access the most recent version of this Privacy Policy on our Websites.</p>
                </section>

                <section>
                    <h2><strong>11. More questions about your data</strong></h2>
                    <p>If you have any questions or concerns about this Privacy Policy or our handling of your data, please send a message to data-protection@animimic.com or through our contact form.</p>
                    <p>We hope that you will first contact us. But If your question or request is not resolved by us, you can also always lodge a complaint with the Belgian data protection authority. This authority supervises and makes sure that Belgium companies follow the rules with regards to the processing of personal data.</p>
                </section>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
