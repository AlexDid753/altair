@extends('layouts.admin')

@section('content')
        @csrf
        {{ Form::model($model, array('route' => array('user.update', $model->id), 'method' => 'PUT')) }}

        <div class="row">
            <div class="col-md-11">
                {{ Html::ul($errors->all()) }}


                <div class="form-group">
                    {{ Form::label('name', 'Name') }}
                    {{ Form::text('name', null, array('class' => 'form-control')) }}
                </div>

                <div class="form-group">
                    {{ Form::label('email', 'Email') }}
                    {{ Form::email('email', null, array('class' => 'form-control')) }}
                </div>



            </div>
            <div class="col-md-1">
                <div class="control-buttons">
                    <button type="submit" class="btn btn-outline-primary"><span data-feather="save"></span> {{ __('Save') }}</button>
                </div>
            </div>
        </div>
        {{ Form::close() }}
@endsection
