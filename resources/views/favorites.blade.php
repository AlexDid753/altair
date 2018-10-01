@extends('layouts.app')

@section('content')
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
                                                            src="{{resize($product->preview_image(), 100, 100)}}" alt=""/></a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <img class="product-name__mobile-img" src="{{resize($product->preview_image(), 100, 100)}}" alt=""/>
                                                <a href="{{$product->url}}">{{$product->title}}</a>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span class="amount">{!! $product->prepared_price() !!}</span>
                                            </td>
                                        </tr>
                                    @endforeach
                                    <tr>
                                        <td colspan="4" class="cart_totals">
                                            <span class="cart_totals-head">Итого:</span>
                                            <span class="cart_totals-price"><span class="number">0</span><span class="rub"> Р</span></span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="contact-form-faq">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        @include('shared.contact_form', ['contact_type'=>'favorites'])
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="contact-faq">
                                            <h2 class="title18 dark font-bold text-uppercase play-font">FAQs</h2>
                                            <div class="contact-accordion dark toggle-tab">
                                                <div class="item-toggle-tab active">
                                                    <h2 class="toggle-tab-title dark">At vero eos et accusamus et iusto</h2>
                                                    <p class="desc toggle-tab-content dark opaci">Lorem ipsum dolor sit
                                                        amet, consectetur adipisicing elit. Aliquid animi archi tecto
                                                        aspernatur assumenda cum inventore labore magnam </p>
                                                </div>
                                                <div class="item-toggle-tab">
                                                    <h2 class="toggle-tab-title dark">Dignissimos ducimus qui
                                                        blanditiis</h2>
                                                    <p class="desc toggle-tab-content dark opaci">Lorem ipsum dolor sit
                                                        amet, consectetur adipisicing elit. Aliquid animi archi tecto
                                                        aspernatur assumenda cum inventore labore magnam </p>
                                                </div>
                                                <div class="item-toggle-tab">
                                                    <h2 class="toggle-tab-title dark">Raesentium voluptatum deleniti</h2>
                                                    <p class="desc toggle-tab-content dark opaci">Lorem ipsum dolor sit
                                                        amet, consectetur adipisicing elit. Aliquid animi archi tecto
                                                        aspernatur assumenda cum inventore labore magnam </p>
                                                </div>
                                                <div class="item-toggle-tab">
                                                    <h2 class="toggle-tab-title dark">At vero eos et accusamus et iusto</h2>
                                                    <p class="desc toggle-tab-content dark opaci">Lorem ipsum dolor sit
                                                        amet, consectetur adipisicing elit. Aliquid animi archi tecto
                                                        aspernatur assumenda cum inventore labore magnam </p>
                                                </div>
                                                <div class="item-toggle-tab">
                                                    <h2 class="toggle-tab-title dark">Dignissimos ducimus qui
                                                        blanditiis</h2>
                                                    <p class="desc toggle-tab-content dark opaci">Lorem ipsum dolor sit
                                                        amet, consectetur adipisicing elit. Aliquid animi archi tecto
                                                        aspernatur assumenda cum inventore labore magnam </p>
                                                </div>
                                                <div class="item-toggle-tab">
                                                    <h2 class="toggle-tab-title dark">Raesentium voluptatum deleniti</h2>
                                                    <p class="desc toggle-tab-content dark opaci">Lorem ipsum dolor sit
                                                        amet, consectetur adipisicing elit. Aliquid animi archi tecto
                                                        aspernatur assumenda cum inventore labore magnam </p>
                                                </div>
                                            </div>
                                        </div>
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