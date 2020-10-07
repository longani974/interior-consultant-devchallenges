const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  burger.classList.toggle("cross"), navigation.classList.toggle("navActive");
});
