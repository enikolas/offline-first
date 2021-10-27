/// <reference lib="webworker" />

// export empty type because of tsc --isolatedModules flag
export type {};
// Needed because CRA
type craIgnoredType = { __WB_MANIFEST: any };
// Extends the ServiceWorker with a CRA mandatory property
declare const self: ServiceWorkerGlobalScope & craIgnoredType;

const ignored = self.__WB_MANIFEST;

const staticCacheName = "weatherAppStatic";
const staticCacheVersion = "v0.0.1";

/**
 * On install as dependency: Caching static files
 */
self.addEventListener('install', (event) => {
	const onInstall = async () => {
		const cache = await caches.open(`${staticCacheVersion}::${staticCacheName}`);
		cache.addAll([
			'/static',
			'/index.html'
		]);
		// cache.addAll(self.__WB_MANIFEST);
	};

	event.waitUntil(onInstall());
});

const dynamicCacheName = "weatherAppDynamic";

/**
 * On each fetch request
 */
self.addEventListener('fetch', (event) => {
	const request = event.request;

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
