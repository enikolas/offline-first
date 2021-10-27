/// <reference lib="webworker" />

// export empty type because of tsc --isolatedModules flag
export type {};

// CRA extended feature
type CraStaticResource = { revision: string, url: string };
type CraExtended = { __WB_MANIFEST: CraStaticResource[] };

declare const self: ServiceWorkerGlobalScope & CraExtended;

const staticCacheName = "weatherAppStatic";
const staticCacheVersion = "v0.0.1";

/**
 * On install as dependency: Caching static files
 */
self.addEventListener('install', (event) => {
	const onInstall = async (): Promise<void> => {
		const cache = await caches.open(`${staticCacheVersion}::${staticCacheName}`);

		const staticResources = self.__WB_MANIFEST.map((resource) => resource.url);

		/*
		return cache.addAll([
			'/offline-first/static',
			'/offline-first/index.html'
		]);
		*/

		return cache.addAll(staticResources);
	};

	event.waitUntil(onInstall);
});

const dynamicCacheName = "weatherAppDynamic";

/**
 * On each fetch request
 */
self.addEventListener('fetch', (event) => {
	const request = event.request;

	/**
	 * Chrome extensions dispatch some internal fetchs,
	 * that a service worker may intercept if needed.
	 * For this case, we don't want to intercept it,
	 * so we just ignore it.
	 */
	const isBrowserExtensionRequest = !request.url.startsWith("http");
	if (isBrowserExtensionRequest) {
		event.respondWith(fetch(request));
		return;
	}

	const onFetch = async (): Promise<Response> => {
		const cache = await caches.open(dynamicCacheName);

		try {
			const response = await fetch(request);

			if (request.method === "GET") {
				cache.put(request, response.clone());
			}

			return response;
		} catch(err) {
			return caches.match(request) as Promise<Response>;
		}
	};

	event.respondWith(onFetch());
});
