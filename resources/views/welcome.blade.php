@extends('master')  

@section('head')

@endsection

@section('content')
	<div id="main-wrapper">
		<div id="invite-says" class="text-center">
			<div class="contents">
				<div class="up-to-bottom">
					<h1> 04/08</h1>
				</div>
				<div class="bottom-to-up">
					<br />
					백경이와 봉주가 <span>결혼</span> 합니다
				</div>
			</div>
		</div>
		<div class="container">
			<div id="hello">
				<h3></h3>
				<p>
					걱정하지 않습니다.
					<br />
					불안하지도 않습니다.
					<br />
					함께라면 두렵지 않습니다.
					<br />
					그 시작을 함께 하는 오늘, 여러분을 초대합니다.
				</p>
				<img
					src="http://www.weddingritz.com/files/attach/images/185166/452/806/009/55f9707fbe6bb7b63ba860cfa543ba01.jpg"
					class="img-responsive main-pic on-blur"
					alt="dummy1"
				/>
			</div>
			<div id="location">
				<h3><span>이 날</span> 입니다!</h3>
				<p>
					4월 8일 오후 3시 ~ 5시입니다.
					<br />
					{!! $dDay !!}일 남았네요.
					<br />
					혹시... 못 오시는건 아니죠?
				</p>
				<h3>
					<span>여기서</span>만나요
				</h3>
				<div id="map"></div>
				<p>
					서울특별시 강남구 논현동 247-4
					더 그레이스 켈리
					<br />
				</p>
				<h3>
					<span>이렇게</span> 오시면 좋아요
				</h3>
				<p>
					<div class="text-center text-bold">
						자가용
					</div>
					주차장은 강남구청역 SK허브 주차장입니다.
					<br>
					주차 하신 뒤 강남구청역 2번출구에서 예식장 까지 운행하는 셔틀버스가 있습니다. 
					<br>
					(식장 주변 주차 불가)
				</p>
				<p>
					<div class="text-center text-bold">
						대중교통
					</div>
					강남구청역 하차 하시고 2번출구로 나오시면 예식장 까지 운행하는 셔틀버스가 있습니다. 
				</p>
				<p>
					<div class="text-center text-bold">
						셔틀버스 운행시간
					</div>
					10분 간격 운행
				</p>
			</div>
			<div id="memories">
				<h3>
					<span>웨딩</span> 사진
				</h3>
				<div class="our-pic row">
					<div class="col-xs-6 col-md-3">
						<img src="./images/imgs/memories/11.JPG" class="img-responsive" alt="Image" />
					</div>
					<div class="col-xs-6 col-md-3">
						<img src="./images/imgs/memories/33.JPG" class="img-responsive" alt="Image" />
					</div>export PATH="$PATH:~/.composer/vendor/bin"
					<div class="col-xs-6 col-md-3">
						<img src="./images/imgs/memories/44.JPG" class="img-responsive" alt="Image" />
					</div>
					<div class="col-xs-6 col-md-3">
						<img src="./images/imgs/memories/55.JPG" class="img-responsive" alt="Image" />
					</div>
					<div class="col-xs-6 col-md-3">
						<img src="./images/imgs/memories/66.JPG" class="img-responsive" alt="Image" />
					</div>
				</div>
			</div>
		</div>
	</div>
	
@endsection

