@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="container">
            <div class="banner-slider banner-jewelry3">
                <div class="wrap-item" data-navigation="true" data-transition="fade" data-itemscustom="[[0,1]]">
                    @foreach($model->slider_linked_images as $slider_item)
                        <div class="item-slider item-slider2">
                            <div class="banner-thumb">
                                <a href="{{$slider_item->link or ''}}"><img src="{{resize($slider_item->image,1170,560)}}" alt="" /></a>
                            </div>
                            <div class="banner-info animated text-center" data-animated="zoomIn">
                                <h2 class="title48 play-font font-normal text-uppercase dark">{{$slider_item->title or ''}}</h2>
                                <h3 class="title18 play-font font-italic dark">{{$slider_item->desc or ''}}</h3>
                                <a href="{{$slider_item->link or ''}}" class="border-button dark title18">Перейти</a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="list-banner-jewelry3">
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="item-banner-jewelry3 zoom-rotate fade-out-in">
                            <a href="{{$model->href2}}" class="adv-thumb-link"><img src="{{resize($model->image2, 575,383)}}" alt="" />
                                <div class="banner-info">
                                    <h3 class="title30 play-font dark font-italic">{{$model->text_img2}}</h3>
                                </div>
                            </a>
                        </div>
                        <div class="item-banner-jewelry3 zoom-image line-scale style2">
                            <a href="{{$model->href3}}" class="adv-thumb-link"><img src="{{resize($model->image3, 575,383)}}" alt="" />
                                <div class="banner-info">
                                    <h3 class="title30 play-font dark font-italic">{{$model->text_img3}}</h3>
                                        <h3 class="title18 play-font dark">Upto 50% off</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <div class="item-banner-jewelry3 zoom-image line-scale style2">
                            <a href="{{$model->href4}}" class="adv-thumb-link"><img src="{{resize($model->image4, 575,383)}}" alt="" />
                                <div class="banner-info">
                                    <h3 class="title30 play-font dark font-italic">{{$model->text_img4}}</h3>
                                        <h3 class="title18 play-font dark">Upto 80% off</h3>
                                </div>
                            </a>
                        </div>
                        <div class="item-banner-jewelry3 zoom-rotate fade-out-in">
                            <a href="{{$model->href5}}" class="adv-thumb-link"><img src="{{resize($model->image5, 575,383)}}" alt="" />
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

