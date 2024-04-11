let continar1 = document.querySelector("#continar1");
let continar2 = document.querySelector("#continar2");
let continar3 = document.querySelector("#continar3");
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
like.addEventListener("click",function(){
  let imj = document.getElementById("image_like");
  imj.src = "picture/likeclick.svg";
});
// afeer click save change source
let save = document.getElementById("sv");
save.addEventListener("click",function(){
  let imej = document.getElementById("image_save");
  imej.src = "picture/saveclick.svg";
});

