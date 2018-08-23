@extends('layouts.admin')

@section('content')
    {{ Form::open(array('action' => 'Admin\NewsController@store', 'method' => 'post')) }}
        @include('admin.news.form')
    {{ Form::close() }}
@endsection
