'use strict';

chrome.webRequest.onBeforeRequest.addListener(function (details) {
	if (details.method === 'GET') {
		return {
			redirectUrl: details.url + '?q=is:open+is:issues+sort:updated-desc'
		};
	}
}, {
	urls: [
		'https://github.com/*/*/issues'
	],
	types: [
		'main_frame'
	]
}, [
	'blocking'
]);
