<div class="product-grid-view">
  <p>Результатов найдено: {{ $products->count() }}</p>
  <div class="row">
    @each('shared.product_preview', $products, 'model')
  </div>
  {!! $products->links('shared.pagination') !!}
</div>