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
        <h2>Категории</h2>
        @foreach($subcategories as $subcategory)
            <a href="{{ $subcategory->getUrl($subcategory->id) }}">{{ $subcategory->title }}</a>
        @endforeach
    </section>
    <section>
        <h2>Продукты</h2>
        <ul>
            @foreach($products as $product)
                <li>
                    <a href="{{ $product->getUrl($product->id) }}">{{ $product->title }}</a>
                </li>
            @endforeach
        </ul>
    </section>
@endsection
