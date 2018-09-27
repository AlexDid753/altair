<header id="header">
    <div class="nav-header nav-header-jewelry5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo logo1">
                        <a href="/">
                            <span class="logo-icon title24 round white bg-dark"><img src="images/icon/logo_gold.png" alt=""></span>
                            <strong class="play-font font-italic title30 white text-uppercase">Альтаир</strong>
                        </a>
                    </div>
                    <div class="header_year white">2000</div>
                    <!-- End logo -->
                    <nav class="main-nav main-nav1 pull-left dark-style">
                        <ul>
                            @foreach($topMenu as $menuItem)
                                <li class="{{ count($menuItem->childrens) ? 'menu-item-has-children' : ''}}">
                                    <a href="{{$menuItem->getUrl()}}">{{$menuItem->name}}</a>
                                    @if (count($menuItem->childrens)) {{--todo сделать рекурсивное применение шаблона --}}
                                        <ul class="sub-menu">
                                            @foreach($menuItem->childrens as $subMenuItem)
                                                <li class="{{ count($subMenuItem->childrens) ? 'menu-item-has-children' : ''}}"><a href="{{ $subMenuItem->getUrl() }}">{{ $subMenuItem->name }}</a>
                                                    @if (count($subMenuItem->childrens))
                                                        <ul class="sub-menu">
                                                            @foreach($subMenuItem->childrens as $subMenuItem)
                                                                <li><a href="{{ $subMenuItem->getUrl() }}">{{ $subMenuItem->name }}</a></li>
                                                            @endforeach
                                                        </ul>
                                                    @endif
                                                </li>
                                            @endforeach
                                        </ul>
                                    @endif
                                </li>
                            @endforeach
                        </ul>
                        <a href="#" class="toggle-mobile-menu"><span></span></a>
                    </nav>
                    <!-- End Main Nav -->
                    <ul class="wrap-cart-top2 list-inline-block pull-right">
                        <li>
                            <a href="{{\App\Page::find(2)->url}}" class="title18 wishlist-link" title="Корзина"><span class="white"><i class="fa fa-shopping-basket"></i></span><sup class="title10 round dark bg-white">{{count(\App\Product::liked())}}</sup></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>