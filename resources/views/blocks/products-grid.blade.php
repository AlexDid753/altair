<div class="product-grid-view">
  <div class="row">
    @each('shared.product_preview', $products, 'model')
  </div>
{!! $products->links('shared.pagination') !!}