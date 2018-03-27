$(function() {

	/* Build new ShopifyBuy client
	============================================================ */
	var client = ShopifyBuy.buildClient({
		apiKey: '76c319842babb807c45bc61f207517d5', // Your SDK API/access token 
		domain: 'labratz.myshopify.com', // Your complete Shopify store domain
        appId:"c180d58135ecbb455c72fc93a2ce0dcb"
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