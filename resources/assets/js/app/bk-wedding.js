import { fontLoading, scrollEvent, morePicClick } from '../utils/declare-function.js';
import $ from 'jquery';

const d = document;
const w = window;
w.onload = () => {
	d.body.classList.add('main-wrapper');
	fontLoading().then(() => {
		d.getElementById('now-loading').style.display = 'none';
		location.pathname === '/' && w.initMap();
	});
	morePicClick();
	scrollEvent();
};


// const promiseImgSrc = src => {
// 	return new Promise((resolve, reject) => {
// 		const tmpImg = new Image();
// 		tmpImg.onload = src => {
// 			resolve("ok");
// 		};
// 		tmpImg.src = src;
// 	});
// };
// const imgOnload = () => {
// 	const imgSrcArr = [
// 		'11.JPG',
// 		'22.jpg',
// 		'33.JPG',
// 		'44.JPG',
// 		'55.JPG',
// 		'66.JPG',
// 	];
// 	const promises = [];
// 	imgSrcArr.map((imgSrc, i) => {
// 		promises[i] = promiseImgSrc(`./public/imgs/memories/${imgSrc}`);
// 	});

// 	Promise.all(promises).then(function(values) {
// 	    console.log("모두 완료됨", values);
// 	}, function(reason) {
// 	    console.log("실패 이유", reason);
// 	});
// };

// d.getElementById('memories-toggle-btn').addEventListener('click', () => {
// 	d.getElementById('wrapper').classList.toggle('memories-opened');
// 	if (d.getElementById('wrapper').className.indexOf('memories-opened') === -1) {
// 		w.scroll(0, d.body.scrollHeight);
// 	}
// });


// d.getElementById('food-click').addEventListener('click', () => {
//     const foodEl = d.getElementById('food-div');
//     const img = d.createElement('img');
//     const foodList = [
//     	'food1.JPG',
//     	'food2.JPG',
//     	'food3.JPG',
//     	'food4.JPG',
//     	'food5.JPG',
//     	'food6.JPG',
//     	'food7.JPG',
//     ];
//     const selectFood = foodList[parseInt(Math.random() * 7)];
//     img.onload = () => {
// 		d.getElementById('food-click').appendChild(img);
// 		img.classList.add('img-responsive');
// 		img.classList.add('hidden-soon');
// 		setTimeout(() => {
// 			// img.classList.add('hidden');
// 		}, 400);
//     };
//     img.setAttribute('src', `./public/imgs/foods/${selectFood}`);
// });

w.initMap = () => {
	const nuHouse = { lat: 37.514044, lng: 127.037267 };
	const map = new google.maps.Map(d.getElementById('map'), {
		zoom: 16,
		center: nuHouse,
		draggable: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		rotateControl: false,
		fullscreenControl: false,
	});
	const marker = new google.maps.Marker({
		position: nuHouse,
		map,
		draggable: false,
		animation: google.maps.Animation.DROP,
	});
	const toggleBounce = () => {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	};
    map.addListener('click', toggleBounce);
};