@extends('layouts.admin')
@section('content')
    {{ Form::open(array('method'=>'PUT','route' => [$class_name.'.update', $model->id])) }}
        @include('admin.feedback.form')
    {{ Form::close() }}
@endsection
