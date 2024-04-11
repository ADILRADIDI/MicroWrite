let continar1 = document.querySelector("#continar1");
let continar2 = document.querySelector("#continar2");
let continar3 = document.querySelector("#continar3");
let continar4 = document.querySelector("#container4");
// button write in version desktop and tablette
let write = document.querySelector(".write");

// button write in version mobile
let wwrite = document.querySelector(".wwrite");

let btnz = document.querySelector("#btnz");

let close = document.querySelector(".close");
let close2 = document.querySelector(".close2");
let body = document.querySelector(".body");
let title_de_post = document.querySelector(".title_de_post");
let image_de_post = document.querySelector(".image_de_post");
let description_de_post = document.querySelector(".description_de_post");
let n_post = 0;
let titles = [];
let descriptions = [];
let images = [];

write.onclick = function () {
  continar1.style.display = "none";
  continar3.style.display = "block";
};
wwrite.onclick = function () {
  continar1.style.display = "none";
  continar3.style.display = "block";
};
close.onclick = function () {
  continar1.style.display = "block";
  continar3.style.display = "none";
};
close2.onclick = function () {
  continar1.style.display = "block";
  continar2.style.display = "none";
};

// function add post
function add_post() {
  let text1 = document.getElementById("title").value;
  let text2 = document.getElementById("description").value;
  let image = document.getElementById("input_file").files[0];

  titles.push(text1);
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  continar1.style.display = "block";
  continar3.style.display = "none";
  descriptions.push(text2);
  images.push(image);

  let section = document.createElement("section");
  section.classList = "mx-3";
  body.appendChild(section);

  let div1 = document.createElement("div");
  div1.classList = "ps w-full";
  section.appendChild(div1);

  let div2 = document.createElement("div");
  div2.classList = "container_post flex items-center";
  div1.appendChild(div2);

  let imag = document.createElement("img");
  imag.classList = "mt-2 mr-2 w-8 h-8 rounded-full";
  imag.src = "picture/victime1.jpg";
  div2.appendChild(imag);

  let p1 = document.createElement("p");
  p1.classList = "mr-5";
  p1.textContent = "daff peter";
  div2.appendChild(p1);

  // .date from laptop user
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  // aff date exact in post
  let p2 = document.createElement("p");
  p2.textContent = day + "." + month + "." + year;
  div2.appendChild(p2);

  let div3 = document.createElement("div");
  div3.classList = "m-auto flex font-bold text-base";
  div1.appendChild(div3);

  let h11 = document.createElement("h1");
  h11.classList = "ml-5 mr-10 w-100";
  h11.textContent = titles[n_post];
  div3.appendChild(h11);

  let div4 = document.createElement("div");
  div4.classList = "flex m-auto justify-around";
  div1.appendChild(div4);

  let div6 = document.createElement("div");
  div6.classList = "font-bold text-sm mt-5";
  div4.appendChild(div6);

  let p3 = document.createElement("p");
  p3.textContent = "2 min read";
  div6.appendChild(p3);

  let div5 = document.createElement("div");
  div5.classList = "flex mt-3";
  div4.appendChild(div5);

  let imag2 = document.createElement("img");
  imag2.classList = "w-10";
  imag2.src = "picture/save.svg";
  div5.appendChild(imag2);

  let a1 = document.createElement("a");
  div5.appendChild(a1);

  let imag3 = document.createElement("img");
  imag3.classList = "w-8 mt-1 remove_post";
  imag3.src = "picture/outlined remove.svg";
  a1.appendChild(imag3);

  let hr1 = document.createElement("hr");
  hr1.classList = "bg-gray-400";
  body.appendChild(hr1);

  n_post++;

  //affich container post
  let container_post = Array.from(document.querySelectorAll(".container_post"));
  container_post.forEach((ele, i) => {
    ele.addEventListener("click", function () {
      continar1.style.display = "none";
      continar2.style.display = "block";
      title_de_post.textContent = titles[i];
      image_de_post.src = "picture/pic.webp";
      description_de_post.textContent = descriptions[i];
    });
  });

  //remove post after adding
  let remove_post = Array.from(document.querySelectorAll(".remove_post"));
  let d1 = Array.from(document.querySelectorAll(".ps"));
  remove_post.forEach((x, i) => {
    x.addEventListener("click", function () {
      console.log(d1[i]);
      d1[i].remove();
    });
  });
}
btnz.addEventListener("click", add_post);
//afeer click like change source
let like = document.getElementById("applaudise");
like.addEventListener("click", function () {
  let imj = document.getElementById("image_like");
  imj.src = "picture/likeclick.svg";
});
// afeer click save change source
let save = document.getElementById("sv");
save.addEventListener("click", function () {
  let imej = document.getElementById("image_save");
  imej.src = "picture/saveclick.svg";
});

