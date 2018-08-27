@extends('layouts.admin')

@section('content')
    {{ Form::open(array('action' => 'Admin\ProductController@store', 'method' => 'post')) }}
        @include('admin.product.form')
    {{ Form::close() }}
@endsection
