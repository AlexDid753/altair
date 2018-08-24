@extends('layouts.web')

@section('content')
    <section>
        <div class="row">
            <div class="col-xl-6">
                <h1>{{ $model->name }}</h1>
                {!! $model->text !!}
            </div>
        </div>
    </section>
    <section>
        @foreach($model->childrens as $product)
            <a href="{{ $product->getUrl($product->id) }}">{{ $product->name }}</a>
        @endforeach
    </section>
@endsection