//add comment
let comm = Array.from(document.querySelectorAll(".cmt_aa"));
comm.forEach((ele, i) => {
  ele.addEventListener("click", function () {
    let con2 = document.querySelector("#continar2");
    con2.style.display = "none";
    let con4 = document.querySelector("#container4");
    con4.style.display = "block";
  });
});


// Create a div element with class "comment"
let diiv = document.createElement("div");
diiv.classList.add("comment hidden");
// Append the div to "continar4" (assuming it's already defined)
continar4.appendChild(diiv);

// Create a section element for comments
let Sect_ion = document.createElement("section");
Sect_ion.id = "comment";



// Create header for comments section
let header_div = document.createElement("div");
header_div.classList.add("flex");

let header_a = document.createElement("a");
header_a.href = "post.html";
let headerImage = document.createElement("img");
headerImage.classList.add("w-16");
headerImage.src = "picture/return.svg";
header_a.appendChild(headerImage);
header_div.appendChild(header_a);

let header_title = document.createElement("h1");
header_title.classList.add("m-auto", "items-center", "font-bold", "text-3xl");
header_title.textContent = "Responses";
header_div.appendChild(header_title);

// Append header to the section
Sect_ion.appendChild(header_div);
Sect_ion.appendChild(document.createElement("hr"));

// Create rectangle for input
let Rectangle = document.createElement("div");
Rectangle.classList.add(
  "bg-yellow-100",
  "m-auto",
  "items-center",
  "w-4/5",
  "mt-5",
  "rounded-2xl",
);
let input_field = document.createElement("input");
input_field.type = "text";
input_field.contentEditable = true;
input_field.placeholder = "what are you thoughts?";
input_field.classList.add(
  "w-full",
  "h-56",
  "outline-none",
  "bg-yellow-100",
  "text-2xl",
  "input_comment"
);
Rectangle.appendChild(input_field);

// Create button for publishing reply
let button_dv = document.createElement("div");
let button_a = document.createElement("a");
button_a.href = "#";
button_a.textContent = "Respond";
button_a.classList.add(
  "text-white",
  "text-xl",
  "bg-yellow-500",
  "w-36",
  "rounded-2xl",
  "font-bold",
  "m-auto",
  "items-center",
  "justify-center",
  "flex",
  "hover:text-black"
);
button_dv.appendChild(button_a);
Rectangle.appendChild(button_dv);

// Append rectangle to the section
Sect_ion.appendChild(Rectangle);
Sect_ion.appendChild(document.createElement("hr"));

// Append section to the div container "diiv"
diiv.appendChild(Sect_ion);

// Create second section for listing comments
let listCommentsSection = document.createElement("section");
listCommentsSection.id = "list_comments";

// Create a comment
let commentDiv = document.createElement("div");
commentDiv.id = "first_comment";
let commentAccountDiv = document.createElement("div");
commentAccountDiv.classList.add("flex");
let commentAccountImage = document.createElement("img");
commentAccountImage.src = "picture/aaazz.jpg";
commentAccountImage.alt = "";
commentAccountImage.classList.add("rounded-full", "w-10", "h-10", "mx-3");
commentAccountDiv.appendChild(commentAccountImage);
let commentAccountTitle = document.createElement("h1");
commentAccountTitle.textContent="smart man"
commentAccountTitle.classList.add("text-xl", "font-bold");
commentAccountDiv.appendChild(commentAccountTitle);
commentDiv.appendChild(commentAccountDiv);
let commentTextDiv = document.createElement("div");
commentTextDiv.id = "text";
let commentText = document.createElement("p");
commentText.classList.add("text-base", "font-medium", "mx-4");
commentText.textContent="i have this and we will go to ..... "
commentTextDiv.appendChild(commentText);
commentDiv.appendChild(commentTextDiv);
let commentLinkDiv = document.createElement("div");
let commentLikeLink = document.createElement("a");
commentLikeLink.href = "#";
let commentLikeImage = document.createElement("img");
commentLikeImage.src = "picture/applause.svg";
commentLikeImage.classList.add("w-10", "mx-5", "mt-3");
commentLikeLink.appendChild(commentLikeImage);
commentLinkDiv.appendChild(commentLikeLink);
commentDiv.appendChild(commentLinkDiv);
listCommentsSection.appendChild(commentDiv);
listCommentsSection.appendChild(document.createElement("hr"));

// Append the second section to the div container "diiv"
diiv.appendChild(listCommentsSection);

// Append the div container to the body
document.body.appendChild(diiv);

