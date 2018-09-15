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
                    @if(count($subcategories))
                        <div class="block-cate2">
                            <div class="title-box2 text-center">
                                <h2 class="title24 dark play-font font-italic">Подкатегории</h2>
                                <img src="images/home/jewelry2/line-black.png" alt="">
                            </div>
                            <div class="list-cat2">
                                <div class="row">
                                    @each('shared.subcategory_preview', $subcategories, 'model')
                                </div>
                            </div>
                        </div>
                    @endif
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
                            <div class="product-grid-view">
                                <div class="row">
                                    @each('shared.product_preview', $products, 'model')
                                </div>
                                <?php echo $products->links('shared.pagination'); ?>
                                <!-- End Paginav -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
