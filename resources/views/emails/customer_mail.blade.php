<?php
$settings = new \App\Settings();
$product_ids = [];

foreach (json_decode($model->products) as $p){
    array_push($product_ids,$p->id);
}

$products = \App\Product::whereIn('id', $product_ids)->get();
?>
<base href="https://serebro-altair.ru/">
<p>Ваш заказ №{{$model->id}} принят. Вам перезвонят в ближайшее время.</p>
<p>Выбранный тип оплаты: {{$model->pay_type}}</p>

<div class="table-responsive">
    <table class="shop_table cart table">
        <thead>
        <tr>
            <th class="product-thumbnail">&nbsp;</th>
            <th class="product-name">Наименование</th>
            <th class="product-price">Цена</th>
        </tr>
        </thead>
        <tbody>
        @foreach($products as $product)
            <tr class="cart_item">
                <td class="product-thumbnail">
                    <a href="{{$product->url}}"><img
                                src="{{resize($product->preview_image(), 100, 100)}}" alt=""/></a>
                </td>
                <td class="product-name" data-title="Product">
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
                <span class="cart_totals-price"><span class="number">{{$model->summ()}}</span> &#8381;</span>
            </td>
        </tr>
        </tbody>
    </table>
</div>

<p>По любым вопросам обращайтесь по телефону: {{$settings->phone}}</p>