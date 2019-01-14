@extends('layouts.app')

@section('content')
  @includeIf('blocks.breadcrumb')
  <section id="content">
    <div class="content-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-page-detail">
              <div class="product-detail detail-full-width">
                <div class="row">
                  <div class="product__mobile-content">
                    <div class="detail-tabs">
                      @if(!empty($model->video))
                      <div class="detail-tab-title">
                        <ul class="list-tag-detail list-none text-uppercase font-bold">
                          <li class="active"><a href="#tab1" data-toggle="tab">Фото</a></li>
                          <li><a href="#tab2" data-toggle="tab">Видео</a></li>
                        </ul>
                      </div>
                      @endif
                      <div class="detail-tab-content">
                        <div class="tab-content">
                          <div id="tab1" class="tab-pane active">
                            <div class="detail-tab-desc clearfix">
                              <div class="detail-gallery vertical">
                                @include('shared.product_photo')
                              </div>
                            </div>
                          </div>
                          <div id="tab2" class="tab-pane">
                            <div class="detail-tab-review">
                              <div class="mid video">
                                {!! $model->video !!}
                              </div>
                            </div>
                          </div>
                        </div>
                        @include('shared.share_social')
                      </div>
                    </div>
                  </div>
                  <div class="product__desktop-content col-md-5 col-sm-12 col-xs-12">
                    <div class="detail-gallery vertical">
                      @include('shared.product_photo')
                      <div class="mid video">
                        {!! $model->video !!}
                      </div>
                    </div>
                    @include('shared.share_social')
                  </div>

                  <div class="{{ count($images)? 'col-md-7' : 'col-md-12' }} col-sm-12 col-xs-12">
                    <div class="detail-info">
                      <h1 class="product-title title24 text-uppercase dark font-bold play-font">{{$model->title}}</h1>
                      <div class="product-price play-font">
                        <del
                            class="dark opaci title14">{!! $model->prepared_old_price() !!}</del>
                        <ins
                            class="title18 color font-bold">{!! $model->prepared_price() !!}</ins>
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
                              <label>Средний вес:</label>
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
                      @if(isset($connected_products[0]))
                        <h3 style="margin-top: 30px; margin-bottom: 20px" class="play-font">
                          В комплект к этому товару подойдёт</h3>
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
                                  <h3 class="product-title title14 text-uppercase play-font">
                                    <a href="{{$product->url}}"
                                       class="dark">{{$product->title}}</a></h3>
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
