<!DOCTYPE html>
<html lang="{{ App::getLocale() }}">
	<head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108161542-1"></script> -->
		<!-- <script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-108161542-1');
		</script> -->

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" />
		<title>우리 결혼합니다.</title>
	</head>
	
	<body class="@yield('bodyClass', '')">
		<div id="now-loading">
		    <div id="heart-wrapper">
		        <div id="heart">
		        </div>
		    </div>
		</div>
		@yield('content')

		<div id="more-pic" class="text-center">
			{{ $more or '더 많은 이야기가 있어요!' }}
		    
		</div>

		<!-- <footer id="footer" class="layout-footer">
			<div class="text-center">
				bk와 bj가 만듦
			</div>
		</footer> -->

		@yield('foot')
		<script async defer
		    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDthgUzU7IKEhdF6Rc5QIN6WyUtWx5LYkE">
	    </script>
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
		<script type="text/javascript" src="{{ URL::asset('js/hahahahaha.js') }}"></script>
		
	</body>
</html>