<div class="form-group row">
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif

    <div class="col-md-8">
        <div class="input-group">
            <input
                    id="{{ str_slug($fieldName) }}"
                    type="text"
                    autocomplete="off"
                    class="img-field form-control{{ $errors->has($fieldName) ? ' is-invalid' : '' }}"
                    name="{{ $fieldName }}"
                    value="{{ isset($fieldValue['value']) ? $fieldValue['value'] : ($model->$fieldName ?: old($fieldName)) }}">
            <div class="input-group-append">
                <a href="#" class="popup_selector btn btn-outline-secondary" data-inputid="{{ str_slug($fieldName) }}"><span data-feather="download"></span></a>
            </div>
        </div>
    </div>
    <div class="col-md-4 img-preview" data-preview-id="{{ str_slug($fieldName) }}"></div>
</div>