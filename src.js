;
(function() {
    const vendors = {
        ecigexpress: {
            cart: 'https://ecigexpress.com/cart',
            flavor: 'h5.product-name a'
        },
        bullcity: {
            cart: 'https://www.bullcityflavors.com/cart.php',
            flavor: '.cart-item h4 a'
        },
        chefsflavours: {
            cart: 'https://chefsflavours.co.uk/cart.php',
            flavor: '.cart-item h4 a'
        },
        nicriver: {
            cart: 'https://riversupplyco.com/cart',
            flavor: 'h5.product-title a'
        },
        flavourwala: {
            cart: 'https://www.flavourwala.com/cart/',
            flavor: 'td.product-name a'
        }
    }
    const v = Object.entries(vendors)
        .map(v => v[0])
        .filter(e => document.domain.includes(e))

    if (!v.length) {
        alert('You must go to your cart first.')
        return
    }
    const vendor = vendors[v[0]]
    console.log(vendor)

    function getFlavors() {
        if (!window.location.href.includes(vendor.cart)) {
            if (
                window.confirm(
                    'You must go to your cart first. After pressing OK, paste the script again.'
                )
            ) {
                window.location.replace(vendor.cart)
                return
            }
        }

        if (!document.querySelectorAll(vendor.flavor).length) {
            alert('You have no flavors in your cart to copy.')
            return
        }

        const flavors =
            '```\n' +
            Array.from(document.querySelectorAll(vendor.flavor))
            .map(f => f.childNodes[0].textContent.trim())
            .sort()
            .join('\n')
            .concat('\n```')

        const copyToClipboard = str => {
            const el = document.createElement('textarea')
            el.value = str
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
        }

        copyToClipboard(flavors)
        alert('flavors have been copied to, go paste them somewhere!')
    }

    getFlavors(vendor)
})()
