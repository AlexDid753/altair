<footer id="footer">
    <div class="footer-dark-style">
        <div class="footer2 bg-dark">
            <div class="container">
                <div class="main-footer2">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="block-footer2">
                                <h2 class="title30 white play-font font-italic">Подписка на новинки</h2>
                                <div class="thanks">
                                    <p class="desc white opaci thanks">Спасибо за Вашу подписку.</p>
                                </div>
                                <p class="desc white opaci">Введите свою почту чтобы подписаться на рассылку о
                                    новинках.</p>
                                <form class="form-newsletter2 feedback-form" method="post">
                                    <input type="hidden" name="type" value="subscribe">
                                    <input required
                                           type="text"
                                           name="email"
                                           placeholder="Электронная почта"
                                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                           oninvalid="this.setCustomValidity('Введите корректный адрес электронной почты')"
                                           oninput="setCustomValidity('')"
                                    >
                                    <input type="submit" value="Подписаться">
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="block-footer2">
                                <div class="logo logo-footer2 text-center">
                                    <a href="/">
                                        <span class="logo-icon logo-icon_big title24 round white"><img
                                                    src="{{$settings->logo}}" alt=""></span>
                                    </a>
                                </div>
                                <h2 class="title18 play-font white text-center font-italic">Подпишитесь на нас в
                                    соцсетях</h2>
                                <div class="social-network-footer text-center">
                                    <a href="#" class="inline-block round"><i class="fa fa-vk"></i></a>
                                    <a href="#" class="inline-block round"><i class="fa fa-instagram"></i></a>
                                    <a href="#" class="inline-block round"><i class="fa fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="block-footer2">
                                <h2 class="title30 white play-font font-italic">Контакты</h2>
                                <p class="desc white opaci">Обращайтесь к нам по любым вопросам.</p>
                                <ul class="list-none contact-foter2">
                                    <li>
                                        <i class="fa fa-volume-control-phone white"></i>
                                        <span class="text-uppercase white opaci"><a class="white opaci"
                                                                                    href="tel:{{$settings->phone}}">{{$settings->phone}}</a></span>
                                    </li>
                                    <li>
                                        <i class="fa fa-envelope white"></i>
                                        <a class="white opaci"
                                           href="mailto:{{$settings->email}}">{{$settings->email}}</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-home white" aria-hidden="true"></i>
                                        <span class="white opaci"><a class="white opaci"
                                                                                    href="tel:{{$settings->address}}">{{$settings->address}}</a></span>
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
                    <p class="desc copyright-footer text-center"><span class="white opaci">Альтаир © 2018 Создание сайта — </span>
                        <a target="_blank" href="https://Molinos.Ru" class="white">Molinos.Ru</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>