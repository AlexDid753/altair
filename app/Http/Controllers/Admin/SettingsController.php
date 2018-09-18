<?php

namespace App\Http\Controllers\Admin;

use App\Settings;
use Illuminate\Http\Request;

class SettingsController extends BaseAdminController
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function form(Request $request)
    {
        if ($request->isMethod('post')) {
            foreach ($request->all() as $name => $value)
                if ($name != '_token')
                    Settings::where(['name' => $name])->update(['value' => $value]);

            return redirect(route('settings'));
        } else {
            $groups = Settings::distinct()->pluck('group')->map(function($group) {
                return Settings::where(['group' => $group])->orderBy('sort', 'asc')->get();
            });

            return view('admin.settings', [
                'groups' => $groups
            ]);
        }
    }
}
