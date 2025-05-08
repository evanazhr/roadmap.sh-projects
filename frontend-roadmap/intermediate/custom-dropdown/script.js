const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownToggleText = document.querySelector(".dropdown-toggle p");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItem = document.querySelectorAll(".dropdown-item");

dropdownToggle.addEventListener("click", () => {
  dropdownToggle.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});

dropdownItem.forEach((item, index) => {
  const sibling = Array.from(item.parentNode.children);
  item.addEventListener("click", () => {
    if(!item.classList.contains("selected")){
        dropdownToggleText.textContent = item.textContent;
        sibling.forEach((e) => e.classList.remove("selected"));
        item.classList.add("selected");
    }else{
        dropdownToggleText.textContent = "Select an option"
        item.classList.remove("selected");
    }
  });
});
