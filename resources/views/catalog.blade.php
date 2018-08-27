@extends('layouts.web')

@section('content')
    @foreach($models as $model)
            <div class="row">
                <div class="col-xl-6">
                    <h2>{{ $model->title }}</h2>
                    {!! $model->text !!}
                </div>
            </div>
        <section>
            @foreach($model->childrens as $subcategory)
                <a href="{{ $subcategory->getUrl($subcategory->id) }}">{{ $subcategory->title }}</a>
            @endforeach
        </section>
    @endforeach
@endsection
