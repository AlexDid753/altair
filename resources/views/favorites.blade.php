@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="content-page">
            <div class="container">
                <div class="content-about content-cart-page woocommerce">
                    @if(count($products_liked))
                        <h2 class="title30 play-font text-uppercase font-bold dark">{{$model->name}}</h2>
                        <form method="post">
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
                                                <a class="remove" href="#"><i class="fa fa-trash"></i></a>
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="{{$product->url}}"><img  src="images/photos/glasses/dl-store-glasse-03.jpg" alt=""/></a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <a href="#">{{$product->title}}</a>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span class="amount">$68.00</span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="detail-qty border">
                                                    <a href="#" class="qty-up"><i class="fa fa-angle-up"></i></a>
                                                    <span class="qty-val">1</span>
                                                    <a href="#" class="qty-down"><i class="fa fa-angle-down"></i></a>
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span class="amount">$68.00</span>
                                            </td>
                                        </tr>
                                    @endforeach


                                    </tbody>
                                </table>
                            </div>
                        </form>
                        <div class="cart-collaterals">
                            <div class="wc-proceed-to-checkout">
                                <a class="checkout-button button alt wc-forward bg-color" href="#">Оставить заявку на покупку</a>
                            </div>
                        </div>
                    @else
                        <h2 class="title30 play-font dark text-center font-bold text-uppercase">У Вас нет избранных товаров</h2>
                        <div class="center">
                            <a class="button alt wc-forward bg-color back-to-catalog" href="/catalog">Перейти в каталог</a>
                        </div>
                        <div class="white-space"></div>
                    @endif
                </div>
            </div>
        </div>
        <!-- End Content Pages -->
    </section>
@endsection