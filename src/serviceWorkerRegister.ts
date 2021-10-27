
export const registerServiceWorker = () => {
	if ('serviceWorker' in navigator) {
		const onSuccess = (registration: ServiceWorkerRegistration) => {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		};
	
		const onFail = (error: any) => {
			console.log('ServiceWorker registration failed: ', error);
		};
	
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/service-worker.js')
			.then(onSuccess)
			.catch(onFail);
		});
	} else {
		console.log("Your browser does not support service worker");
	}
};
