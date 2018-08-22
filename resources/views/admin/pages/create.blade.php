@extends('layouts.admin')

@section('content')
    {{ Form::open(array('action' => 'Admin\PageController@store', 'method' => 'post')) }}
        @include('admin.pages.form')
    {{ Form::close() }}
@endsection
