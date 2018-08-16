@extends('layouts.admin')

@section('content')
<form method="POST" action="{{ $model->id ? route('user.update', ['id' => $model->id]) : route($name . '.add') }}">
    @csrf

    <div class="row">
        <div class="col-md-11">

        </div>
        <div class="col-md-1">
            <div class="control-buttons">
                <button type="submit" class="btn btn-outline-primary"><span data-feather="save"></span> {{ __('Save') }}</button>
            </div>
        </div>
    </div>
</form>
@endsection
