const w = window;
const d = document;
const fontLoading = () => {
	const promise = new Promise((resolve, reject) => {
		const nowLoadingEl = d.getElementById('now-loading');
		WebFont.load({
			custom: {
				families: ['SDGothicNeocTTF-aUltLt', 'notoSans_ko_thin', 'SDGothicNeoaUniTTF-eMd'],
			},
			timeout: 6000,
			active: () => {
				setTimeout(() => {
					resolve();
				}, 200);
			},
			loading: () => {
				console.log("loaded");
				// 로딩이 시작될때
			},
		});
	});
	return promise;
};

const scrollEvent = () => {
	const bodyHeight = d.body.offsetHeight;
	w.onscroll = () => {
		(typeof w.isMainPicBlur === 'function' && location.pathname === '/') && w.isMainPicBlur();
	};
	w.isMainPicBlur = () => {
		if (w.scrollY > (bodyHeight / 2.2)) {
			d.querySelectorAll('.main-pic').item(0).classList.remove('on-blur');
			w.isMainPicBlur = null;
		}
	};
};

const morePicClick = () => {
	d.getElementById('more-pic').addEventListener('click', () => {
		location.href = location.pathname === '/' ? '/bk-pictures' : '/';
	});
};


export { fontLoading, scrollEvent, morePicClick };