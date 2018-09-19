@extends('layouts.app')

@section('content')
    <section id="content">
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
                                        <h1 class="title30 font-bold text-uppercase pull-left play-font dark">Результаты
                                            поиска</h1>
                                    </div>
                                </div>
                            </div>
                            @if (count($models))
                                <div class="product-grid-view">
                                    <div class="row">
                                        @each('shared.product_preview', $models, 'model')
                                    </div>
                                    {{$models->appends(request()->input())->links('shared.pagination')}}
                                    {{--добавляем к ссылкам на пагинации остальные GET параметры--}}
                            @else
                                    <div class="row">
                                        <h3 class="title14 text-uppercase pull-left play-font dark">{{$message}}</h3>
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection