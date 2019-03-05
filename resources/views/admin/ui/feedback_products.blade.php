<?php  $data = isset($fieldValue['value']) ? $fieldValue['value'] : json_decode($model->$fieldName);   ?>
@if (!empty($data))
  @include('admin.ui.products_info_table')
@endif