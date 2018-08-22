@extends('layouts.admin')

@section('content')
    {{ Form::model($model, array('route' => array('template.update', $model->id), 'method' => 'PUT')) }}
        @include('admin.template.form')
    {{ Form::close() }}
@endsection
