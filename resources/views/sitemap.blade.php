@extends('layouts.app')

@section('content')
  @includeIf('blocks.breadcrumb')
  <section id="content" class="sitemap">
    <div class="content-page">
      <div class="container">
        <div class="content-about">
          <h2 class="title30 play-font text-uppercase dark font-bold">{{$model->name}}</h2>
          <ul class="list-none single-list-link">
            @foreach($pages as $item)
              <li><a href="{{$item->url}}">{{$item->name}}</a></li>
            @endforeach
            @foreach($categories as $subMenuItem)
              @include('shared.sub_page_item')
            @endforeach
          </ul>
        </div>
      </div>
    </div>
  </section>
@endsection