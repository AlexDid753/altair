<header id="header">
  <div class="nav-header nav-header-jewelry5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="logo logo1">
            <a href="/">
              <span class="logo-icon logo-icon_big title24 round white"><img src="{{$settings->logo}}" alt=""></span>
            </a>
          </div>
          <!-- End logo -->
          <nav class="main-nav main-nav1 pull-left dark-style">
            <ul>
              @foreach($topMenu as $menuItem)
                <li class="{{ count($menuItem->childrens) ? 'menu-item-has-children' : ''}}">
                  <a href="{{$menuItem->getUrl()}}">{{$menuItem->name}}</a>
                  @if (count($menuItem->childrens))
                  <ul class="sub-menu">
                    @foreach($menuItem->childrens as $subMenuItem)
                      @include('shared.sub_menu')
                    @endforeach
                  </ul>
                  @endif
                </li>
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
          <div class="cart-top2-phone"><i class="fa fa-volume-control-phone white"></i>
            <a href="tel:{{$settings->phone}}">{{$settings->phone}}</a></div>

          <ul class="wrap-cart-top2 list-inline-block pull-right">
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