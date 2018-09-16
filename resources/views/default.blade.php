@extends('layouts.app')

@section('content')
    <section id="content">
        <div class="content-page">
            <div class="container">
                <div class="content-about">
                    <h2 class="title30 play-font text-uppercase dark font-bold">{{$model->name}}</h2>
                    <p class="desc">{!! $model->text !!}</p>
                </div>
            </div>
        </div>
    </section>
@endsection