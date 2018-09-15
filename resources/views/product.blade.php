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
                                                <img src="{{$images[0]->image}}" alt=""/>
                                            </div>
                                            <div class="gallery-control">
                                                <a href="#" class="prev"><i class="fa fa-angle-left"></i></a>
                                                <div class="carousel" data-visible="6" data-vertical="true">
                                                    <ul class="list-none">
                                                        @foreach($images as $key => $image)
                                                            <li><a href="#" {{ $key==0? 'class=active' : '' }}><img src="{{$image->image}}" alt=""/></a></li>
                                                        @endforeach
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
                            @include('blocks.recently_viewed_products')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
