@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="container">
            <div class="banner-slider banner-jewelry3">
                <div class="wrap-item" data-navigation="true" data-transition="fade" data-itemscustom="[[0,1]]">
                    @foreach($model->slider_linked_images as $slider_item)
                        <div class="item-slider item-slider2">
                            <div class="banner-thumb">
                                <a href="{{$slider_item->link ?? ''}}"><img src="{{resize($slider_item->image,1170,560)}}" alt="" /></a>
                            </div>
                            <div class="banner-info animated text-center" data-animated="zoomIn" data-number='{{$slider_item->sort}}'>
                                <h2 class="title48 play-font font-normal dark">{{$slider_item->title ?? ''}}</h2>
                                <h3 class="title18 play-font font-italic dark">{{$slider_item->desc ?? ''}}</h3>
                                <a href="{{$slider_item->link ?? ''}}" class="border-button dark title18">Перейти</a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="list-banner-jewelry3">
                <div class="row">
                    @foreach($model->previews_linked_images as $preview)
                        <div class="col-sm-6 col-xs-12">
                            <div class="item-banner-jewelry3
                                <?php
                                    if ($loop->iteration % 3 != 0 && $loop->iteration != 1) {
                                        echo 'zoom-rotate fade-out-in';
                                    }else {
                                        echo 'zoom-image line-scale style2';
                                    }
                                ?>
                                 ">
                                <a href="{{$preview->link}}" class="adv-thumb-link"><img src="{{resize($preview->image, 575,383)}}" alt="{{$preview->title ?? ''}}" />
                                    <div class="banner-info">
                                        <h3 class="title30 play-font dark font-italic">{{$preview->title ?? ''}}</h3>
                                        <h3 class="title18 play-font dark">{{$preview->desc ?? ''}}</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endsection

