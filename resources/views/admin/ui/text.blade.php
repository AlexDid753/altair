<div class="form-group row">
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif

    <div class="col-md-12">
        <textarea
                @if (isset($attributes))
                    {{set_atributes($attributes)}}
                @endif
                id="{{ $fieldName }}"
                name="{{ $fieldName }}"
                class="form-control{{ $errors->has($fieldName) ? ' is-invalid' : '' }}"
                rows="3">{{ isset($fieldValue['value']) ? $fieldValue['value'] : $model->$fieldName }}</textarea>

        @if ($errors->has($fieldName))
            <span class="invalid-feedback">
                <strong>{{ $errors->first($fieldName) }}</strong>
            </span>
        @endif
    </div>
</div>