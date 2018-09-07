@extends('layouts.app')

@section('content')
    <section id="content">

        <div class="banner-slider5 banner-slider bg-slider parallax-slider">
            <div class="wrap-item" data-navigation="true" data-transition="fade" data-itemscustom="[[0,1]]">
                <div class="item-slider item-slider2">
                    <div class="banner-thumb">
                        <a href="#"><img src="images/home/jewelry5/banner.jpg" alt="" /></a>
                    </div>
                    <div class="banner-info">
                        <div class="banner-info-text text-center animated" data-animated="zoomIn">
                            <h2 class="title48 play-font font-bold text-uppercase white">up to 45% off</h2>
                            <h3 class="title18 play-font font-italic white">This unique jewelry is handcrafted on the beautiful island of Nantucket using fine silver and semi precious stones.</h3>
                            <a href="#" class="border-button white title18">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Content Top -->

        <div class="container">
            <div class="content-top-jewelry5 bg-white">
                <div class="list-banner-jewelry5">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="item-banner-jewelry3 banner-adv zoom-image line-scale style2">
                                <a href="#" class="adv-thumb-link"><img src="images/home/jewelry5/ads1.jpg" alt=""></a>
                                <div class="banner-info">
                                    <h2 class="title30 play-font dark font-italic">Diamond Ring</h2>
                                    <h3 class="title18 play-font dark text-uppercase">Upto 10% off</h3>
                                    <a href="#" class="link-arrow dark wobble-horizontal">Shop now</a>
                                </div>
                            </div>
                            <div class="item-banner-jewelry3 banner-adv zoom-image line-scale style2">
                                <a href="#" class="adv-thumb-link"><img src="images/home/jewelry5/ads2.jpg" alt=""></a>
                                <div class="banner-info">
                                    <h2 class="title30 play-font dark font-italic">Necklaces</h2>
                                    <h3 class="title18 play-font dark text-uppercase">Upto 35% off</h3>
                                    <a href="#" class="link-arrow dark wobble-horizontal">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="item-banner-jewelry3 banner-adv zoom-image line-scale style2">
                                <a href="#" class="adv-thumb-link"><img src="images/home/jewelry5/ads3.jpg" alt=""></a>
                                <div class="banner-info">
                                    <h2 class="title30 play-font dark font-italic">Save 40% Off</h2>
                                    <h3 class="title18 play-font dark text-uppercase">All Products</h3>
                                    <a href="#" class="link-arrow dark wobble-horizontal">Shop now</a>
                                </div>
                            </div>
                            <div class="item-banner-jewelry3 banner-adv zoom-image line-scale style2">
                                <a href="#" class="adv-thumb-link"><img src="images/home/jewelry5/ads4.jpg" alt=""></a>
                                <div class="banner-info">
                                    <h2 class="title30 play-font dark font-italic">Big Sale!</h2>
                                    <h3 class="title18 play-font dark text-uppercase">Upto 80% off</h3>
                                    <a href="#" class="link-arrow dark wobble-horizontal">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-product-jewelry4">
                    <h2 class="title24 dark play-font font-italic">Самое продаваемое</h2>
                    <div class="box-best-seller9">
                        <ul class="list-inline-block title-list-tab text-left style-white">
                            <li class="active"><a href="#tab1" data-toggle="tab">Тестовая активная таба</a></li>
                            @foreach($categories as $category)
                                <li class=""><a href="#tab1" data-toggle="tab">{{$category->name}}</a></li>
                            @endforeach
                        </ul>
                        <div class="tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="product-slider">
                                    <div class="wrap-item hide-navi" data-pagination="false" data-navigation="true" data-itemscustom="[[0,1],[560,2],[768,3],[990,4]]">
                                        @foreach($products as $product)
                                            <div class="item-product item-product4 text-center border">
                                                <div class="product-thumb">
                                                    <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-01.jpg" alt=""></a>
                                                    <a href="quick-view.html" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
                                                </div>
                                                <div class="product-info">
                                                    <h3 class="title14 product-title"><a href="#" class="black">{{$product->title}}</a></h3>
                                                    <div class="product-price title14 play-font">
                                                        <del class="silver">$601.00 &#8381;</del>
                                                        <ins class="black title18">400.67 &#8381;</ins>
                                                    </div>
                                                    <ul class="wrap-rating list-inline-block">
                                                        <li>
                                                            <div class="product-rate">
                                                                <div class="product-rating" style="width:100%"></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span class="rate-number silver">(5.0)</span>
                                                        </li>
                                                    </ul>
                                                    <div class="product-extra-link4 title18">
                                                        <a href="compare-product.html" class="compare-link inline-block black fancybox fancybox.iframe"><i class="icon ion-ios-loop-strong"></i><span class="title10 white text-uppercase">Compare</span></a>
                                                        <a href="#" class="addcart-link black inline-block"><i class="icon ion-bag"></i><span class="title10 white text-uppercase">Add to cart</span></a>
                                                        <a href="#" class="wishlist-link black inline-block"><i class="icon ion-android-favorite-outline"></i><span class="title10 white text-uppercase">Wishlist</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Best Seller -->
        <div class="testimo-jewelry2 testimo-jewelry5 parallax" data-image="images/home/jewelry2/parallax.jpg">
            <div class="container">
                <div class="title-box2 text-center">
                    <h2 class="title24 white play-font font-italic">What People Say</h2>
                    <img src="images/home/jewelry2/line-white.png" alt="" />
                </div>
                <div class="testimo-slider2">
                    <div class="wrap-item" data-navigation="true" data-transition="fade" data-autoplay="true" data-itemscustom="[[0,1]]">
                        <div class="item-testimo2 text-center">
                            <p class="desc white play-font font-italic">These guys have been absolutely outstanding. When I needed them they came through in a big way! I know that if you buy this theme, you'll get the one thing we all look for when we buy on Themeforest, and that's real support for the craziest of requests! I highly recommend this theme and these people!</p>
                            <h3 class="title18 font-bold play-font"><a href="#" class="white">Linh Rua Nguyen</a></h3>
                            <span class="opacity white">Css Html Development</span>
                        </div>
                        <div class="item-testimo2 text-center">
                            <p class="desc white play-font font-italic">I know that if you buy this theme, you'll get the one thing we all look for when we buy on Themeforest, and that's real support for the craziest of requests! I highly recommend this theme and these people! These guys have been absolutely outstanding. When I needed them they came through in a big way! </p>
                            <h3 class="title18 font-bold play-font"><a href="#" class="white">Bach Mai Xuan</a></h3>
                            <span class="opacity white">Php Wordpress Development</span>
                        </div>
                        <div class="item-testimo2 text-center">
                            <p class="desc white play-font font-italic">These guys have been absolutely outstanding. When I needed them they came through in a big way! I know that if you buy this theme, you'll get the one thing we all look for when we buy on Themeforest, and that's real support for the craziest of requests! I highly recommend this theme and these people!</p>
                            <h3 class="title18 font-bold play-font"><a href="#" class="white">Linh Rua Nguyen</a></h3>
                            <span class="opacity white">Css Html Development</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="block-popular-product4 block-popular-product5 bg-white">
                <h2 class="title24 play-font font-italic dark">Самые популярные товары</h2>
                <div class="product-slider">
                    <div class="wrap-item group-navi" data-pagination="false" data-navigation="true" data-itemscustom="[[0,1],[560,2],[990,3]]">
                        @php
                            $groups_count = round_up(count($products) / 3, 0);
                            $product_groups = $products->split($groups_count);
                        @endphp
                        @foreach($product_groups as $group)
                            <div class="list-item">
                                @foreach($group as $product)
                                    <div class="item-product item-product4 table-custom">
                                        <div class="product-thumb">
                                            <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-01.jpg" alt=""></a>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="title14 product-title"><a href="#" class="black">{{$product->title}}</a></h3>
                                            <div class="product-price title14 play-font">
                                                <del class="silver">$601.00</del>
                                                <ins class="black title18">$400.67</ins>
                                            </div>
                                            <ul class="wrap-rating list-inline-block">
                                                <li>
                                                    <div class="product-rate">
                                                        <div class="product-rating" style="width:100%"></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span class="rate-number silver">(5.0)</span>
                                                </li>
                                            </ul>
                                            <div class="product-extra-link4 title18">
                                                <a href="compare-product.html" class="compare-link inline-block black fancybox fancybox.iframe"><i class="icon ion-ios-loop-strong"></i><span class="title10 white text-uppercase">Compare</span></a>
                                                <a href="#" class="addcart-link black inline-block"><i class="icon ion-bag"></i><span class="title10 white text-uppercase">Add to cart</span></a>
                                                <a href="#" class="wishlist-link black inline-block"><i class="icon ion-android-favorite-outline"></i><span class="title10 white text-uppercase">Wishlist</span></a>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="list-jewelry-collect5">
                <div class="row">
                    <div class="col-sm-8 col-xs-12">
                        <div class="banner-adv banner-countdown gray-image zoom-image jewelry-coundown2">
                            <a href="#" class="adv-thumb-link"><img src="images/home/jewelry2/deal.jpg" alt="" /></a>
                            <div class="banner-info text-center">
                                <div class="time-countdown timer-banner" data-date="12/12/2019" data-text='["Day","Hour","Min","Sec"]' data-color="#fff" data-bg="rgba(255,0255,255,0.5)" data-width="0.03"></div>
                                <h3 class="title18 white font-italic play-font">Deals of the day</h3>
                                <h2 class="title30 white text-uppercase play-font">upto 60% off</h2>
                                <a href="#" class="link-arrow text-uppercase white wobble-horizontal">Shop all</a>
                            </div>
                        </div>
                        <!-- End Banner -->
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="banner-adv diamond-collect banner-adv2 zoom-out line-scale">
                            <a href="#" class="adv-thumb-link">
                                <img src="images/home/jewelry5/diamond.jpg" alt="">
                                <img src="images/home/jewelry5/diamond.jpg" alt="">
                            </a>
                            <div class="banner-info">
                                <h3 class="title18 white font-italic play-font">Diamond</h3>
                                <h2 class="title30 white text-uppercase play-font">collection</h2>
                                <a href="#" class="link-arrow text-uppercase white wobble-horizontal">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block-cate2">
                <div class="title-box2 text-center">
                    <h2 class="title24 dark play-font font-italic">Популярные категории</h2>
                    <img src="images/home/jewelry2/line-black.png" alt="" />
                </div>
                <div class="list-cat2">
                    <div class="row">
                        @foreach($categories as $category)
                            <div class="col-md-3 col-sm-6 col-xs-6">
                                <div class="item-cat2 text-center bg-white">
                                    <div class="cat-thumb"><a href="#"><img src="images/home/jewelry2/cat1.png" alt="" /></a></div>
                                    <div class="cat-info">
                                        <h3 class="title18 dark play-font font-italic">{{$category->name}}</h3>
                                        <p class="desc dark opacity">Ring with Diamonds</p>
                                        <a href="{{$category->url}}" class="link-circle title18"><i class="icon ion-ios-arrow-thin-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                        <div class="col-md-3 col-sm-6 col-xs-6">
                            <div class="item-cat2 text-center bg-white">
                                <div class="cat-thumb"><a href="#"><img src="images/home/jewelry2/cat2.png" alt="" /></a></div>
                                <div class="cat-info">
                                    <h3 class="title18 dark play-font font-italic">Necklaces</h3>
                                    <p class="desc dark opacity">Diamonds & Sapphires</p>
                                    <a href="#" class="link-circle title18"><i class="icon ion-ios-arrow-thin-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-6">
                            <div class="item-cat2 text-center bg-white">
                                <div class="cat-thumb"><a href="#"><img src="images/home/jewelry2/cat3.png" alt="" /></a></div>
                                <div class="cat-info">
                                    <h3 class="title18 dark play-font font-italic">Earrings</h3>
                                    <p class="desc dark opacity">Drop Pendant</p>
                                    <a href="#" class="link-circle title18"><i class="icon ion-ios-arrow-thin-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-6">
                            <div class="item-cat2 text-center bg-white">
                                <div class="cat-thumb"><a href="#"><img src="images/home/jewelry2/cat4.png" alt="" /></a></div>
                                <div class="cat-info">
                                    <h3 class="title18 dark play-font font-italic">Bracelets</h3>
                                    <p class="desc dark opacity">Gold & Diamonds</p>
                                    <a href="#" class="link-circle title18"><i class="icon ion-ios-arrow-thin-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Block Cate -->
            <div class="block-latest-post2">
                <div class="title-box2 text-center">
                    <h2 class="title24 dark play-font font-italic">Latest News Frorm Blog</h2>
                    <img src="images/home/jewelry2/line-black.png" alt="" />
                </div>
                <div class="post-slider post-slider1 text-center">
                    <div class="wrap-item" data-pagination="false" data-itemscustom="[[0,1],[640,2],[990,3]]">
                        <div class="item-post item-post-grid">
                            <div class="post-thumb banner-adv zoom-image overlay-image">
                                <a href="#" class="adv-thumb-link"><img src="images/photos/blog/dark-light-store-blog-01.jpg" alt=""></a>
                            </div>
                            <div class="post-info">
                                <h3 class="title18 play-font font-italic post-title"><a href="#" class="dark">Slide image Post format</a></h3>
                                <ul class="list-inline-block post-meta-data">
                                    <li><a href="#comment" class="dark opacity"><i class="fa fa-comment"></i>5 Comments</a></li>
                                    <li><span class="dark opacity"><i class="fa fa-calendar"></i>Dec.09.2018</span></li>
                                </ul>
                                <p class="desc dark opaci">Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros pellentesque</p>
                                <a href="#" class="shop-button bg-white">Read more</a>
                            </div>
                        </div>
                        <div class="item-post item-post-grid">
                            <div class="post-thumb banner-adv zoom-image overlay-image">
                                <a href="#" class="adv-thumb-link"><img src="images/photos/blog/dark-light-store-blog-02.jpg" alt=""></a>
                            </div>
                            <div class="post-info">
                                <h3 class="title18 play-font font-italic post-title"><a href="#" class="dark">Slide image Post format</a></h3>
                                <ul class="list-inline-block post-meta-data">
                                    <li><a href="#comment" class="dark opacity"><i class="fa fa-comment"></i>5 Comments</a></li>
                                    <li><span class="dark opacity"><i class="fa fa-calendar"></i>Dec.09.2018</span></li>
                                </ul>
                                <p class="desc dark opaci">Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros pellentesque</p>
                                <a href="#" class="shop-button bg-white">Read more</a>
                            </div>
                        </div>
                        <div class="item-post item-post-grid">
                            <div class="post-thumb banner-adv zoom-image overlay-image">
                                <a href="#" class="adv-thumb-link"><img src="images/photos/blog/dark-light-store-blog-03.jpg" alt=""></a>
                            </div>
                            <div class="post-info">
                                <h3 class="title18 play-font font-italic post-title"><a href="#" class="dark">Slide image Post format</a></h3>
                                <ul class="list-inline-block post-meta-data">
                                    <li><a href="#comment" class="dark opacity"><i class="fa fa-comment"></i>5 Comments</a></li>
                                    <li><span class="dark opacity"><i class="fa fa-calendar"></i>Dec.09.2018</span></li>
                                </ul>
                                <p class="desc dark opaci">Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros pellentesque</p>
                                <a href="#" class="shop-button bg-white">Read more</a>
                            </div>
                        </div>
                        <div class="item-post item-post-grid">
                            <div class="post-thumb banner-adv zoom-image overlay-image">
                                <a href="#" class="adv-thumb-link"><img src="images/photos/blog/dark-light-store-blog-04.jpg" alt=""></a>
                            </div>
                            <div class="post-info">
                                <h3 class="title18 play-font font-italic post-title"><a href="#" class="dark">Slide image Post format</a></h3>
                                <ul class="list-inline-block post-meta-data">
                                    <li><a href="#comment" class="dark opacity"><i class="fa fa-comment"></i>5 Comments</a></li>
                                    <li><span class="dark opacity"><i class="fa fa-calendar"></i>Dec.09.2018</span></li>
                                </ul>
                                <p class="desc dark opaci">Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros pellentesque</p>
                                <a href="#" class="shop-button bg-white">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Post Slider -->
            </div>
            <!-- End Latest Post -->
        </div>
    </section>
@endsection

