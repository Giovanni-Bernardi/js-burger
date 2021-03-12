calculateBtn = document.getElementById('calculate')

//COUPONS CODES
var coupons = [
    "ciao1234",
    "asdfasdf",
    "leeeeeee",
    "burger10",
  ];
  
  var finded = false;
  var price = 0;
  
  var ingredientList = document.getElementsByTagName("li");
  
  for (var i = 0; i < ingredientList.length; i++) {
  
    var listItem = ingredientList[i];
  
    listItem.addEventListener('click',function(){
  
      this.children[2].checked = !this.children[2].checked;
      console.log(this.children[2].checked);
    })
  }
  
//CALCULATE BUTTON
  calculateBtn.addEventListener('click', function(){
    price = 7.50;
    var nameBurg = document.getElementById("name-burg").value;
  
    if (nameBurg.length < 1) {
  
      alert("please enter the name of the burger");
    }else {

      // INGREDIENTS CHECKBOXES
      var ingredients = document.getElementsByClassName("checkbox");
      for (var i = 0; i < ingredients.length; i++) {
  
        var ingredient = ingredients[i];
        var isChecked = ingredient.checked;
        sumingredient = parseInt(ingredient.dataset.ing);
  
        if (isChecked) {
  
          price = sumingredient + price;
        }
      }
  
      // COUPONS
      var coupon = document.getElementById("coupon").value;
  
      for (var i = 0; i < coupons.length; i++) {
  
        var codeCoupon = coupons[i];
        if (codeCoupon == coupon) {
  
          finded = true;
        }
      }
      if (finded) {
  
        price = price * 0.90;
      }
  
      finalPrice = document.getElementById("price");
      finalPrice.innerHTML = price.toFixed(2);
    }
  })