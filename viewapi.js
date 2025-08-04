(function(){
    // Update UI elements
    const status = document.getElementById('status');
    const ip = document.getElementById('ip');
    const views = document.getElementById('views');
    const firstVisit = document.getElementById('first-visit');

    // Make API call
    fetch('https://new-game-web-view-count-api.vercel.app')
    .then(r => r.json())
    .then(data => {
        console.log('✅ View tracked:', data);

        // Update UI if elements exist
        if (status) {
            status.textContent = '✅ Tracked';
            status.className = 'success';
        }
        if (ip) ip.textContent = data.ip || 'Hidden';
        if (views) views.textContent = data.total_views || '1';
        if (firstVisit) {
            const date = new Date(data.first_viewed);
            firstVisit.textContent = date.toLocaleString() || 'Just now';
        }
    })
    .catch(err => {
        console.log('❌ View tracking failed:', err);

        // Update UI on error
        if (status) {
            status.textContent = '❌ Failed';
            status.className = 'error';
        }
    });
})();
