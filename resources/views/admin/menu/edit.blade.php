@extends('layouts.admin')

@section('content')
    {{ Form::model($model, array('route' => array('menu.update', $model->id), 'method' => 'PUT')) }}
        @include('admin.menu.form')
    {{ Form::close() }}
@endsection
