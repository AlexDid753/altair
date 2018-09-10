@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="container">
            <div class="banner-slider banner-jewelry3">
                <div class="wrap-item" data-navigation="true" data-transition="fade" data-itemscustom="[[0,1]]">
                    <div class="item-slider item-slider2">
                        <div class="banner-thumb">
                            <a href="{{$model->href1}}"><img src="{{$model->image1}}" alt="" /></a>
                        </div>
                        <div class="banner-info animated text-center" data-animated="zoomIn">
                            <h2 class="title48 play-font font-normal text-uppercase dark">{{$model->text_img1}}</h2>
                            <h3 class="title18 play-font font-italic dark">Open-Link Bracelets</h3>
                            <a href="#" class="border-button dark title18">Shop now</a>
                        </div>
                    </div>
                    <div class="item-slider item-slider2">
                        <div class="banner-thumb">
                            <a href="#"><img src="images/home/jewelry3/slide2.jpg" alt="" /></a>
                        </div>
                        <div class="banner-info animated text-center" data-animated="bounceIn">
                            <h2 class="title48 play-font font-normal text-uppercase dark">Tucson & Miami</h2>
                            <h3 class="title18 play-font font-italic dark">Bought Jewelry Box</h3>
                            <a href="#" class="border-button dark title18">Shop now</a>
                        </div>
                    </div>
                    <div class="item-slider item-slider2">
                        <div class="banner-thumb">
                            <a href="#"><img src="images/home/jewelry3/slide3.jpg" alt="" /></a>
                        </div>
                        <div class="banner-info animated text-center" data-animated="tada">
                            <h2 class="title48 play-font font-normal text-uppercase dark">Moon & Neo</h2>
                            <h3 class="title18 play-font font-italic dark">Diamond Jewelry</h3>
                            <a href="#" class="border-button dark title18">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-banner-jewelry3">
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="item-banner-jewelry3 banner-adv zoom-rotate fade-out-in">
                            <a href="{{$model->href2}}" class="adv-thumb-link"><img src="{{$model->image2}}" alt="" />
                                <div class="banner-info">
                                    <h3 class="title30 play-font dark font-italic">{{$model->text_img2}}</h3>
                                </div>
                            </a>
                        </div>
                        <div class="item-banner-jewelry3 banner-adv zoom-image line-scale style2">
                            <a href="{{$model->href3}}" class="adv-thumb-link"><img src="{{$model->image3}}" alt="" />
                                <div class="banner-info">
                                    <h3 class="title30 play-font dark font-italic">{{$model->text_img3}}</h3>
                                        <h3 class="title18 play-font dark">Upto 50% off</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <div class="item-banner-jewelry3 banner-adv zoom-image line-scale style2">
                            <a href="{{$model->href4}}" class="adv-thumb-link"><img src="{{$model->image4}}" alt="" />
                                <div class="banner-info">
                                    <h3 class="title30 play-font dark font-italic">{{$model->text_img4}}</h3>
                                        <h3 class="title18 play-font dark">Upto 80% off</h3>
                                </div>
                            </a>
                        </div>
                        <div class="item-banner-jewelry3 banner-adv zoom-rotate fade-out-in">
                            <a href="{{$model->href5}}" class="adv-thumb-link"><img src="{{$model->image5}}" alt="" />
                                <div class="banner-info">
                                    <h3 class="title30 play-font dark font-italic">{{$model->text_img5}}</h3>
                                        <h8 class="title18 play-font dark">$290.00 - $675.00</h8>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

