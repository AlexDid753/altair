<div class="col-md-3 col-sm-6 col-xs-6">
    <div class="item-cat2 text-center bg-white">
        <div class="cat-thumb"><a href="{{$model->url}}"><img src="{{resize($model->preview_image(),180,180)}}" alt=""></a></div>
        <div class="cat-info">
            <h3 class="title18 dark play-font font-italic">{{$model->name}}</h3>
            <a href="{{$model->url}}" class="link-circle title18"><i class="icon ion-ios-arrow-thin-right"></i></a>
        </div>
    </div>
</div>