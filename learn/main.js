const postsList = document.querySelector('.posts-list');
const addPostForm = document.querySelector('.add-post-form');
let output = '';

const renderPost = function(posts){
    posts.forEach(function(post){
        output += `
        <div class="card mt-4 col-md-6 bg-light">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
                <p class="card-text">${post.body}</p>
                <a href="#" class="card-link">Edit</a>
                <a href="#" class="card-link">Delete</a>
            </div>
        </div>
        ` ;
    });
    postsList.innerHTML = output;
}
const url = 'http://localhost:5000/api/posts';

//Get - Read the posts
//Method: GET
fetch(url)
    .then(function (res){
        res.json();
    })
    .then(function (data){
        renderPost(data);
    })
//Create - Insert
//Method: POST
addPostForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'app;ication/json'
        },
        // body: JSON.stringify({
        //     title:
        // })
    })
})