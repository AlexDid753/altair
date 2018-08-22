@extends('layouts.admin')

@section('content')
    {{ Form::open(array('action' => 'Admin\TemplateController@store', 'method' => 'post')) }}
        @include('admin.template.form')
    {{ Form::close() }}
@endsection
