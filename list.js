const shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  "Cheese",
  "Apples",
  "Bananas",
  "Chicken breasts",
  "Sugar",
];
function displayShoppingList() {
  const ul = document.getElementById("shoppingList");
  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}
displayShoppingList();

const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addBtn");
const purchaseButton = document.getElementById("markPurchasedBtn");
const clearButton = document.getElementById("clearListBtn"); // Fixed typo: should be "clearListBtn" instead of "clearListbtn"
const itemList = document.getElementById("shoppingList");

function addNewItems() {
  const newItem = itemInput.value.trim();

  if (newItem !== "") {
    const newList = document.createElement("li");
    newList.textContent = newItem;
    itemList.appendChild(newList);
    itemInput.value = "";
  }
}

addButton.addEventListener("click", addNewItems);

function purchaseItems() {
  const purchasedList = document.getElementById("purchasedList");
  const shoppingListItems = document.querySelectorAll("#shoppingList");

  shoppingListItems.forEach((item) => {
    if (item.classList.contains("purchased")) {
      const newPurchasedItem = document.createElement("li");
      newPurchasedItem.textContent = item.textContent;
      purchasedList.appendChild(newPurchasedItem);
    }
  });
}

purchaseButton.addEventListener("click", purchaseItems);

clearButton.addEventListener("click", function () {
  purchaseButton.innerHtml="";
  itemList.innerHTML = "";
});
