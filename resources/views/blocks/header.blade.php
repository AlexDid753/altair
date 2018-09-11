<header id="header">
    <div class="nav-header nav-header-jewelry5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo logo1 pull-left">
                        <a href="index.html">
                            <span class="logo-icon title24 round white bg-dark"><i class="fa fa-diamond"></i></span>
                            <strong class="play-font font-italic title30 white text-uppercase">Altair-</strong>
                            <span class="play-font font-italic font-normal title30 white">Serebro</span>
                        </a>
                    </div>
                    <!-- End logo -->
                    <nav class="main-nav main-nav1 pull-left dark-style">
                        <ul>
                            @foreach($topMenu as $menuItem)
                                <li class="{{ count($menuItem->childrens) ? 'menu-item-has-children' : ''}}">
                                    <a href="{{$menuItem->getUrl()}}">{{$menuItem->name}}</a>
                                    @if (count($menuItem->childrens)) {{--todo сделать рекурсивное применение шаблона --}}
                                        <ul class="sub-menu">
                                            @foreach($menuItem->childrens as $subMenuItem)
                                                <li class="{{ count($subMenuItem->childrens) ? 'menu-item-has-children' : ''}}"><a href="{{ $subMenuItem->getUrl() }}">{{ $subMenuItem->name }}</a>
                                                    @if (count($subMenuItem->childrens))
                                                        <ul class="sub-menu">
                                                            @foreach($subMenuItem->childrens as $subMenuItem)
                                                                <li><a href="{{ $subMenuItem->getUrl() }}">{{ $subMenuItem->name }}</a></li>
                                                            @endforeach
                                                        </ul>
                                                    @endif
                                                </li>
                                            @endforeach
                                        </ul>
                                    @endif
                                </li>
                            @endforeach
                        </ul>
                        <a href="#" class="toggle-mobile-menu"><span></span></a>
                    </nav>
                    <!-- End Main Nav -->
                    <ul class="wrap-cart-top2 list-inline-block pull-right">
                        <li>
                            <a href="#" class="title18 compare-link" title="Compare"><span class="white"><i class="icon ion-ios-loop-strong"></i></span></a>
                        </li>
                        <li>
                            <a href="#" class="title18 wishlist-link" title="Wishlist"><span class="white"><i class="icon ion-android-favorite-outline"></i></span><sup class="title10 round dark bg-white">0</sup></a>
                        </li>
                        <li>
                            <div class="mini-cart-box mini-cart1 dark-style aside-box">
                                <a class="mini-cart-link" href="cart.html" title="Cart">
                                    <span class="mini-cart-icon title18 white"><i class="icon ion-bag"></i></span>
                                    <span class="mini-cart-text">
											<span class="mini-cart-number">4</span>
											<span class="mini-cart-total-price hidden">$80.00</span>
										</span>
                                </a>
                                <div class="mini-cart-content text-left">
                                    <h2 class="title18 font-bold">(4) ITEMS IN MY CART</h2>
                                    <div class="list-mini-cart-item">
                                        <div class="product-mini-cart table-custom">
                                            <div class="product-thumb">
                                                <a href="detail.html" class="product-thumb-link"><img alt="" src="images/photos/glasses/dl-store-glasse-01.jpg"></a>
                                            </div>
                                            <div class="product-info">
                                                <h3 class="title14 product-title play-font"><a href="#">D&amp;L SO REAL POP SUNGLASSES pink</a></h3>
                                                <div class="mini-cart-qty">
                                                    <span>1 x $40.00</span>
                                                </div>
                                            </div>
                                            <div class="product-delete text-right">
                                                <a href="#" class="remove-product"><i class="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-mini-cart table-custom">
                                            <div class="product-thumb">
                                                <a href="detail.html" class="product-thumb-link"><img alt="" src="images/photos/glasses/dl-store-glasse-03.jpg"></a>
                                            </div>
                                            <div class="product-info">
                                                <h3 class="title14 product-title play-font"><a href="#">D&amp;L SO REAL POP SUNGLASSES Yellow</a></h3>
                                                <div class="mini-cart-qty">
                                                    <span>1 x $40.00</span>
                                                </div>
                                            </div>
                                            <div class="product-delete text-right">
                                                <a href="#" class="remove-product"><i class="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-mini-cart table-custom">
                                            <div class="product-thumb">
                                                <a href="detail.html" class="product-thumb-link"><img alt="" src="images/photos/glasses/dl-store-glasse-10.jpg"></a>
                                            </div>
                                            <div class="product-info">
                                                <h3 class="title14 product-title play-font"><a href="#">D&amp;L SO REAL POP SUNGLASSES black</a></h3>
                                                <div class="mini-cart-qty">
                                                    <span>1 x $40.00</span>
                                                </div>
                                            </div>
                                            <div class="product-delete text-right">
                                                <a href="#" class="remove-product"><i class="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-mini-cart table-custom">
                                            <div class="product-thumb">
                                                <a href="detail.html" class="product-thumb-link"><img alt="" src="images/photos/glasses/dl-store-glasse-02.jpg"></a>
                                            </div>
                                            <div class="product-info">
                                                <h3 class="title14 product-title play-font"><a href="#">D&amp;L SO REAL POP SUNGLASSES blue</a></h3>
                                                <div class="mini-cart-qty">
                                                    <span>1 x $40.00</span>
                                                </div>
                                            </div>
                                            <div class="product-delete text-right">
                                                <a href="#" class="remove-product"><i class="fa fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mini-cart-total text-uppercase title18 font-bold clearfix">
                                        <span class="pull-left">TOTAL</span>
                                        <strong class="pull-right color play-font mini-cart-total-price">$160.00</strong>
                                    </div>
                                    <div class="mini-cart-button">
                                        <a class="mini-cart-view shop-button" href="#">View cart </a>
                                        <a class="mini-cart-checkout shop-button" href="#">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>