@extends('layouts.admin')

@section('content')
    {{ Form::open(array('action' => 'Admin\CategoryController@store', 'method' => 'post')) }}
        @include('admin.category.form')
    {{ Form::close() }}
@endsection
