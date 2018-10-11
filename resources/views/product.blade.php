@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="content-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content-page-detail">
                            <div class="product-detail detail-full-width">
                                <div class="row">
                                    @if(count($images))
                                        <div class="col-md-5 col-sm-12 col-xs-12">
                                            <div class="detail-gallery vertical">
                                                <div class="mid">
                                                    <img src="{{empty($images)? : resize($images[0]->image, 700, 700)}}"
                                                         alt=""/>
                                                </div>
                                                <div class="gallery-control">
                                                    <a href="#" class="prev"><i class="fa fa-angle-left"></i></a>
                                                    <div class="carousel" data-visible="6" data-vertical="true">
                                                        <ul class="list-none">
                                                            @foreach($images as $key => $image)
                                                                <li><a href="#" {{ $key==0? 'class=active' : '' }}><img
                                                                                src="{{resize($image->image, 700, 700)}}"
                                                                                alt=""/></a></li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                    <a href="#" class="next"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                            <!-- End Gallery -->
                                            <div class="detail-share-social text-center">
                                                <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
                                                <script src="//yastatic.net/share2/share.js"></script>
                                                <div class="ya-share2" data-services="collections,vkontakte,facebook,twitter,odnoklassniki,moimir,viber,whatsapp,skype,telegram"></div>
                                            </div>
                                        </div>
                                    @endif
                                    <div class="{{ count($images)? 'col-md-7' : 'col-md-12' }} col-sm-12 col-xs-12">
                                        <div class="detail-info">
                                            <h2 class="product-title title24 text-uppercase dark font-bold play-font">{{$model->title}}</h2>
                                            <div class="product-price play-font">
                                                <del class="dark opaci title14">{!! $model->prepared_old_price() !!}</del>
                                                <ins class="title18 color font-bold">{!! $model->prepared_price() !!}</ins>
                                            </div>
                                            <p class="desc product-desc">{!! $model->text !!}</p>

                                            <div class="detail-extra-link">
                                                <a href="#" class="wishlist-link"><i
                                                            class="icon {{ $model->isLiked() ? 'ion-ios-cart' : 'ion-ios-cart-outline' }}"
                                                            data-slug="{{$model->slug}}"></i><span>{{$model->isLiked() ? 'Удалить из корзины' : 'Добавить в корзину'}}</span></a>
                                                @if(!empty($model->link))
                                                    <a href="{{$model->link}}" target="_blank"><i
                                                                class="fa fa-external-link"></i><span>{{$model->link_text ? $model->link_text : 'Посмотреть в источнике'}}</span></a>
                                                @endif
                                            </div>
                                            <ul class="list-none product-meta-info">
                                                <li>
                                                    @if(!empty($model->code))
                                                        <div class="item-product-meta-info product-code-info">
                                                            <label>Артикул:</label>
                                                            <span>{{$model->code}}</span>
                                                        </div>
                                                    @endif
                                                </li>
                                                <li>
                                                    @if(!empty($model->material))
                                                        <div class="item-product-meta-info product-material-info">
                                                            <label>Материал:</label>
                                                            <span>{{$model->material}}</span>
                                                        </div>
                                                    @endif
                                                </li>
                                                <li>
                                                    @if(!empty($model->weight))
                                                        <div class="item-product-meta-info product-weight-info">
                                                            <label>Вес:</label>
                                                            <span>{{$model->weight}} г</span>
                                                        </div>
                                                    @endif
                                                </li>
                                                <li>
                                                    @if(!empty($model->sample))
                                                        <div class="item-product-meta-info product-sample-info">
                                                            <label>Проба:</label>
                                                            <span>{{$model->sample}}</span>
                                                        </div>
                                                    @endif
                                                </li>
                                                <li>
                                                    @if(!empty($model->piece))
                                                        <div class="item-product-meta-info product-piece-info">
                                                            <label>Вставка:</label>
                                                            <span>{{$model->piece}}</span>
                                                        </div>
                                                    @endif
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
                                            @if(!empty($connected_products))
                                                <h3 style="margin-top: 30px; margin-bottom: 20px">В комплект к этому товару подойдёт</h3>
                                                <ul class="list-none list-product-group">
                                                    @foreach($connected_products as $product)
                                                        <li>
                                                            <div class="item-product-group table-custom">
                                                                <div class="product-thumb">
                                                                    <a href="{{$product->url}}" class="product-thumb-link">
                                                                        <img src="{{resize($product->get_images_array()[0], 700, 700)}}" alt="">
                                                                    </a>
                                                                </div>
                                                                <div class="product-info">
                                                                    <h3 class="product-title title14 text-uppercase play-font"><a href="{{$product->url}}" class="dark">{{$product->title}}</a></h3>
                                                                    <div class="product-price play-font">
                                                                        <del class="silver">{!! $product->prepared_old_price() !!}</del>
                                                                        <ins class="title14 dark">{!! $product->prepared_price() !!}</ins>
                                                                    </div>
                                                                </div>
                                                                <div class="product-extra-link4 title18">
                                                                    @include('shared.add_to_cart_button', ['model' => $product])
                                                                </div>
                                                            </div>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            @endif
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
