@extends('layouts.admin')

@section('content')
    {{ Form::open(array('action' => 'Admin\MenuController@store', 'method' => 'post')) }}
        @include('admin.menu.form')
    {{ Form::close() }}
@endsection
