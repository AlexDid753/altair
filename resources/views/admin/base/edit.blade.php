@extends('layouts.admin')
@section('content')
    {{ Form::open(array('method'=>'PUT','route' => [$class_name.'.update', $model->id])) }}
        @include('admin.base.form')
    {{ Form::close() }}
@endsection
