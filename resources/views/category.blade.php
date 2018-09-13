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
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="sidebar sidebar-left">
                            <div class="widget widget-search">
                                <h2 class="widget-title title14 font-bold text-uppercase play-font">Поиск</h2>
                                <form class="wg-search-form" method="get">
                                    <input type="text" name="s" placeholder="Поиск.." />
                                    <input type="submit" value=""/>
                                </form>
                            </div>
                            <!-- End Widget -->
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-8 col-xs-12">
                        <div class="content-blog-page shop-boxed-banner">
                            <div class="title-page">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1 class="title30 font-bold text-uppercase pull-left play-font dark">{{$model->name}}</h1>
                                    </div>
                                </div>
                            </div>
                            @if(count($subcategories))
                                <div class="row">
                                    @each('shared.subcategory_preview', $subcategories, 'model')
                                </div>
                            @endif
                            <div class="product-grid-view">
                                <div class="row">
                                    @each('shared.product_preview', $products, 'model')
                                </div>
                                <div class="pagi-nav text-right">
                                    <a href="#" class="current">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#" class="next"><i class="fa fa-angle-right"></i></a>
                                </div>
                                <!-- End Paginav -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
