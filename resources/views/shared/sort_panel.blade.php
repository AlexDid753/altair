<ul class="sort-pagi-bar list-inline-block pull-right">
  <li>
    <div class="dropdown-box show-by sort-list">
      <a href="#" class="dropdown-link"><span class="gray">Сортировка:</span>
        <span class="silver">
                                                    @switch(request()->sortByPrice)
            @case('asc')
            Цена (по возрастанию)
            @break

            @case('desc')
            Цена (по убыванию)
            @break

            @default
            По умолчанию
          @endswitch
                                                  </span>
      </a>
      <ul class="dropdown-list sort-list list-none">
        <li><a href="{{ request()->fullUrlWithQuery(['sortByPrice' => '']) }}">По умолчанию</a></li>
        <li><a href="{{ request()->fullUrlWithQuery(['sortByPrice' => 'asc']) }}">Цена (по возрастанию)</a></li>
        <li><a href="{{ request()->fullUrlWithQuery(['sortByPrice' => 'desc']) }}">Цена (по убыванию)</a></li>
      </ul>
    </div>
  </li>
  <li>
    <div class="dropdown-box show-by">
      <a href="#" class="dropdown-link"><span class="gray">Товаров на странице:</span><span class="silver">{{(request()->count > 100)? 'Все' : request()->count ?? 12}}</span></a>
      <ul class="dropdown-list list-none">
        <li><a href="{{ request()->fullUrlWithQuery(['count' => '12']) }}">12</a></li>
        <li><a href="{{ request()->fullUrlWithQuery(['count' => '24']) }}">24</a></li>
        <li><a href="{{ request()->fullUrlWithQuery(['count' => '999']) }}">Все</a></li>
      </ul>
    </div>
  </li>
</ul>