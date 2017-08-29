var artworkProductData = {
    "products": [
                    {
                        "title": "Frantastic",
                        "information": "sdfsdfsdfsdf",
                        "dimensions":"",
                        "artist": "John Francis Murphy",
                        "price": "2",
                        "image": "fran.jpg"
                    },
                    {
                        "title": "Mince Meat",
                        "information": "xcvxcvxcvxcv",
                        "dimensions":"",
                        "artist": "Shane Cremin",
                        "price": "44.00",
                        "image": "joe.jpg"
                    },
                    {
                        "title": "The Married Man",
                        "information": "hjkhjkhjkhjk",
                        "dimensions":"",
                        "artist": "Darragh Murphy",
                        "price": "20.00",
                        "image": "darragh.jpg"
                    },
                    {
                        "title": "Jimmy The Knive",
                        "information": "yuiyuiyuiyuiyu",
                        "dimensions":"",
                        "artist": "Eoin Dennehy",
                        "price": "2000.00",
                        "image": "jimmy.jpg"
                    }
            ]
};


(function() {
    function init() {
        getProducts();
    }

     function getProducts() {
        $.each(artworkProductData.products, function (i, products) {
            var prodHtml = '<div class="col-xs-6 well hoverwell"> \
            <div class="row"> \
                  <img style="width:25%;" class="span6" src="images/' + products.image + '" /> \
              </div> \
               <div class="row"> \
                  <h2 style="float:left;" class="span6" id="title' + i +'">' + products.title + '</h2> \
              </div> \
               <div class="row"> \
                        <span class="span6" id="dimensions' + i +'">Dimensions:' + products.dimensions + ' \
                            <select name="cmbitems" id="cmbitems">\
                            <option value="$5">400 x 200 mm</option>\
                            <option value="$10">800 x 400 mm</option>\
                            <option value="$20">1600 x 800 mm</option>\
                            </select>\
                            <div>\
                            </span> \
                            Price: <input type="text" name="price" id="price"  onClick="checkPrice()">\
                            <script>\
                            var select = document.getElementById("cmbitems");\
                            var input = document.getElementById("price");\
                            select.onchange = function() {\
                                input.value = select.value;}\
                            </script>\
                            </div>\
              </div> \
               <div class="row"> \
                  <span class="span6">information: ' + products.information + '</span> \
              </div> \
               <div class="row"> \
                  <span class="span6" id="artist' + i + '"> \
                  ' + products.artist + '</span> \
              </div> \
              <div class="row"> \
                  <span class="span6" id="price' + i +'"> \
                  <span class="price">' + products.price + '</span> </span> \
              </div> \
              <div class="row"> \
                  <span class="span6">Quantity: \
                    <select id="quantity' + i +'"> \
                        <option value="1">1</option> \
                        <option value="2">2</option> \
                        <option value="3">3</option> \
                        <option value="4">4</option> \
                        <option value="5">5</option> \
                    </select> <br/> \
                 </span> \
              </div> \
              <div class="row"> \
                  <input type="button" id="' + i +'" class="btn btn-primary" value="Add To Order"/> \
              </div> \
           </div>';

        $(prodHtml).appendTo('#productList');
        });
    }

    function deleteItems(){


    }
        
    function addToOrder() {
        // get all data from the product_list list 
        // that have quantity greater than 0


    }

    function buyNow() {
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : 'example.org',
            user     : 'bob',
            password : 'secret',
        });

        connection.connect(function(err) {
        // connected! (unless `err` is set)
        });
    }

    init();
  }

)();


