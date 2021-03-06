<div class="form-group row">
  @php
    $options = call_user_func_array(['App\\' . $fieldValue['model'], $fieldValue['method']], [$model->id]);
    $arrFieldName = str_replace(['[', ']'], "", $fieldName)
  @endphp
    @if (is_array($fieldValue) && !empty($fieldValue['label']))
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __($fieldValue['label']) }}</label>
    @else
        <label for="{{ $fieldName }}" class="col-md-12 col-form-label">{{ __(str_singular(ucfirst(str_replace('_', ' ', $fieldName)))) }}</label>
    @endif
    <div class="col-md-12">
        <select
                {{--вывод атрибутов--}}
                @if (isset($fieldValue['attributes']))
                  {{set_atributes($fieldValue['attributes'])}}
                @endif
                id="{{ $fieldName }}"
                class="form-control {{ $errors->has($fieldName) ? 'is-invalid' : '' }}"
                name="{{ $fieldName }}">
            @foreach ($options as $id => $option)
                <option value="{{ $id }}" {{ (isset($model->$arrFieldName) && in_array($id, $model->$arrFieldName)) ? 'selected' : '' }}>{{ $option }}</option>
            @endforeach
        </select>

        @if ($errors->has($fieldName))
            <span class="invalid-feedback">
                <strong>{{ $errors->first($fieldName) }}</strong>
            </span>
        @endif
    </div>
</div>