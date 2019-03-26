<a href="#" class="wishlist-link black inline-block" onclick="ym(50521729, 'reachGoal', 'korzina'); return true;">
    <i class="icon {{ $model->isLiked() ? 'ion-ios-cart' : 'ion-ios-cart-outline' }}" data-slug="{{$model->slug}}"></i>
    <span class="title10 white text-uppercase">{{ $model->isLiked() ? 'Удалить из корзины' : 'Добавить в корзину' }}</span>
</a>