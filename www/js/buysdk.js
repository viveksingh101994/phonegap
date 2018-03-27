$(function() {

	/* Build new ShopifyBuy client
	============================================================ */
	var client = ShopifyBuy.buildClient({
		
    });
    client.fetchRecentCart().then((cart) => {
        console.log(cart); // Most recently created cart
      });
    // client.fetchQueryProducts({query: 'updated_at:>="2016-09-25T21:31:33"'}).then((products) => {
    //     console.log(products); 
    //   });
    client.fetchAllCollections({id:""}).then(product=>console.log(product))
    // client.fetchQueryProducts({collection_id: "346171782", sort_by: 'collection-default' }).then(function(products) {
    //     console.log(products)
    
    // })
    // client.fetchCart("shopify-buy.1522173341011.1").then(function(remoteCart) {
    //     console.log(remoteCart)
    //     // cart = remoteCart;
    //     // cartLineItemCount = cart.lineItems.length;
    //     // renderCartItems();
    // });
    // client.createCart().then(function (newCart) {
    //     console.log(newCart)
    //     // cart = newCart;
    //     // localStorage.setItem('lastCartId', cart.id);
    //     // cartLineItemCount = 0;
    // });
    
})