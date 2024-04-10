
// function add post
function add_post() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let picture = document.getElementById("input_file").files[0];
  //   create post
  let post = {
    title: title,
    description: description,
    picture: picture,
  };
  /*take informations*/
  let existing_posts = JSON.parse(localStorage.getItem("posts")) || [];
  existing_posts.push(post);
//--> Object to JSON ..
  localStorage.setItem("posts", JSON.stringify(existing_posts));
  /*clear*/
  document.getElementById("title").value = "";
  document.getElementById("description").value = '';
  
  display_list_post();
}
// event btn publish in add post
var btn = document.getElementById("btn");
btn.addEventListener("click", add_post);

function display_page_post(){
    let postsContainer = document.getElementById("posts_container");
    let existPostHtml = localStorage.getItem("postHtml") || '';
    postsContainer = innerHTML.existPostHtml
}

function display_list_post() {
  let postsContainer = document.getElementById("listposts");
  let existPostHtml = localStorage.getItem("postHtml") || "";
  postsContainer = innerHTML.existPostHtml;
}
display_page_posts();










