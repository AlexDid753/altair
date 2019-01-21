<ul class="sort-pagi-bar list-inline-block pull-right">
  <li>
    <div class="dropdown-box show-by sort-list">
      <span href="#" class="dropdown-link"><span class="gray">Сортировка:</span>
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
          @endswitch                                                  </span>
      </span>
      <ul class="dropdown-list filter-sort-list sort-list list-none">
        <li><a data-sort='' href="javascript:void(0);">По умолчанию</a></li>
        <li><a data-sort='asc' href="javascript:void(0);">Цена (по возрастанию)</a></li>
        <li><a data-sort='desc' href="javascript:void(0);">Цена (по убыванию)</a></li>
      </ul>
    </div>
  </li>
  <li>
    <div class="dropdown-box show-by">
      <span href="#" class="dropdown-link"><span class="gray">Товаров на странице:</span><span class="silver">{{(request()->count > 100)? 'Все' : request()->count ?? 12}}</span></span>
      <ul class="dropdown-list filter-count-list list-none">
        <li><a data-count='12' href="javascript:void(0);">12</a></li>
        <li><a data-count='24' href="javascript:void(0);">24</a></li>
        <li><a data-count='999' href="javascript:void(0);">Все</a></li>
      </ul>
    </div>
  </li>
</ul>