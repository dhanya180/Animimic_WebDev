import React,{useEffect} from 'react';
import './terms.css';
import { Link } from 'react-router-dom';
const TermsAndConditions = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component loads
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="terms-container">
            {/*<header className="terms-header">
                <h1>Terms and Conditions</h1>
            </header>*/}
            <main className="terms-content">
            <h1>Terms and Conditions</h1>
                <section>
                    <blockquote>Last updated: Nov 2024</blockquote>
                    <h2><strong>1. Introduction</strong></h2>
                    <p className="term-p">
                    Welcome to the Animimic website (the "Website").Animimic provides a web-based platform ("Platform") which incudes Blogs, Discussion forums, 3D-Simulation of animals which creates fun. A User is a person who visits the Website and/or the Platform, plays with our 3D Models,get to know more 
                    info about the animals, registers via any form available on the Website and/or the Platform, creates a login.</p>
                    <p className="term-p">THESE TERMS OUTLINE OUR RELATIONSHIP WITH YOU, AS SUPPLEMENTED BY OUR <a href="https://www.animimic.com/privacy-policy" target rel>PRIVACY AND COOKIE POLICY</a>. BY USING THE WEBSITE OR PLATFORM, YOU AGREE TO BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS AND ALL APPLICABLE LAWS AND REGULATIONS.</p>
                    <p className="term-p">The Platfrom is intended for visitors and users who are five(5) years of age.If you are under 5 years of age ,this Platform is not intended for you.Your use of the Website and/or the Platform means that you are aware of, and agree to, 
            the most recent version of the Terms and our Privacy Policy as published on the Website. It is your sole responsibility to ensure that your use of any and all third party websites or content complies with all third party requirements.</p>
                    <p className="term-p">We may modify these Terms from time to time. We will notify you of any material changes by email (if you are registered on our Platform via an account (“Account”)) or notice on the Website (where deemed necessary) 
                    and will note the date of the last change. If you use the Website or Platform after these updates are posted, you will be deemed to accept these changes and agree to be bound by them. These Terms will continue to apply until terminated, either by you or by us, as described in these Terms.</p>
                </section>

                <section>
                    <h2><strong>2. User License and Content</strong></h2>
                    <p className="term-p">Summary: Our Platform (and all the available content) is licensed for your use, but its ownership as a property remains with Animimic and its licensors. Provided that you comply with all Terms of this Agreement, 
                    Animimic grants you a limited license to use our Platform and enjoy the available features for your personal, non-commercial use. You may also upload blogs like images or text and simulate the animals from our Platform but only when you follow our rules.</p>
                    <p className="term-p">Animimic grants you a non-exclusive, limited, non-sublicensable and non-transferable right to use our Platform, subject to the limitations set forth in these Terms and any other limitations communicated by us in writing. 
                        Nothing in these Terms prohibits Animimic from providing our Platform to others.  3D animated pictures are for users' personal, non-commercial use unless explicitly authorized.</p>
                    <p className="term-p">Except for the limited rights expressly granted below, we reserve all right, title and interest in and to the Website and our Platform, including all associated intellectual property rights. Any features available through our Platform are owned by 
                        Animimic or its partners. No rights are granted to you hereunder other than as expressly set forth herein. You agree not to reproduce, duplicate, copy, sell, resell or exploit any part of the Website/Platform, use of the Website/Platform or 
                        access to the Website/Platform without our express written consent. You may not duplicate, copy or reuse any part of the visual design elements without our express written consent.</p>
                    <p className="term-p">Users may upload, create and provide content to Animimic on its own ("User Content"). ALL 3D SIMULATIONS, ANIMATIONS, ARTICLES, AND OTHER CONTENT CREATED BY ANIMIMIC ARE COPYRIGHTED AND CANNOT BE REPRODUCED, MODIFIED, OR DISTRIBUTED WITHOUT PERMISSION. To the extent you upload, 
                        create or otherwise provide User Content to us, you grant Animimic a non-exclusive, royalty-free, worldwide, sublicensable, transferable, license to use, copy, store, modify, transmit and display such User Content as may be necessary or useful to provide and maintain the Website and/or Services.
                        Users are expected to engage respectfully. Any harassment, hate speech, or personal attacks are prohibited.Keep discussions relevant to the topic of each forum or blog. Spam, self-promotion, or unrelated advertising is not allowed. 
                        Animimic reserves the right, but is not obligated, to review and remove User Content that is deemed to violate the provisions of these Terms or otherwise inappropriate, third-party rights, or applicable laws or regulations.Animimic will use its best efforts to resolve any issues, provided that the 
                        User complies with these Terms.Animimic reserves the right to take action at any time against inappropriate content.</p>
                </section>

                <section>
                    <h2><strong>3. Access and Use</strong></h2>
                    <p className="term-p">Summary: You can access our Platform and enjoy the features with an Account. You should keep your username and password protected and secure. All activities that occur under your Account or on our Website are your responsibility. The Account information you provide to us must be accurate, 
                    complete, and your own. We are not responsible for any loss or damage arising from your failure to comply with these requirements or as a result of the use of your Account. If you are under 5 years old (or the applicable minimum age in your country of residence) or do not understand what this agreement 
                    is about, you and your parent or guardian must review this agreement together. Your right to use our Platform is also subject to limitations. In general, you should avoid doing anything that might harm Animimic or anyone else. Among other things, you may not copy the Platform or use any content in an 
                    illegal or harmful manner, make any misrepresentations of or abuse our services, or otherwise violate anyone’s rights or any applicable laws. Failure to abide by any of these rules may bring us to revoke and cancel your Account, and void this agreement.</p>
                    <p className="term-p">You can access our Platform with an Account. In order to create your Account, log in to the Website, and/or participate in the Platform offered, you must be eligible and agree to the terms and conditions set forth below. Failure to qualify and continuously comply with any of the 
                    following terms and conditions constitutes a violation of these Terms and may result in the termination of your Account and permission to use the Website and Platform.</p>
                    <p className="term-p">All information you provide to us in your registration form for the purpose of establishing your Account will be true and correct and you will promptly notify us of any changes to such information;Your Account is solely for your use and may not be used by any third party. 
                    You may not allow any third party to use your Account, password, login or user ID to access or use the Website, the Platform, or for any other purpose. We take no responsibility for any third party access to your Account. You must immediately notify us of any unauthorized use 
                    of your password and identification and/or breach. You accept responsibility for all activities that occur under your Account, username or password and all such use is deemed authorized by you. You are responsible for the security of the password you use to access the Platform 
                    and for all activities or actions under your password, whether your password is with our Platform or with a third party service.
                    </p>
                    <p className="term-p">You have verified and determined that your use of the Website and Platform does not violate any law or regulation in any jurisdiction applicable to you. It is your sole responsibility to ensure that this is the case;You will not use the Website or the Platform for fraudulent or otherwise illegal purposes;
                    You understand that we may detect your Internet access location, without obligation, and may use techniques intended to block or restrict access from a jurisdiction where participation in the Website or Platform is illegal or restricted;You will not mask your identity in any way, including, but not limited to, 
                    IP masking or accessing the Website through any type of proxy server; and You will ensure that all use of your Account is in full compliance with these Terms. We may suspend or terminate your access to the Website and Platform without notice to you if you do not use the Website or Platform for an extended period of time.
                    You agree to use the Website and/or the Platform only for its intended purpose.</p>
                </section>

                <section>
                    <h2><strong>4. Verification of Account Information</strong></h2>
                    <p className="term-p">Summary: We can always check whether your information and use of the Platform complies with our rules.<br></br>We reserve the right (but do not assume the obligation) to conduct an audit at any time to validate your Account information and/or to ensure that your participation on the Website and use of the 
                    Platform does not violate these Terms and/or any applicable law. You authorize us and our agents to make any inquiries to you and for us to use and disclose to third parties that we deem necessary to validate this information. To facilitate the aforementioned validation, you agree to provide sufficient information or 
                    documentation as we, in our sole discretion, may request. If you do not provide such information within thirty (30) days of our request, if your responses are incomplete or otherwise insufficient, or if we are unable to verify the information applicable to your account, your account may be terminated.
                    Notwithstanding the above, Animimic reserves the right to remove the username linked to your Account if it does not comply with these Terms.</p>
                </section>

                <section>
                    <h2><strong>5. Privacy</strong></h2>
                    <p className="term-p">Animimic's use of your personal data and our responsibilities in protecting your privacy are described in our <a href="https://www.animimic.com/privacy-policy"> Privacy Policy</a>.</p>
                </section>

                <section>
                    <h2><strong>6. Third Party Websites and Promotions</strong></h2>
                    <p className="term-p">Summary: We don’t control third-party services, and we’re not liable for any transactions you may perform with them, or for what they do. When using third-party services, your security is your responsibility. Please be aware that promotions that are made available through our Platform may be subject to additional rules.<br></br>
                    Our Website contains links to other websites on the internet. Animimic is neither responsible for nor endorses the content, products, services or practices of third-party websites, including, but not limited to, websites embedded in our Website or third-party advertisements, and makes no representations regarding the quality, 
                    content, accuracy or suitability of these websites in the context of your viewing or use. Your use of third-party websites is at your own risk and subject to the terms of use of such websites.</p>
                    <p className="term-p">IN THE EVENT THAT YOU CHOOSE TO PURCHASE A PRODUCT OR SERVICE FROM A THIRD PARTY, ANIMIMIC IS NOT RESPONSIBLE FOR SUCH PRODUCTS OR SERVICES, AS IT IS NOT A PARTY TO SUCH A TRANSACTION AND IS NOT LIABLE FOR ANY DIRECT OR INDIRECT COSTS OR DAMAGES ARISING FROM ANY DISPUTE BETWEEN YOU AND SUCH THIRD PARTY. NEITHER ANIMIMIC, 
                    NOR ITS LICENSORS OR CONTRACTORS, MAKE ANY EXPRESS OR IMPLIED REPRESENTATIONS OR WARRANTIES REGARDING THE GOODS OR SERVICES OFFERED BY SUCH MERCHANT, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT OF CERTAIN RIGHTS OR COMPATIBILITY.</p>
                    <p className="term-p">Any sweepstakes, contests, raffles, surveys, games or similar promotions (collectively, “Promotions”) made available through the Website may be governed by rules that are separate from these Terms. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. 
                    If the rules for a Promotion conflict with these Terms, the Promotion rules will govern. Animimic collects data to enhance user experience but does not share personal data with third parties without consent.</p>
                </section>

                <section>
                    <h2><strong>7. Warranties and Disclaimer</strong></h2>
                    <p className="term-p">Summary: We offer no warranties regarding our services and the Platform, including any regarding their quality, reliability, security, or compatibility.</p>
                    <p className="term-p">YOU WARRANT THAT YOU WILL ABIDE BY AND RESPECT THESE TERMS OF SERVICE AND ANY ADDITIONAL GUIDELINES OF OUR PLATFORM. IF THESE CAUSE YOU ANY HARM, WE WILL NOT BE HELD LIABLE.</p>
                    <p className="term-p">You understand that we cannot and do not represent or warrant that files available for downloading from the Internet will be free of viruses, worms, Trojan horses or other code that may have contaminated or destructive properties. You are responsible for implementing sufficient procedures and 
                    checkpoints to meet your specific requirements for accuracy of data input and output, and for maintaining a means outside the Website and Platform for reconstructing lost data. Animimic reserves the right to update these terms periodically. Continued use of the platform after changes indicates acceptance of the new terms.We assume no responsibility or risk for your use of the Internet.</p>
                    <p className="term-p">OUR SERVICES AND ALL MATERIALS ON THE WEBSITE AND PLATFORM ARE PROVIDED "AS IS" AND "AS AVAILABLE" AND WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. ANIMIMIC MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE ACCURACY, 
                    COMPLETENESS, OR SUITABILITY OF ANY MATERIAL ON THE WEBSITE, OR ON ANY WEBSITE OR WEBSITES "LINKED" TO THE WEBSITE. ANIMIMIC DOES NOT WARRANT THAT THE WEBSITE AND/OR OUR PLATFORM WILL BE AVAILABLE, UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
                </section>
                
                <section>
                    <h2><strong>8. Limitations of Liablity</strong></h2>
                    <p className="term-p">Summary: To the extent permitted under applicable law, we are not liable for user damages exceeding 100 EUR, as our Platform is free to play.Animimic is not liable for any indirect or consequential damages resulting from the use or inability to use the platform. 
                    The platform content is provided “as-is” without warranties of any kind.</p>
                    <p className="term-p">TO THE EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES WILL CRAZYGAMES OR ITS DIRECTORS, EMPLOYEES, PARTNERS, LICENSORS, CONTRACTORS, AGENTS, SUPPLIERS OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
                    LIMITED TO LOST PROFITS, LOSS OF DATA, USE, GOODWILL OR OTHER INTANGIBLE LOSSES, ARISING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PLATFORM; (II) ANY THIRD-PARTY CONDUCT OR CONTENT ON THE PLATFORM; (III) ANY CONTENT OBTAINED FROM THE PLATFORM; (IV) ANY ACTION TAKEN 
                    IN CONNECTION WITH COPYRIGHT, TRADEMARK, OR INTELLECTUAL PROPERTY RIGHTS INFRINGEMENT; (V) ANY DAMAGE CAUSED BY A USER'S COMPUTER, SOFTWARE, HARDWARE SECURITY BREACH INCLUDING, BUT NOT LIMITED TO, DAMAGE FROM ANY SECURITY BREACH, VIRUS, BUGS, TAMPERING, FRAUD, ERRORS, DELAYS, OR MALFUNCTIONS; AND 
                    (IIV) UNAUTHORIZED ACCESS, USE OR MODIFICATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF ANY REMEDY SET FORTH HEREIN IS FOUND TO FAIL OF ITS ESSENTIAL PURPOSE.</p>
                    <p className="term-p">TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE MAXIMUM LIABILITY OF CRAZYGAMES TO YOU ARISING FROM THESE TERMS OF SERVICE WILL IN NO EVENT EXCEED THE AMOUNT OF ONE HUNDRED (100) EUR CONSIDERING THE USE OF THE WEBSITE IS FREE OF CHARGE. THE AFOREMENTIONED LIMITATIONS WILL NOT IMPACT USER’S STATUTORY RIGHTS AND DOES NOT 
                    APPLY TO A PARTY'S LIABILITY RESULTING FROM (I) FRAUD OR DECEIT, (II) GROSS NEGLIGENCE; (III) DEATH OR PERSONAL INJURY; AND/OR (IV) WILLFUL MISCONDUCT.</p>
                </section>

                <section>
                    <h2><strong>9. Indemnification</strong></h2>
                    <p className="term-p">Summary: If Animimic is sued or otherwise put in harm’s way because of something you did, you will bear the associated costs and damages.<br></br>
                    You agree to defend, indemnify and hold harmless Animimic, its subsidiaries, affiliates, licensors, content providers, service providers, employees, agents, officers, directors and contractors (the "Indemnified Parties") from and against any and all liability, loss or damage, costs or expenses, including but not limited to 
                    court costs, attorneys' fees, and any awards or damages caused by, in connection with or incidental to: (a) your use of our Platform; (b) the Website; or (c) other services offered through the Website.</p>
                </section>

                <section>
                    <h2><strong>10. Termination / Deletion of Accounts</strong></h2>
                    <p className="term-p">Summary: You can delete your Account at any time yourself in our Platform. Furthermore, we can terminate or suspend your access to our Platform when we believe that you do not follow our rules.</p>
                    <p className="term-p">Animimic reserves the right to terminate these Terms and end your access to the Website and/or Platform, or temporarily suspend all or part of your access, at any time and without prior notice under the following circumstances: * If we have a reasonable belief that you have violated, or may potentially violate, 
                    any term or provision outlined in these Terms; * If we determine that termination or suspension of your access is required by applicable law or legal obligation; * At our sole discretion, for any other reason we deem suspension or termination necessary or appropriate. * We may delete any Account Information or other material 
                    related to your use of the Website and/or our Platform on our servers or otherwise in our possession. You acknowledge that we will not be liable to you or any third party for any termination of your access to the Website and/or our Platform. * You can delete your Account at any time by going to account settings and clicking on “Delete your account”, or request us to delete your Account by email.</p>
                </section>

                <section>
                    <h2><strong>11. Information , Complaints & Copyright Claims</strong></h2>
                    <p className="term-p">Summary: If you have any concerns or complaints please email us at 
                    <a href="mailto:legal@animimic.com" target rel> legeal@animimic.com</a>
                    , or write to us at: IIT Tirupati,Yerpedu-Venkatagiri Road,Chindepalle,Andhra Pradesh 517619. When you provide us with feedback we are free to use such feedback at our own discretion.</p>
                    <p className="term-p">If you have a question or complaint regarding the Platform or Website, please fill in our contact form at 
                    <a href="https://www.animimic.com/contact" target rel> https://www.animimic.com/contact</a> or send an e-mail to 
                    <a href="mailto:legal@animimic.com" target rel> legeal@animimic.com</a> You may also contact us by writing to IIT Tirupati,Yerpedu-Venkatagiri Road,Chindepalle,Andhra Pradesh 517619.</p>
                    <p className="term-p">We value your opinion. if you provide us with feedback, including data, variables, comments, suggestions, ideas, notes, drawings, graphics, concepts or other information ("Feedback"), you are providing that Feedback, and all of your rights thereto, to us free of charge, and such Feedback will be treated as non-confidential and 
                    non-proprietary and may be used by us for any purpose, without your consent or any compensation to you or anyone else. This applies whether you submit such Feedback to us by email, through a form on the Website, on a bulletin board or otherwise.</p>
                    <p className="term-p">If you believe in good faith that materials available on the Website or Platform infringe your copyright, you (or your agent) may send us a written notice by courier, mail or e-mail, requesting that we remove such material or block access to it. If you believe in good faith that someone has wrongly filed a 
                    notice of copyright infringement against you, you can send us a counter-notice. Notices and counter-notices must be sent in writing to: IIT Tirupati,Yerpedu-Venkatagiri Road,Chindepalle,Andhra Pradesh 517619 or by e-mail to 
                    <a href="mailto:legal@animimic.com" target rel> legeal@animimic.com</a> .</p>
                </section>
                <section>
                <h2><strong>12. Disputes</strong></h2>
                <p className="term-p">Summary: Mindful of the high costs of legal disputes, we want to try to settle any disputes with you related to the Terms by initially attempting to resolve the matter in good faith through written notice.</p><p className="term-p">Mindful of the high cost of legal dispute, not only in money but also in time and energy, 
                both you and Animimic agree to the following dispute resolution procedure: In the event of any controversy, claim, action, or dispute arising out of or related to the breach, enforcement, interpretation, or validity of these Terms or any part of it, the party asserting the dispute will first try in good faith to settle 
                such dispute by providing written notice to the other party by registered mail describing the facts and circumstances (including any relevant documentation) of the dispute and allowing the receiving party 30 days from the date of mailing to respond to the dispute. Notice will be sent to <a href="mailto:legal@animimic.com" target rel> legeal@animimic.com</a> . 
                You may also contact us by writing to IIT Tirupati,Yerpedu-Venkatagiri Road,Chindepalle,Andhra Pradesh 517619.</p>
                <p className="term-p">Unless you indicate otherwise in your notice, Animimic will respond to your notice using your last-used e-mail address that we have.</p><p className="term-p">In the event that Animimic is unable to resolve the dispute, you and Animimic both agree that the parties will resolve their dispute in accordance with article 13 below.</p>
                </section>
                <section>
                <h2><strong>13. Applicable Law and Competent Court</strong></h2>
                <p className="term-p">Summary: As a India-based company, the law that governs these terms and conditions and our relationship with you is Indian law. Any disputes need to be resolved by the competent courts of India.</p>
                <p className="term-p">These Terms will be construed in accordance with Indian law, without prejudice to any other imperative provision of law more favorable to you applicable in your country of habitual residence.</p>
                <p className="term-p">The competent courts of India will have exclusive jurisdiction over any dispute or controversy arising from or related to these Terms or its subject matter. If you are a resident of an EU Member State or a country or state where this clause is prohibited by local law, this clause does not 
                apply to you and does not deprive you of the protection of the mandatory provisions of consumer protection laws in your country. Animimic nonetheless reserves the right to take legal proceedings in a country other than India, to protect its interests or to enforce its rights where it deems it appropriate to do so.</p>
                <p className="term-p">To the extent permitted by law, the Parties agree that all claims and disputes made against the other in your or its individual capacity, and not as a plaintiff or class member in any purported class action, class arbitration, or representative proceeding.</p>
                </section>
                <section>
                <h2><strong>14. Miscellaneous</strong></h2>
                <p className="term-p">If any provision of these Terms is deemed invalid, illegal or unenforceable, such provision will be deemed amended to comply with applicable law and the remaining provisions of the Terms will continue in full force and effect to the extent permitted by law.</p>
                <p className="term-p">These Terms and our Privacy Policy represent the entire understanding and agreement between the parties with respect to the subject matter hereof and supersede all prior or contemporaneous oral or written communications with respect to the subject matter.</p>
                <p className="term-p">Your use of the Website/Platform does not create an employment, partnership, joint venture or any other relationship beyond that of a website user governed by these Terms. Animimic cannot be held responsible in case of default (temporary or otherwise) or in case of failure to perform any of its obligations 
                as a result of a case of force majeure or coincidence</p>
                <p className="term-p">These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Animimic without restriction.</p>
                <p className="term-p">Animimic' waiver of any term in these Terms does not imply an ongoing or additional waiver of that term or any other term, and Animimic' failure to enforce a right or provision does not constitute a waiver of that right or provision.</p>               
                </section>
            </main>
        </div>
    );
};

export default TermsAndConditions;
