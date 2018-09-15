@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="wrap-bread-crumb">
            <div class="container">
                <div class="bread-crumb">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <span>Clothing</span>
                </div>
            </div>
        </div>
        <!-- End Bread Crumb -->
        <div class="content-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content-page-detail">
                            <div class="product-detail detail-full-width">
                                <div class="row">
                                    <div class="col-md-5 col-sm-12 col-xs-12">
                                        <div class="detail-gallery vertical">
                                            <div class="mid">
                                                <img src="images/photos/jewelry/dark-light-jewelry-01.jpg" alt=""/>
                                            </div>
                                            <div class="gallery-control">
                                                <a href="#" class="prev"><i class="fa fa-angle-left"></i></a>
                                                <div class="carousel" data-visible="6" data-vertical="true">
                                                    <ul class="list-none">
                                                        <li><a href="#" class="active"><img src="images/photos/jewelry/dark-light-jewelry-01.jpg" alt=""/></a></li>
                                                        <li><a href="#"><img src="images/photos/jewelry/dark-light-jewelry-02.jpg" alt=""/></a></li>
                                                        <li><a href="#"><img src="images/photos/jewelry/dark-light-jewelry-03.jpg" alt=""/></a></li>
                                                        <li><a href="#"><img src="images/photos/jewelry/dark-light-jewelry-04.jpg" alt=""/></a></li>
                                                        <li><a href="#"><img src="images/photos/jewelry/dark-light-jewelry-05.jpg" alt=""/></a></li>
                                                        <li><a href="#"><img src="images/photos/jewelry/dark-light-jewelry-06.jpg" alt=""/></a></li>
                                                        <li><a href="#"><img src="images/photos/jewelry/dark-light-jewelry-07.jpg" alt=""/></a></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="next"><i class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                        <!-- End Gallery -->
                                        <div class="detail-share-social text-center">
                                            <span>Share</span>
                                            <a href="#" class="float-shadow"><img src="images/icon/icon-email.png" alt="" /></a>
                                            <a href="#" class="float-shadow"><img src="images/icon/icon-facebook.png" alt="" /></a>
                                            <a href="#" class="float-shadow"><img src="images/icon/icon-twitter.png" alt="" /></a>
                                            <a href="#" class="float-shadow"><img src="images/icon/icon-pinterest.png" alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-sm-12 col-xs-12">
                                        <div class="detail-info">
                                            <h2 class="product-title title24 text-uppercase dark font-bold play-font">{{$model->title}}</h2>
                                            <div class="product-price play-font">
                                                <del class="dark opaci title14">$84.00</del>
                                                <ins class="title18 color font-bold">$37.00</ins>
                                            </div>
                                            <p class="desc product-desc">Our urban and streetwear fashion place is no Old Navy, Banana Republic or a Walmart clothing store, God forbid. We've quickly become the Iowa's and Midwest's biggest online retailers. </p>

                                            <div class="detail-extra-link">
                                                <a href="#" class="wishlist-link"><i class="fa {{$model->isLiked() ? 'fa-heart' : 'fa-heart-o'}}" data-slug="{{$model->slug}}"></i><span>{{$model->isLiked() ? 'Удалить из избранного' : 'Добавить в избранное'}}</span></a>
                                            </div>
                                            <ul class="list-none product-meta-info">
                                                <li>
                                                    <div class="item-product-meta-info product-code-info">
                                                        <label>Артикул:</label>
                                                        <span>SUK01</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="item-product-meta-info product-available-info">
                                                        <label>Наличие:</label>
                                                        <span>В наличии</span>
                                                    </div>
                                                </li>
                                                @if ($model->categories()->exists())
                                                    <li>
                                                        <div class="item-product-meta-info product-category-info">
                                                            <label>Категории:</label>
                                                            @foreach($model->categories()->get() as $category)
                                                                <a href="{{$category->url}}">{{$category->name}}</a>
                                                            @endforeach
                                                        </div>
                                                    </li>
                                                @endif
                                            </ul>
                                            <div class="product-control">
                                                <a href="#" class="prev"><i class="fa fa-long-arrow-left"></i></a>
                                                <a href="#" class="next"><i class="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Product Detail -->
                            @if(count($products_recently_viewed))
                                <div class="related-tabs">
                                <ul class="list-inline-block related-tab-title font-bold text-uppercase play-font">
                                    <li class="active">Недавно просмотренные товары</li>
                                </ul>
                                <div class="tab-content">
                                    <div id="ral1" class="tab-pane active">
                                        <div class="product-slider">
                                            <div class="wrap-item group-navi" data-pagination="false" data-navigation="true" data-itemscustom="[[0,1],[560,2],[990,3]]">
                                                @each( 'shared.product_preview_big', $products_recently_viewed, 'model' )
                                            </div>
                                        </div>
                                    </div>
                                    <div id="ral2" class="tab-pane">
                                        <div class="product-slider">
                                            <div class="wrap-item group-navi" data-pagination="false" data-navigation="true" data-itemscustom="[[0,1],[560,2],[990,3]]">
                                                <div class="item-product item-product4 text-center border">
                                                    <div class="product-thumb">
                                                        <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-07.jpg" alt=""></a>
                                                        <a href="quick-view.html" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
                                                    </div>
                                                    <div class="product-info">
                                                        <h3 class="title14 product-title"><a href="#" class="black">Blue ring in ged palladium</a></h3>
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
                                                <div class="item-product item-product4 text-center border">
                                                    <div class="product-thumb">
                                                        <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-08.jpg" alt=""></a>
                                                        <a href="quick-view.html" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
                                                    </div>
                                                    <div class="product-info">
                                                        <h3 class="title14 product-title"><a href="#" class="black">Blue ring in ged palladium</a></h3>
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
                                                <div class="item-product item-product4 text-center border">
                                                    <div class="product-thumb">
                                                        <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-09.jpg" alt=""></a>
                                                        <a href="quick-view.html" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
                                                    </div>
                                                    <div class="product-info">
                                                        <h3 class="title14 product-title"><a href="#" class="black">Blue ring in ged palladium</a></h3>
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
                                                <div class="item-product item-product4 text-center border">
                                                    <div class="product-thumb">
                                                        <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-10.jpg" alt=""></a>
                                                        <a href="quick-view.html" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
                                                    </div>
                                                    <div class="product-info">
                                                        <h3 class="title14 product-title"><a href="#" class="black">Blue ring in ged palladium</a></h3>
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
                                                <div class="item-product item-product4 text-center border">
                                                    <div class="product-thumb">
                                                        <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-11.jpg" alt=""></a>
                                                        <a href="quick-view.html" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
                                                    </div>
                                                    <div class="product-info">
                                                        <h3 class="title14 product-title"><a href="#" class="black">Blue ring in ged palladium</a></h3>
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
                                                <div class="item-product item-product4 text-center border">
                                                    <div class="product-thumb">
                                                        <a href="#" class="product-thumb-link zoom-thumb"><img src="images/photos/jewelry/dark-light-jewelry-12.jpg" alt=""></a>
                                                        <a href="quick-view.html" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
                                                    </div>
                                                    <div class="product-info">
                                                        <h3 class="title14 product-title"><a href="#" class="black">Blue ring in ged palladium</a></h3>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endif
                            <!-- End Related Tabs -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
