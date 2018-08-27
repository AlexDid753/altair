@extends('layouts.admin')

@section('content')
    {{ Form::model($model, array('route' => array('category.update', $model->id), 'method' => 'PUT')) }}
        @include('admin.category.form')
    {{ Form::close() }}
@endsection
