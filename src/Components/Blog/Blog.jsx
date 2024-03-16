import React from "react";
import './Blog.scss'
import '../Assets/star.png'
import Footer from "../Footer/Footer";
import author from '../../Components/Assets/me1.png'
import logo from "../Assets/PCB-WAY.png"
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate()
    const handleHomeNaviagtion = () => {
        navigate("/")
    }
    return (
        <>
        <section className="title container" style={{position:"absolute", marginLeft:"80px", marginTop:"-20px", position:"fixed", top:0}}>
                <div className="row">
                    <div className="col-md-12" style={{ marginLeft: "-80%", color: "#006826" }}>
                        <a style={{cursor:"pointer"}} onClick={handleHomeNaviagtion}>
                            <img src={logo}></img>
                        </a>
                        <h3>Official GitHub Blog</h3>
                    </div>
                </div>
            </section>
        <div className="wrapper">
            <div className="scroll-indicator" />
            <div className="content-wrapper">
                <div className="content">
                    <div className="poster">
                        <div className="poster-title">
                            <h1> Why PCBWay? </h1>
                            <div className="line" />
                            <p>
                                Founded in 2012, PCBWay has single-handedly facilitated the prototyping of over 2100 PCBs daily. With over 70 highly-skilled professionals under its wing and well over 5 factories situated worldwide, PCBWay has earned a coveted place as a world leader in PCB prototyping, fabrication and assembly. This article seeks to address that precisely. What follows is a break-down of reasons why you should choose PCBWay.
                            </p>
                        </div>
                        <div className="poster-buttons">
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="block published">
                            <div className="mini-title">Published</div>
                            15/03/2024
                        </div>
                        <div className="block published">
                            <div className="mini-title">Views</div>3 251
                        </div>
                        <div className="block published">
                            <div className="mini-title">Likes</div>
                            156
                        </div>
                        <div className="block published">
                            <div className="mini-title">Reading</div>
                            3 min
                        </div>
                    </div>
                    <div className="words">
                        <p><strong>Affordable Prices</strong></p>
                        <p>
                            <font className="letter">A</font>
                            Dealing with the manufacturer directly means that the prices remain economical since there are no third parties in between. Their free quotation makes it really easy to estimate how much you can spend on a particular order. Furthermore, bulk orders guarantee that you spend way less while getting more.
                        </p>
                        <p><strong>Professional Workforce</strong></p>
                        <p>
                            <font className="letter">P</font>
                            Over 90 technical and professional stuff are at your beck and call 24/7 all year long. This makes it possible for your PCB prototype to be given maximum attention and produced all within 24 hours. 
                        </p>
                        <p><strong>Frequent Sales</strong></p>
                        <p>
                            <font className="letter">F</font>
                            Everyone loves a bargain and PCBWay sees to it that you get one too. Every now and then, you will chance to see offers and sales advertised on their website. Taking advantage of these sales means that you get to produceyour favourite innovative ideas at even lower prices. For instance, during the curation of this article, there was a sale on Assembly prototyping going for 30 dollars for 1-20 pieces. That is a real bargain is you ask me.
                        </p>
                        <p><strong>Project Sponsorships</strong></p>
                        <p>
                            <font className="letter">P</font>
                            Sponsorship is among the numerous things that make PCBWay stand out. This arrangement fosters the smooth integration of engineering projects by students who may not be able to afford the manufacturing cost. All it takes is an idea, the drive to implement it, gerber files (pun intended) and a college/university student status. Currently, over 42,000 projects have been sponsored successfully. Want to know how to apply and get sponsorship? Well, worry not for we shall delve into this in much detail in a future post and get to see some of the projects that PCBWay has sponsored.
                        </p>
                        <p><strong>Time Conscious Nature</strong></p>
                        <p>
                            <font className="letter">T</font>
                            Time is of the essense and there is often little time to go around. Therefore, the fact that PCBWay delivers - on time- at a rate of 98.3% ticks of the first checkbox of why you should go fo PCBWay for your PCB prototyping. Long hours spent waiting to get to finally have your project at hand will be a thing of the past.
                        </p>
                        <p><strong>Worldwide Shipping</strong></p>
                        <p>
                            <font className="letter">W</font>
                            With PCBWay, you need not ask "Do they ship to..." for the answer is always a 'yes'! Shipping is done to over 200 countries all over the world. The best part is that you only need to place an order, make your payment and your PCB will be shipped directly to you.
                        </p>
                        <p><strong>Timely Feedback</strong></p>
                        <p>
                            <font className="letter">T</font>
                            What happens when the PCB you designed cannot be fabricated by PCBWay majorly for clearance reasons? Well, you should expect some sort of communication on the same. PCBWay goes as far as clarifying in depth what the problem was and suggesting solutions. Worth noting is that this will not cost you extra money.
                        </p>
                        <p><strong>Flexibility in Service Provision</strong></p>
                        <p>
                            <font className="letter">F</font>
                            "But how do I pay? What payment options does PCBWay have? ", you may ask. The answer is a multitude of options key amongst which is Paypal, Visa, Mastercard, etc. These payment options make it very easy for you to place your order and get your PCB in a timely fashion. In a similar fashion, PCBWay does not shun you for making mistakes. For instance, what happens when you want to change your shipping address? PCBWay allows you to change it. Consequently, in the event that you receive your PCB and realize that there are prototyping errors, you are free to react out to our support email address Service@pcbway.com, where you will get assisted and given the way forward. Usually, the solution is along the lines of re-fabrication or refunding of money. Yes, you heard right. Refunding. How flexible!
                        </p>
                        <p><strong>Projects Sharing</strong></p>
                        <p>
                            <font className="letter">T</font>
                            I like to consider PCBWay's website as a learning platform too. The featured blogs allow you to keep up with what is trending in the hardware world. Furthermore, the projects sharing platform serves as an eye-opener. Their design challenges keep you on your toes while letting you stand a chance of winning awesome prices. In this way, you not only design more but also design better PCBs. 
                        </p>
                        <div className="buttons">
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="quote">
                        <p>
                            {" "}
                            Please note that there are specifications that need to be observed even as you fabricate your PCB such as track width and clearance. Join me next time as we explore these specifications for PCBWay as we explore their PCB manufacturing process in depth.
                        </p>
                    </div>
                    <div className="words">
                        <p><strong>Parting Short...</strong></p>
                        <p >
                            <font className="letter">F</font>
                            For the above reasons and more, I recommend PCBWay for use for bringing your project idea and design to fruition. Let PCBWay take care of fabrication while you come up with ideas and designs. While you are at it, remember to have fun, share your projects, learn from your peers and have fun while building a unique and innovative world.
                        </p>
                        <div className="buttons">
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                >
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="author">
                        <div className="image" style={{display:"flex", flexDirection:"row", gap:"20px", marginBottom:"40px"}}>
                            <img src={author} style={{borderRadius:"58%"}}></img>
                            <div style={{marginTop:"120px"}}>
                            <p>Written by: </p>
                            <p><strong>Joan Kabura</strong></p>
                            <p><strong>A Mechatronics engineering undergraduate student and software developer</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer">
                <div className="content">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi
                        saepe quas quisquam obcaecati odio exercitationem rerum, molestias
                        aliquid ipsa excepturi laborum quaerat! Tempora necessitatibus
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi
                        saepe quas quisquam obcaecati odio exercitationem rerum, molestias
                        aliquid ipsa excepturi laborum quaerat! Tempora necessitatibus
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
        </>
    )
}

export default Blog