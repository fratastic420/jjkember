<?php namespace App\Http\Middleware;

//use Illuminate\Session\TokenMismatchException;

class VerifyCsrf extends \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken
{
    /**
     * Routes we want to exclude
     *
     *  @var array
     */
    
    protected $routes = [
        'api/articles',
        'api/sites',
        'api/artworks',
        'api/tags',
        'api/images',
    ];
    
    /**
     * Handle incoming request
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     *
     * @throws \Illuminate\Session\TokenMismatchException
     */
    
    public function handle($request, \Closure $next)
    {
        if($this->isReading($request)
            || $this->excludedRoutes($request)
            || $this->tokensMatch($request))
        {
            return $this->addCookieToResponse($request, $next($request));
        }
        
        throw new \TokenMismatchException;
    }
    
    /**
     * This will return a bool value based on route checking.
     *
     * @param Request $request
     * @return boolean
     */
    
    protected function excludedRoutes($request)
    {
        foreach($this->routes as $route){
            if($request->is($route))
            {
                return true;
            }
            return false;
        }
    }
}