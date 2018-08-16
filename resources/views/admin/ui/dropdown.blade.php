<div class="form-group row">
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif

    <div class="col-md-12">

        @php
            $options = call_user_func_array(['App\\' . $fieldValue['model'], $fieldValue['method']], [$model->id]);
        @endphp

        <select
                id="{{ $fieldName }}"
                class="form-control {{ $errors->has($fieldName) ? 'is-invalid' : '' }}"
                name="{{ $fieldName }}">
            @foreach ($options as $id => $option)
                <option value="{{ $id }}" {{ $id == ($model->$fieldModelName ?: old($fieldName))  ? 'selected' : '' }}>{{ $option }}</option>
            @endforeach
        </select>

        @if ($errors->has($fieldName))
            <span class="invalid-feedback">
                <strong>{{ $errors->first($fieldName) }}</strong>
            </span>
        @endif
    </div>
</div>