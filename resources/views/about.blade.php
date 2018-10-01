@extends('layouts.app')

@section('content')
    <section id="content">
    <div class="content-page">
        <div class="container">
            <div class="content-about">
                <h2 class="title30 play-font text-uppercase dark font-bold">{{$model->name}}</h2>
                <p class="desc">{!! $model->text !!}</p>
                <p class="blockquote">
                    {!! $model->phrase !!}
                </p>
                <div class="about-client">
                    <h2 class="title18 play-font text-uppercase dark  font-bold">Отзывы</h2>
                    <div class="about-client-slider">
                        <div class="wrap-item" data-autoplay="true" data-pagination="false" data-itemscustom="[[0,1],[560,2],[990,3]]">
                            @if(isset($model->reviews) && count($model->reviews))
                                @foreach($model->reviews as $review)
                                    <div class="item-about-client">
                                        <div class="client-thumb"><img src="{{resize($review->image, 70,70)}}" alt="" /></div>
                                        <div class="client-info">
                                            <p class="desc">{{$review->text}}</p>
                                            <h3 class="title14 text-uppercase play-font"><a href="#" class="dark">{{$review->name}}</a></h3>
                                            <span class="silver">{{$review->position}}</span>
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                        </div>
                    </div>
                </div>
                <!-- End Client -->
                <div class="about-service">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="item-about-service text-center white" style="background:#f4ca49">
                                <a href="#" class="wobble-horizontal"><i class="fa fa-gift"></i></a>
                                <h2 class="title30">Gift Card</h2>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="item-about-service text-center white" style="background:#ff607c">
                                <a href="#" class="wobble-horizontal"><i class="fa fa-home"></i></a>
                                <h2 class="title30">Store</h2>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="item-about-service text-center white" style="background:#37436d">
                                <a href="#" class="wobble-horizontal"><i class="fa fa-life-bouy"></i></a>
                                <h2 class="title30">Full Support</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection