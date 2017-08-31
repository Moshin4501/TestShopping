
module.exports = function(search) {
    // get walking directions from central park to the empire state building
    var http = require("http");
    var authKey = "uid6676-39776974-43";
    // var search = "men";
    var url = "http://api.shopstyle.com/api/v2/products?pid=" + authKey + "&fts=" + search + "&offset=0&limit=10";

    // get is a simple wrapper for request()
    // which sets the http method to GET
    var request = http.get(url, function (response) {
        // data is streamed in chunks from the server
        // so we have to handle the "data" event    
        var buffer = "", 
            data,
            route;

        response.on("data", function (chunk) {
            buffer += chunk;
        }); 

        response.on("end", function (err) {
            // finished transferring data
            // dump the raw data
            // console.log(buffer);
            console.log("\n");
            data = JSON.parse(buffer);

            for(var i = 0; i < data.products.length; i++) {
                //loops through the JSON response and logs 
                //img url, brandedName, price and link to retailer
                console.log(data.products[i].image.sizes.Large.url);
                console.log(data.products[i].brandedName);
                console.log(data.products[i].priceLabel);
                console.log(data.products[i].clickUrl);    
            };
           
        }); 
    }); 
};