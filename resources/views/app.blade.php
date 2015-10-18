
<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<title>Jared J Kramer - Coding Things, Drawing Things, and some other Stuff too.</title>
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="p:domain_verify" content="d3dd3afd312f019152d37160964c7e9d">
		<!-- need a meta tag here for it signed in, may not need  it-->
		<meta name="csrf-token" content="{{ Session::token() }}" >
    	<meta name="description" content="">
    	<meta name="author" content="Jared J Kramer">
		<meta name="description" id="metadescription" content="">
		<meta name="keywords" id="metakeywords" content="">
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/img/apple-touch-icon-144-precomposed.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/img/apple-touch-icon-114-precomposed.png">
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/img/apple-touch-icon-72-precomposed.png">
		<link rel="apple-touch-icon-precomposed" href="/img/apple-touch-icon-57-precomposed.png">
		<link rel="shortcut icon" href="/img/favicon.png">
		<link rel="shortcut icon" type="image/ico" href="/img/favicon.ico">
		<link href="{{ asset('/css/all.css') }}" media="screen" rel="stylesheet"/>
    </head>
	<body>
		@yield('content')
		@yield('emberfooter')		
	</body>
</html>

