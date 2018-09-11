<footer id="footer">
    <div class="footer-dark-style">
        <div class="container">
            <div class="list-service-footer">
                <ul class="list-none">
                    <li><a href="#"><img src="images/home/jewelry4/icon1.png" alt="" /></a> <span class="white opaci">FREE DELIVERY FROM $99</span></li>
                    <li><a href="#"><img src="images/home/jewelry4/icon2.png" alt="" /></a> <span class="white opaci">SECURE PAYMENT</span></li>
                    <li><a href="#"><img src="images/home/jewelry4/icon3.png" alt="" /></a> <span class="white opaci">100% GUARANTEED</span></li>
                    <li><a href="#"><img src="images/home/jewelry4/icon4.png" alt="" /></a> <span class="white opaci">MONEY BACK GUARANTEED</span></li>
                </ul>
            </div>
        </div>
        <div class="footer2 bg-dark">
            <div class="container">
                <div class="main-footer2">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="block-footer2">
                                <h2 class="title30 white play-font font-italic">Newsletter</h2>
                                <p class="desc white opaci">Sign up to our newsletter to receive updates on the art of Coin.</p>
                                <form class="form-newsletter2">
                                    <input type="text" placeholder="EMAIL ADDRESS">
                                    <input type="submit" value="Subscription">
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="block-footer2">
                                <div class="logo logo-footer2 text-center">
                                    <a href="index.html">
                                        <span class="logo-icon title24 round white bg-dark"><i class="fa fa-diamond"></i></span>
                                        <strong class="play-font  title30 white text-uppercase">BW-</strong>
                                        <span class="play-font font-normal title30 white">Store</span>
                                    </a>
                                </div>
                                <h2 class="title18 play-font white text-center font-italic">Follow Us On</h2>
                                <div class="social-network-footer text-center">
                                    <a href="#" class="inline-block round"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="inline-block round"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="inline-block round"><i class="fa fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="block-footer2">
                                <h2 class="title30 white play-font font-italic">Concierge</h2>
                                <p class="desc white opaci">Don't hesitate in contacting us for any questions you might have.</p>
                                <ul class="list-none contact-foter2">
                                    <li>
                                        <i class="fa fa-location-arrow white"></i>
                                        <span class="text-uppercase white opaci">SHIPPING & RETURNS</span>
                                    </li>
                                    <li>
                                        <i class="fa fa-question white"></i>
                                        <span class="text-uppercase white opaci">FREQUENTLY ASKED QUESTIONS</span>
                                    </li>
                                    <li>
                                        <i class="fa fa-volume-control-phone white"></i>
                                        <span class="text-uppercase white opaci">+84 1678 311 160</span>
                                    </li>
                                    <li>
                                        <i class="fa fa-envelope white"></i>
                                        <a class="white opaci" href="mailto:contact.7uptheme@gmail.com">contact.7uptheme@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Main Footer -->
                <div class="footer-bottom2">
                    <ul class="footer-menu text-uppercase text-center list-inline-block">
                        @foreach($footerMenu as $item)
                            <li><a href="{{$item->getUrl()}}" class="white wobble-top">{{$item->name}}</a></li>
                        @endforeach
                    </ul>
                    <p class="desc copyright-footer text-center"><span class="white opaci"> Bwstore © 2018 All Rights Reserved. Design by:</span> <a href="http://7uptheme.com" class="white">7uptheme.com</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>