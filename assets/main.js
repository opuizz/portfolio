//버튼 이동하기
// document.querySelectorAll(".dot ul li a").forEach(function (elem) {});

document.querySelectorAll("#sub_nav ul li a").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(elem.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// top 버튼
const topBtn = document.querySelector("#top_btn");
// 스크롤 시 버튼 표시
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 3000) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// 클릭 시 맨 위로 이동 (부드럽게)
topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
