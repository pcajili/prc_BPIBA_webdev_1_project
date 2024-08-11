function openBlogPost(itemData) {
    localStorage.setItem('selectedItemId', JSON.stringify(itemData));       // stringify to preserve data type
    window.location.href = 'blog_post_1.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const itemId = JSON.parse(localStorage.getItem('selectedItemId'));      // retrieve data
    if (itemId) {
        fetch('database/json/data.json')
            .then(response => response.json())
            .then(data => {
                const item = data.items.find(item => item.id === itemId);   // find itemId in array item
                if (item) {
                    document.getElementById('item-pagetitle').innerText = item.heading;
                    document.getElementById('item-heading').innerText = item.heading;
                    document.getElementById('item-rating').innerText = item.rating;
                    document.getElementById('item-img').src = item.img_link;
                    document.getElementById('item-date').innerText = item.date;
                    document.getElementById('item-description').innerHTML = item.description;
                } else {
                    document.getElementById('item-pagetitle').innerText = 'Item not found';
                    document.getElementById('item-heading').innerText = 'Item not found';
                    document.getElementById('item-rating').innerText = '';
                    document.getElementById('item-img').src = '';
                    document.getElementById('item-date').innerText = '';
                    document.getElementById('item-description').innerHTML = '';                
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    // localStorage.removeItem('selectedItemId');                               // Clear data after use
});

