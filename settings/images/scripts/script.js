// Fetch the content from another HTML file
fetch('/1/suggested-posts/posts.html')
    .then(response => response.text())
    .then(data => {
        // Insert the content into the 'content' div
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error fetching content:', error));



      
  fetch('/1/recommend/shop.html') 
  .then(response => response.text())
  .then(data => {
      document.getElementById('shop').innerHTML = data;
  })
  .catch(error => console.error('Error fetching content:', error));












