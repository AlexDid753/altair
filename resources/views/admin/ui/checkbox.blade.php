<div class="form-group row">
    <div class="col-md-12">
        <div class="checkbox">
            <label>
                <input type="hidden" value="0" name="{{ $fieldName }}">
                <input type="checkbox" value="1" name="{{ $fieldName }}" {{ $model->$fieldName ?: old($fieldName) ? 'checked' : '' }}>
                @if (is_array($fieldValue) && !empty($fieldValue['label']))
                    {{ __($fieldValue['label']) }}
                @else
                    {{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}
                @endif
            </label>
        </div>
    </div>
</div>