 const firstItem = document.getElementById("first");
 const secondItem = document.getElementById("second");
 const thirdItem = document.getElementById("third");

 const deleteFirstItem = document.getElementById("deleteFirst");
 const deleteSecondItem = document.getElementById("deleteSecond");
 const deleteThirdItem = document.getElementById("deleteThird");

//this function would heip remove the items when called.
function getItem (e) {
  e.remove();
}

//event listener to listen for a click event on the delete button and remove item.
deleteFirstItem.addEventListener('click', () => getItem(firstItem));
deleteSecondItem.addEventListener('click', () => getItem(secondItem));
deleteThirdItem.addEventListener('click', () => getItem(thirdItem));

const moveSecondToFront = document.getElementById("moveSecondToStart");
const moveThirdToFront = document.getElementById("moveThirdToStart");

moveSecondToFront.addEventListener('click', function () {
  let items = document.getElementsByTagName("div");
  document.body.insertBefore(items[1], items[0]);
});

moveThirdToFront.addEventListener('click', function () {
  let items = document.getElementsByTagName("div");
  const movee = document.body.insertBefore(items[2], items[0]);
  movee;

  function makeElement(){
  firstItem.innerHTML.append("#deleteFirst")='<button>mgmoh</button>';
  }
  if (movee){                    //this is to test the code to ensure that the 
    moveThirdToFront.remove();   //............move to start button is able to disappear when it is moved to front
    makeElement();
  }
});


