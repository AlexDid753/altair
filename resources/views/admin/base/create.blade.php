@extends('layouts.admin')
@section('content')
    {{ Form::open(array('method'=>'POST','route' => [$class_name.'.store'])) }}
        @include('admin.base.form')
    {{ Form::close() }}
@endsection
