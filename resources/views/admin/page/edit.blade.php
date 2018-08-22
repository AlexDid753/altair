@extends('layouts.admin')

@section('content')
    {{ Form::model($model, array('route' => array('page.update', $model->id), 'method' => 'PUT')) }}
        @include('admin.page.form')
    {{ Form::close() }}
@endsection
