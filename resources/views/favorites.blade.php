@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="content-page">
            <div class="container">
                <div class="content-about content-cart-page woocommerce content-about content-contact-page">
                    @if(count($products_liked))
                        <h2 class="title30 play-font text-uppercase font-bold dark">{{$model->name}}</h2>
                        <div class="table-responsive">
                            <table class="shop_table cart table">
                                <thead>
                                <tr>
                                    <th class="product-remove">&nbsp;</th>
                                    <th class="product-thumbnail">&nbsp;</th>
                                    <th class="product-name">Наименование</th>
                                    <th class="product-price">Цена</th>
                                    <th class="product-quantity">Количество</th>
                                    <th class="product-subtotal">Итого</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($products_liked as $product)
                                    <tr class="cart_item">
                                        <td class="product-remove">
                                            <a class="remove" href="#"><i class="fa fa-trash"
                                                                          data-slug="{{$product->slug}}"></i></a>
                                        </td>
                                        <td class="product-thumbnail">
                                            <a href="{{$product->url}}"><img
                                                        src="images/photos/glasses/dl-store-glasse-03.jpg" alt=""/></a>
                                        </td>
                                        <td class="product-name" data-title="Product">
                                            <a href="{{$product->url}}">{{$product->title}}</a>
                                        </td>
                                        <td class="product-price" data-title="Price">
                                            <span class="amount" data-price="{{--$product->price--}}">{{$product->price}}</span>
                                            <span>&#8381;</span>
                                        </td>
                                        <td class="product-quantity" data-title="Quantity">
                                            <div class="detail-qty border">
                                                <a href="#" class="qty-up"><i class="fa fa-angle-up"></i></a>
                                                <span data-id="{{$product->id}}" class="qty-val">1</span>
                                                <a href="#" class="qty-down"><i class="fa fa-angle-down"></i></a>
                                            </div>
                                        </td>
                                        <td class="product-subtotal" data-title="Total">
                                            <span class="amount">{{$product->price}}</span>
                                            <span>&#8381;</span>
                                        </td>
                                    </tr>
                                @endforeach
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
                    @else
                        <h2 class="title30 play-font dark text-center font-bold text-uppercase">У Вас нет избранных
                            товаров</h2>
                        <div class="center">
                            <a class="button alt wc-forward bg-color back-to-catalog" href="/catalog">Перейти в
                                каталог</a>
                        </div>
                        <div class="white-space"></div>
                    @endif
                </div>
            </div>
        </div>
        <!-- End Content Pages -->
    </section>
@endsection