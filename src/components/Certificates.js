import './Certificates.css';
import Header from './Header';

const Certificates = () => {
    return (
        <div className="MainContainer">
            <Header />

            <section className="certificates-section">
                <h1 className='section-title'>IRC Certificate</h1>
                <div className="certificates-grid">
                    <img src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1753510759/IRC_zdoqkh.png" alt="IRC-Image" className='ircImage'/>
                </div>
            </section>

            <section className="certificates-section">
                <h1 className='section-title'>Other Certificates</h1>
                <div className="certificates-grid">
                    <div className="certificate-card">
                        <h3>BUILD YOUR OWN STATIC WEBSITE</h3>
                        <p>Issued Date – 02 Sept 2024</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/static-website?id=UMSAGPIQCL"                                                        
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>BUILD YOUR OWN RESPONSIVE WEBSITE</h3>
                        <p>Issued Date – 10 Sept 2024</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/responsive-website?id=YMZVBGMCQC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>Programming Foundations with Python</h3>
                        <p>Issued Date – 24 Nov 2024</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/programming-foundations?id=WFHSMYXOXU"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>SQLite</h3>
                        <p>Issued Date – 27 Oct 2024</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=XFZSEEFLYT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>Developer Foundations-Git,CommandLine</h3>
                        <p>Issued Date – 09 Feb 2025</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/developer-foundations?id=DUPHXSQJZZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                   <div className="certificate-card">
                        <h3>Build Your Dynamic Web Applications</h3>
                        <p>Issued Date – 31 Jan 2025</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=GFNALNAQIW"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>JavaScript Essentials</h3>
                        <p>Issued Date – 04 Jan 2025</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/javascript-essentials?id=OQBOGSBQIZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>Responsive Web Design using Flexbox</h3>
                        <p>Issued Date – 09 Feb 2025</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/flexbox?id=HPQRKDIYHX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>Node JS</h3>
                        <p>Issued Date – 07 March 2025</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/node-js?id=WFUVQEIKRD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="certificate-card">
                        <h3>React JS</h3>
                        <p>Issued Date – 23 April 2025</p>
                        <a
                            href="https://certificates.ccbp.in/intensive/react-js?id=MNBCQQUNHV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certificates;
