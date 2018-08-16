<div class="form-group row">
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif

    <div class="col-md-12">
        <input
                id="{{ $fieldName }}"
                type="text"
                autocomplete="off"
                class="form-control{{ $errors->has($fieldName) ? ' is-invalid' : '' }}"
                name="{{ $fieldName }}"
                value="{{ isset($fieldValue['value']) ? $fieldValue['value'] : $model->$fieldName }}">

        @if ($errors->has($fieldName))
            <span class="invalid-feedback">
                <strong>{{ $errors->first($fieldName) }}</strong>
            </span>
        @endif
    </div>
</div>