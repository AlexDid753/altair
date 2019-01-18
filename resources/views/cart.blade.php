@extends('layouts.app')

@section('content')
    @includeIf('blocks.breadcrumb')
    <section id="content">
        <div class="content-page">
            <div class="container">
                <div class="content-about content-cart-page woocommerce content-about content-contact-page">
                    @if(count($products_liked))
                        <div class="not_empty_faves">
                            <h2 class="title30 play-font text-uppercase font-bold dark">{{$model->name}}</h2>
                            <div class="table-responsive">
                                <table class="shop_table cart table">
                                    <thead>
                                    <tr>
                                        <th class="product-remove">&nbsp;</th>
                                        <th class="product-thumbnail">&nbsp;</th>
                                        <th class="product-name">Наименование</th>
                                        <th class="product-price">Цена</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($products_liked as $product)
                                        <tr class="cart_item">
                                            <td class="product-remove">
                                                <i class="icon ion-ios-close-outline"
                                                   data-id="{{$product->id}}"
                                                   data-slug="{{$product->slug}}"></i>
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="{{$product->url}}"><img
                                                            src="{{resize($product->preview_image(), 100, 100)}}"
                                                            alt=""/></a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <img class="product-name__mobile-img"
                                                     src="{{resize($product->preview_image(), 100, 100)}}" alt=""/>
                                                <a href="{{$product->url}}">
                                                    {{ $product->title }}
                                                    {{ getProductData($product->id,'size') }}
                                                </a>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span class="amount">{!! $product->prepared_price() !!}</span>
                                            </td>
                                        </tr>
                                    @endforeach
                                    <tr>
                                        <td colspan="4" class="cart_totals">
                                            <span class="cart_totals-head">Итого:</span>
                                            <span class="cart_totals-price"><span class="number">0</span><span
                                                        class="rub"> Р</span></span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="contact-form-faq">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="contact-form-page thanks">
                                            <h2 class="title18 dark font-bold text-uppercase play-font thanks__message">
                                                Благодарим за заказ. С вами скоро свяжутся. По всем интересующим
                                                вопросам вы можете обратиться по телефону {{$settings->phone}}.
                                            </h2>
                                        </div>
                                        @include('shared.cart_form', ['contact_type'=>'favorites'])
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        @include('shared.faqs',['faqs' => $model->faqs])
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="empty_faves">
                            @include('shared.empty_faves')
                        </div>
                    @else
                        @include('shared.empty_faves')
                    @endif
                </div>
            </div>
        </div>
        <!-- End Content Pages -->
    </section>
@endsection