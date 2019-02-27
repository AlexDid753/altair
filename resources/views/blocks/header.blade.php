<header id="header">
  <div class="nav-header nav-header-jewelry5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="logo logo1 d-flex">
            <span class="logo-item">
              Санкт-Петербург
            </span>
            <span class="logo-item">
              <a href="/oplata-i-dostavka">Оплата и доставка</a>
            </span>
            <div class="text-center">
              <a href="/">
                <span class="logo-icon logo-icon_big title24 round white"><img src="{{$settings->logo}}" alt=""></span>
              </a>
            </div>
          </div>
          <!-- End logo -->
          <nav class="main-nav main-nav1 pull-left dark-style">
            <ul>
              @foreach($topMenu as $subMenuItem)
                @include('shared.sub_menu_item')
              @endforeach
            </ul>
            <a href="#" class="toggle-mobile-menu"><span></span></a>
          </nav>
          <div class="logo logo2">
            <a href="/">
              <span class="logo-icon logo-icon_big title24 round white"><img src="{{$settings->logo}}" alt=""></span>
            </a>
          </div>
          <!-- End Main Nav -->
          <div class="cart-top2-phone">
            <a href="tel:{{$settings->phone}}">{{$settings->phone}}</a>
          </div>

          <ul class="wrap-cart-top2 list-inline-block pull-right">
            <li>
              <a href="/search" class="title18 wishlist-link" title="Поиск">
                <span class="white">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="{{Page::find(2)->url}}" class="title18 wishlist-link" title="Корзина"><span class="white"><i class="fa fa-shopping-basket"></i></span>
                <sup class="title10 round dark bg-white">{{count(Product::liked())}}</sup></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>