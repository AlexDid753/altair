<?php

namespace App\Providers;


use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;
use App\Menu;
use App\Settings;
use App\Page;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (!app()->runningInConsole()) {

            Blade::directive('page_url', function ($id) {
                return "<?php echo App\Page::getUrl({$id}); ?>";
            });

            $topMenu = Menu::where(['parent_id' => 1, 'published' => 1])
                ->with('childrens')
                ->orderBy('sort')->get();
            view()->share('topMenu', $topMenu);

            $footerMenuInfo = Menu::where(['parent_id' => 2])->get();
            view()->share('footerMenuInfo', $footerMenuInfo);

            $footerMenuDirections = Menu::where(['parent_id' => 89])->get();
            view()->share('footerMenuDirections', $footerMenuDirections);

            $latestNews = Page::where(['parent_id' => 8])->orderBy('created_at', 'desc')->limit(2)->get();
            view()->share('latestNews', $latestNews);

            $settings = new Settings;
            view()->share('settings', $settings);

            if (!starts_with(request()->path(), 'admin'))
                Paginator::defaultView('pagination::default');

        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
