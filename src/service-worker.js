/* eslint-disable no-restricted-globals */

import {clientsClaim} from 'workbox-core';
import {ExpirationPlugin} from 'workbox-expiration';
import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({url}) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [new ExpirationPlugin({maxEntries: 50})],
    }),
);

self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
