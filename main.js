var books = [
	{
		name: 'Gödel, Escher, Bach: An Eternal Golden Braid',
		category: 'Computers & Technology',
		price: 9.99,
		selling_points: ['high quality', 'entertaining'],
		picture_url: 'https://images-na.ssl-images-amazon.com/images/I/4193iI6WHqL._SX327_BO1,204,203,200_.jpg',
		desc: 'wedffewfwewefwefwefwefwefwefwefwef'
	},
	{
		name: 'Twilight',
		category: 'Drama',
		price: 6.52,
		selling_points: ['vampires', 'Edward the vampire is so hawt'],
		picture_url: 'https://images-na.ssl-images-amazon.com/images/I/41MLd2DZYwL._SX312_BO1,204,203,200_.jpg',
		desc: 'wedffewfwewefwefwefwefwefwefwefwef'
	}
];

var albums = [
	{
		name: 'Mothership',
		category: 'Rock',
		price: 14.88,
		selling_points: ['mothership', 'entertaining'],
		picture_url: 'https://images-na.ssl-images-amazon.com/images/I/81S8LVGKE6L._SY355_.jpg',
		desc: 'wedffewfwewefwefwefwefwefwefwefwef'
	},
	{
		name: 'Narrow Stairs',
		category: 'Indie',
		price: 7.99,
		selling_points: ['Indie', 'Awesome'],
		picture_url: 'https://images-na.ssl-images-amazon.com/images/I/51zj%2B7irjBL._SS500_PJStripe-Robin-Large,TopLeft,0,0_SS280.jpg',
		desc: 'wedffewfwewefwefwefwefwefwefwefwef'
	}
];

var products = {
	books: books,
	albums: albums,
}

for(var key in products){
	$('#s-dropdown-category-names').append(
		'<li role="separator" class="divider"></li>'
		+ '<li><a href="#" id='+key+'>'+key.charAt(0).toUpperCase()+ key.slice(1, key.length-1)+'</a></li>'
		)
}


var addToCarousel = function(array, divname, itemname){
	var random = Math.floor(Math.random() * array.length);
	$(divname).html('<h1>Featured '+itemname+'</h1>'
	+ '<img class="s-car-image" src="' + array[random].picture_url + '">'
	+ '<h2>' + array[random].name + '</h2>'
	+ '<h4>'+ array[random].desc +'</h4>'
	)
}

addToCarousel(books, '#s-carbook', 'Book');
addToCarousel(albums, '#s-caralbum', 'Album');

var addToPage = function(item){
	$('#s-main-container').append('<div class="block col-md-6 col-lg-4 parentclass"><img class="left" src=' + item.picture_url + '>'
		+ '<p class="titleclass">' + item.name + '</p>'
		+ '<p class="genreclass">' + item.category + '</p>'
		+ '<p class="priceclass">' + item.price + '</p><hr>'
		+ '<p class="descclass">' + item.selling_points.join(', ') + '</p>'
		+ '<button class="buttonclass btn-primary">Add to cart</button>'
		+ '</div>'
		);
}

$('#books').on('click', function(){
	$('#s-main-container').empty();
	_.each(products.books, addToPage);
})

$('#albums').on('click', function(){
	$('#s-main-container').empty();
	_.each(products.albums, addToPage);
})

$('#showall').on('click', function(){
	$('#s-main-container').empty();
	_.each(products, function(value, index){
		_.each(value, addToPage);
	});
})

$('#s-searchsubmit').on('click', function(){
	_.each(products, function(value, index){
		_.each(value, function(value2, index2){
			_.each(value2, function(value3, index3){
				if(typeof value3 === 'string'){
					if($('#s-searchbar').val().toLowerCase() === value3.toLowerCase()){
					addToPage(value2);
					}
				}
			})
		})
	})
})