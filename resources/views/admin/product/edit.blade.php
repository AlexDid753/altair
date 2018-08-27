@extends('layouts.admin')

@section('content')
    {{ Form::model($model, array('route' => array('product.update', $model->id), 'method' => 'PUT')) }}
        @include('admin.product.form')
    {{ Form::close() }}
@endsection
