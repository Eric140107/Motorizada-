self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

// Listener para notificações disparadas pelo app
self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'icon.png',
        badge: 'icon.png',
        ongoing: true
    };
    event.waitUntil(self.registration.showNotification('Project Red Velocímetro', options));
});
