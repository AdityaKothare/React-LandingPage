import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="contact" className="footer">
                <div className="container footer-element">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="first-col">
                                <span className="footer-logo" href="#slids">InsightsTree</span>
                                <p className="footer-description">We are a team consisting of Technology Nerds, Market Researchers and Relationship Builders. Our Technology Nerds are equipped with the latest technology, which we keep at your service. Our Market Researchers have one eye on the current trends and the other eye on the future trends, which will help you to build a system capable not only to survive but to strive in this unpredictable market...</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <section id="startapp_contacts-4" className="widget widget_startapp_contacts">
                                <h3 class="widget-title">Contact Details</h3>
                                <div class="contact-item">
                                    <div class="contact-info">
                                        <p>USA - InsightsTree, 177 Park Avenue, Suite 200, San Jose, California, 95113.</p>
                                        <p>India - Rainbow Plaza, Office No. 22, 1st Floor, Shivar Chowk, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027</p>
                                        <p>+1302-319-9947 / +91 74 10 079 889</p>
                                        <p><a href="mailto:admin@insightstree.com">admin@insightstree.com</a></p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-4">
                            <section id="nav_menu-2" className="widget widget_nav_menu">
                                <h3 className="widget-title">Social Media Marketing Services</h3>
                                <div className="menu-social-media-marketing-services-container">
                                    <ul id="menu-social-media-marketing-services" className="menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/facebook">Buy Facebook Services</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/instagram">Buy Instagram Services</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/linkedin">Buy LinkedIn Services</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/twitter">Buy Twitter Services</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="copyright bg-primary text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="copyright-text">© Copyright 2021 InsightsTree | All Right Reserved | TKR Business Media Pvt. Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;