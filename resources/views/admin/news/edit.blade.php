@extends('layouts.admin')

@section('content')
    {{ Form::model($model, array('route' => array('news.update', $model->id), 'method' => 'PUT')) }}
        @include('admin.news.form')
    {{ Form::close() }}
@endsection
