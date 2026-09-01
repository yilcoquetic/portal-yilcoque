
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
if(menuBtn){
  menuBtn.addEventListener("click", ()=> mainNav.classList.toggle("open"));
}
document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click", ()=> mainNav && mainNav.classList.remove("open"));
});

function openDocument(title, url){
  const modal = document.getElementById("docModal");
  const frame = document.getElementById("docFrame");
  const titleEl = document.getElementById("modalTitle");
  const placeholder = document.getElementById("docPlaceholder");
  titleEl.textContent = title;
  if(url && url !== "#"){
    frame.src = url;
    frame.style.display = "block";
    placeholder.style.display = "none";
  }else{
    frame.src = "about:blank";
    frame.style.display = "none";
    placeholder.style.display = "block";
  }
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDocument(){
  const modal = document.getElementById("docModal");
  const frame = document.getElementById("docFrame");
  modal.classList.remove("open");
  frame.src = "about:blank";
  document.body.style.overflow = "";
}
document.addEventListener("click", e=>{
  if(e.target.matches("[data-doc]")){
    openDocument(e.target.dataset.title, e.target.dataset.doc);
  }
  if(e.target.id === "docModal") closeDocument();
});
document.addEventListener("keydown", e=>{
  if(e.key === "Escape") closeDocument();
});
