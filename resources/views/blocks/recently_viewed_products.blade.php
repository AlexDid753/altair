@if(count($products_recently_viewed))
    <div class="related-tabs">
        <ul class="list-inline-block related-tab-title font-bold text-uppercase play-font">
            <li class="active">Недавно просмотренные товары</li>
        </ul>
        <div class="tab-content">
            <div id="ral1" class="tab-pane active">
                <div class="product-slider">
                    <div class="wrap-item group-navi" data-pagination="false" data-navigation="true" data-itemscustom="[[0,1],[560,2],[990,3]]">
                        @each( 'shared.product_preview_big', $products_recently_viewed, 'model' )
                    </div>
                </div>
            </div>
        </div>
    </div>
@endif