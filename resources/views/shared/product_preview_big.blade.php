<div class="item-product item-product4 text-center border">
    <div class="product-thumb">
        <img src="{{resize($model->preview_image(), 328, 328)}}" alt="">
        <a href="{{$model->preview_image()}}" class="quickview-link fancybox.iframe title12 round white"><i class="fa fa-search"></i></a>
    </div>
    <div class="product-info">
        <h3 class="title14 product-title"><a href="{{$model->url}}" class="black">{{$model->title}}</a></h3>
        <div class="product-price title14 play-font">
            <del class="silver">{!! $model->prepared_old_price()!!}</del>
            <ins class="black title18">{!! $model->prepared_price() !!}</ins>
        </div>
        <div class="product-extra-link4 title18">
            @include('shared.add_to_cart_button', ['model' => $model])
        </div>
    </div>
</div>