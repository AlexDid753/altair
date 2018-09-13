@extends('layouts.app')

@section('content')
    @foreach($models as $model)
            <div class="row">
                <div class="col-xl-6">
                    <a href="{{ $model->getUrl($model->id) }}"><p style="font-weight: bold">{{ $model->title }}</p></a>
                </div>
            </div>
        <section>
            <ul>
            @foreach($model->publishedChildrens as $subcategory)
                <li><a href="{{ $subcategory->getUrl($subcategory->id) }}">{{ $subcategory->title }}</a></li>
            @endforeach
            </ul>
        </section>
    @endforeach
@endsection
