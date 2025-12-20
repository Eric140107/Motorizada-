// sw.js - Service Worker para Notificação Persistente
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'icon.png',
        badge: 'icon.png',
        ongoing: true, // Torna a notificação fixa (não pode ser removida com swipe)
        vibrate: [100],
        data: { dateOfArrival: Date.now() }
    };
    event.waitUntil(self.registration.showNotification('Velocímetro Project Red', options));
});

// Mantém o SW ativo
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});
