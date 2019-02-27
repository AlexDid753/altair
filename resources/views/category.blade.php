@extends('layouts.app')

@section('content')
  @includeIf('blocks.breadcrumb')
  <section id="content" data-id="{{$model->id}}">
    <div class="content-page">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-4 col-xs-12">
            @include('shared.search_side_panel')
          </div>
          <div class="col-md-9 col-sm-8 col-xs-12">
            <div class="content-blog-page shop-boxed-banner">
              <div class="title-page">
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="title30 font-bold text-uppercase pull-left play-font dark">{{$model->name}}</h1>
                    @include('shared.sort_panel')
                  </div>
                </div>
              </div>
              <div class="products-block">
                @include('blocks.products-grid', ['products' => $products])
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 category_seo-text">
        <div class="container">
          {!! $model->text !!}
        </div>
      </div>
    </div>
    </div>
  </section>
@endsection
