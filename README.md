# How-to

1. Copy the code listed under the vendor you wish to copy your cart from below (triple click to select whole line)
2. Navigate to said vendors cart
3. Press Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux)
4. Paste the script into the console
5. Press enter

### Bullcity Flavors
```
!function(){!function(e){if(!window.location.href.includes(e.cart)&&window.confirm("You must go to your cart first. After pressing OK, paste the script again."))return void window.location.replace(e.cart);if(!document.querySelectorAll(e.flavor).length)return void alert("You have no flavors in your cart to copy.");(e=>{const o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)})("```\n"+Array.from(document.querySelectorAll(e.flavor)).map(e=>e.childNodes[0].textContent.trim()).sort().join("\n").concat("\n```")),alert("flavors have been copied to, go paste them somewhere!")}({cart:"https://www.bullcityflavors.com/cart.php",flavor:".cart-item h4 a"})}();
```

### Ecigexpress
```
!function(){!function(e){if(!window.location.href.includes(e.cart)&&window.confirm("You must go to your cart first. After pressing OK, paste the script again."))return void window.location.replace(e.cart);if(!document.querySelectorAll(e.flavor).length)return void alert("You have no flavors in your cart to copy.");(e=>{const o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)})("```\n"+Array.from(document.querySelectorAll(e.flavor)).map(e=>e.childNodes[0].textContent.trim()).sort().join("\n").concat("\n```")),alert("flavors have been copied to, go paste them somewhere!")}({cart:"https://ecigexpress.com/cart",flavor:"h5.product-name a"})}();
```

### Chef's Flavours
```
!function(){!function(e){if(!window.location.href.includes(e.cart)&&window.confirm("You must go to your cart first. After pressing OK, paste the script again."))return void window.location.replace(e.cart);if(!document.querySelectorAll(e.flavor).length)return void alert("You have no flavors in your cart to copy.");(e=>{const o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)})("```\n"+Array.from(document.querySelectorAll(e.flavor)).map(e=>e.childNodes[0].textContent.trim()).sort().join("\n").concat("\n```")),alert("flavors have been copied to, go paste them somewhere!")}({cart:"https://chefsflavours.co.uk/cart.php",flavor:".cart-item h4 a"})}();
```

### Nicotine River
```
!function(){!function(e){if(!window.location.href.includes(e.cart)&&window.confirm("You must go to your cart first. After pressing OK, paste the script again."))return void window.location.replace(e.cart);if(!document.querySelectorAll(e.flavor).length)return void alert("You have no flavors in your cart to copy.");(e=>{const o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)})("```\n"+Array.from(document.querySelectorAll(e.flavor)).map(e=>e.childNodes[0].textContent.trim()).sort().join("\n").concat("\n```")),alert("flavors have been copied to, go paste them somewhere!")}({cart:"https://riversupplyco.com/cart",flavor:"h5.product-title a"})}();
```

### Flavourwala
```
!function(){!function(e){if(!window.location.href.includes(e.cart)&&window.confirm("You must go to your cart first. After pressing OK, paste the script again."))return void window.location.replace(e.cart);if(!document.querySelectorAll(e.flavor).length)return void alert("You have no flavors in your cart to copy.");(e=>{const o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)})("```\n"+Array.from(document.querySelectorAll(e.flavor)).map(e=>e.childNodes[0].textContent.trim()).sort().join("\n").concat("\n```")),alert("flavors have been copied to, go paste them somewhere!")}({cart:"https://www.flavourwala.com/cart/",flavor:"td.product-name a"})}();
```
