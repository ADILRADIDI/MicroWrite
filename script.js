let continar1 = document.querySelector("#continar1");
let continar2 = document.querySelector("#continar2");
let continar3 = document.querySelector("#continar3");
let continar4 = document.querySelector("#container4");
// button write in version desktop and tablette
let write = document.querySelector(".write");

// button write in version mobile
let wwrite = document.querySelector(".wwrite");

let btnz = document.querySelector("#btnz");
//btn return section add post two inputs..
let close = document.querySelector(".close");
///btn retunr section view post .
let close2 = document.querySelector(".close2");
//
let close_comment = document.querySelectorAll("#id1");

let body = document.querySelector(".body");
let title_de_post = document.querySelector(".title_de_post");
//def selector inp image--
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
  let image = document.getElementById("urlInput").value;

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  continar1.style.display = "block";
  continar3.style.display = "none";
  titles.push(text1);
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
      image_de_post.src = image;
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

let comment = [];
//add comment
let comm = Array.from(document.querySelectorAll(".cmt_aa"));
comm.forEach((el, i) => {
  el.addEventListener("click", function () {
    let con2 = document.querySelector("#continar2");
    con2.style.display = "none";
    continar4.style.display = "block";
    let inputElements = document.querySelectorAll(".inpt");
    // comment.push(text3);
    inputElements.forEach(input => {
    let val = input.value.trim();
    })
  });
});

// Create a div element with class "comment"
let diiv = document.createElement("div");
// Append div in containe4
continar4.appendChild(diiv);

let sectionOne = document.createElement("section");
diiv.appendChild(sectionOne);
// firts div inside section one
let div_one = document.createElement("div");
div_one.classList.add("flex");
sectionOne.appendChild(div_one);
//img and link inside first div in section one
let link_div_one = document.createElement("a");
link_div_one.href = "#";
link_div_one.classList.add("close_com");
link_div_one.id = "id1";
div_one.appendChild(link_div_one);

// ...
// close_comment
link_div_one.onclick = () => {
  continar1.style.display = "block";
  continar4.style.display = "none";
};

let img_link_div_one = document.createElement("img");
img_link_div_one.classList.add("w-16");
img_link_div_one.src = "picture/return.svg";
// img_link_div_one.href = "index.html";
link_div_one.appendChild(img_link_div_one);
//heading h1 inside first div in section one
let he1 = document.createElement("h1");
he1.classList = "m-auto items-center font-bold text-3xl";
he1.textContent = "Responses";
div_one.appendChild(he1);
// hr
let hrr = document.createElement("hr");
sectionOne.appendChild(hrr);

//second div inside section one
let div_two = document.createElement("div");
div_two.classList = "bg-yellow-100 m-auto items-center w-4/5 mt-5 rounded-2xl";
sectionOne.appendChild(div_two);
// input text for take comments from user inside div_two
let first_input = document.createElement("input");
first_input.classList = "inpt w-full h-56 outline-none bg-yellow-100 text-2xl";
first_input.type = "text";
first_input.placeholder = "what are you thoughts?";
first_input.contentEditable = "true";
div_two.appendChild(first_input);

let sm_div_two = document.createElement("div");
div_two.appendChild(sm_div_two);

let sm_link = document.createElement("a");
sm_link.classList =
  "text-white text-xl bg-yellow-500 w-36 rounded-2xl font-bold m-auto items-center justify-center flex hover:text-black";
sm_link.href = "#";
sm_link.classList.add("repond");
sm_link.textContent = "Repond";
sm_div_two.appendChild(sm_link);

let hrrr = document.createElement("hr");
hrrr.classList.add("mt-8");
sectionOne.appendChild(hrrr);

// ---------------------------------------
// --------------------------------------------------***
// -----------------------------------------------------------
// let inpt = document.getElementsByClassName("inpt").value;

let reply = Array.from(document.querySelectorAll(".repond"));
reply.forEach((e, i) => {
  e.addEventListener("click", function () {
    sectionTwo.classList.remove("hidden");
    let inppt = document.querySelector(".inpt");
    let tx = document.querySelectorAll(".text_com");
    tx.forEach((e) => {
      e.textContent = inppt.value;
    });
  });
});

// section 2 for list comments okay
let sectionTwo = document.createElement("section");
sectionTwo.classList.add("hidden");
diiv.appendChild(sectionTwo);

let div_1 = document.createElement("div");
div_1.id = "first_comment";
sectionTwo.appendChild(div_1);

let div_1_sm = document.createElement("div");
div_1_sm.classList.add("flex");
div_1.appendChild(div_1_sm);

let img_2 = document.createElement("img");
img_2.classList = "rounded-full w-10 h-10 mx-3";
img_2.src = "picture/aaazz.jpg";
div_1_sm.appendChild(img_2);

let hy = document.createElement("h1");
hy.classList = "text-xl font-bold";
hy.textContent = "smart man";
div_1_sm.appendChild(hy);

let div_2_sm = document.createElement("div");
div_2_sm.id = "text";
div_1.appendChild(div_2_sm);

let pr = document.createElement("p");
pr.classList = "text_com text-base font-medium mx-4";
// pr.textContent = "";
div_2_sm.appendChild(pr);

let div_3_sm = document.createElement("div");
div_1.appendChild(div_3_sm);

let link_sm_1 = document.createElement("a");
link_sm_1.id = "applaudise";
link_sm_1.href = "#";

let img_3 = document.createElement("img");
img_3.classList = "w-10 mx-5 mt-3";
img_3.src = "picture/applause.svg";
div_3_sm.appendChild(img_3);

//remove default prevent in like and comments
document.getElementById("applaudise").addEventListener("click", function (ev) {
  ev.preventDefault();
});
///save default prevent dont scroll page
document.getElementById("image_save").addEventListener("click", function (ev) {
  ev.preventDefault();
});
