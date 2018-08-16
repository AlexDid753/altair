<div class="form-group row">

    @php($values = isset($fieldValue['value']) ? $fieldValue['value'] : ($model->$fieldName ?: old($fieldName)))
    @php($values = is_array($values) ? json_encode($values) : $values)

    <div class="col-md-12 mb-3">
        Контент
    </div>

    <div class="col-md-12">

        <content-builder ref="contentBuilder"></content-builder>

        <textarea id="content-builder-result" style="display: none" name="{{ $fieldName }}">{{ $values }}</textarea>
    </div>

</div>