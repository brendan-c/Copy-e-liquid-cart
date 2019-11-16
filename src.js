
  const vendorsJSON =
    "https://raw.githubusercontent.com/brendan-c/Copy-e-liquid-cart/master/vendors.json";

  fetch(vendorsJSON)
    .then(res => res.text())
    .then(str => {
      const vendors = JSON.parse(str);
      const v = Object.entries(vendors)
        .map(v => v[0])
        .filter(e => document.domain.includes(e));

      if (!v.length) {
        alert("You must go to your cart first.");
        return;
      }

      const vendor = vendors[v[0]];

      if (!window.location.href.includes(vendor.cart)) {
        if (
          window.confirm(
            "You must go to your cart first. After pressing OK, click the bookmark again"
          )
        ) {
          window.location.replace(vendor.cart);
          return;
        }
      }

      const flavorElements = document.querySelectorAll(vendor.flavor);

      if (!flavorElements.length) {
        alert("You have no flavors in your cart to copy.");
        return;
      }

      const flavors =
        "```\n" +
        Array.from(flavorElements)
          .map(f => f.childNodes[0].textContent.trim())
          .sort()
          .join("\n")
          .concat("\n```");

      const el = document.createElement("textarea");
      el.value = flavors;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      alert("flavors have been copied to, go paste them somewhere!");
    });
