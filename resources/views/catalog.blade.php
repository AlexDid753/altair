@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="wrap-bread-crumb">
            <div class="container">
                <div class="bread-crumb">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <strong>Clothing</strong>
                </div>
            </div>
        </div>
        <!-- End Bread Crumb -->
        <div class="content-page">
            <div class="container">
                <div class="row">
                    @if(count($models))
                        <div class="block-cate2">
                            <div class="title-box2 text-center">
                                <h2 class="title24 dark play-font font-italic">Категории товаров</h2>
                                <img src="images/home/jewelry2/line-black.png" alt="">
                            </div>
                            <div class="list-cat2">
                                <div class="row">
                                    @each('shared.subcategory_preview', $models, 'model')
                                </div>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </section>
@endsection
