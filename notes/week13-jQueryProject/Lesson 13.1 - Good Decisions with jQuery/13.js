
Lesson 13.1 - Good Decisions with jQuery


 =======================================================================
 Lesson 13.1.2 - Using the Colorbox Plugin to Build a Slideshow
 Refer to the jQuery Tutorials lesson linked below:

 https://www.lynda.com/jQuery-tutorials/Build-gallery-Colorbox/461842/521045-4.html

 Complete the lessons in "4. Integrate a plugin" starting with "Build a gallery in colorbox" and ending with "Change gallery options".

 Optional: Feel free to complete the jQuery Tutorials and implement a Colorbox and other functionality as described in the tutorials and challenges.

jacklmoore.com/colorbox

To use a colorbox plug in, you need to download the file from the website above. Save the "colorbox" file next to your index file. Select the "minified" "min" version of the js file (for production). The long or regular version of the js file is the readable file. Copy the "min" file name to insert it into your html/index page. Add a new script tag at the bottom of the page, before the </body> tag that includes the name of this file.

Example: <script src="colorbox/jquery.colorbox-min.js"></script>

Colorbox requires that you use a built in CSS file. Colorbox provides several of thes in example folders. They are all called colorbox.css. If you want to use them, just add a link tag to the top of your file in your head tag to reference that CSS file.

Other plug ins of use:
Magnific or Magnifique Popup











<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 ltie8 ltie9" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ltie8 ltie9" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ltie9" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9" lang="en"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->

<head>
	<meta charset="utf-8" />
	<title>Improved - Colorbox Example</title>
	<link href="../../petal/css/all.css" rel="stylesheet" type="text/css" media="all" />
	<link href="../../petal/css/improved.css" rel="stylesheet" type="text/css" media="all" />
	<link href="../../petal/css/jqwd.css" rel="stylesheet" type="text/css" media="all" />

	<script src="../../petal/js/base.min.js"></script>
	<link rel="shortcut icon" href="../../petal/images/favicon.ico" type="image/x-icon" />
</head>

<body class="no_col_2">

<div id="site">

	<div id="header" role="banner">
		<h3 id="site_name" class="reset"><a href="index-2.html">Hansel and Petal</a></h3>
		<p id="print_logo"><img src="../../petal/images/logo.png" width="207" height="124" alt="Hansel and Petal" /></p>
		<div class="inner">
			<h3 class="hidden">Quick Links</h3>
			<ul id="quick_links" class="reset menu">
				<li><a href="#">My Account</a></li>
				<li><a href="#">Order Status</a></li>
				<li><a href="#">Customer Service</a></li>
			</ul>

			<form action="#" method="get" id="quick_search" role="search">
				<fieldset>
					<legend class="hidden">Search Hansel and Petal</legend>
					<label for="quickSearch" class="hidden">Search</label>
					<input type="search" id="quickSearch" class="text white" placeholder="Find the perfect flowers or plants&hellip;" />
					<span class="btn_icon icon_search"><input type="submit" value="Search" /></span>
				</fieldset>
			</form>

			<p id="offer">FREE Shipping on orders over $75.00!</p>
			<div id="mini_basket">
				<h3 class="hidden">Mini Basket</h3>
				<a href="basket.html" class="basket empty">Basket (<span id="mini_qty">0</span><span class="hidden"> items</span>)<span class="hidden">Total:</span> <span id="mini_total">$0.00</span></a>
				<a href="checkout-step1.html" class="btn checkout">Checkout</a>
			</div>

			<div id="basket_drawer" class="js_none">
				<a href="#close" id="drawer_close">Close<span class="close_caption alt"></span></a>
				<div class="order_summary std_margin clearfix">
					<h3 class="domine_regular">Your flowers are in the basket!</h3>
					<ul class="reset">
						<li class="drawer_item hidden">
							<h4><span>(1) Rainbow Rose Collection</span> <span class="summary_item" data-qty="1" data-price="29.95">$ 29.95</span></h4>
							<img src="../../petal/images/70_rose_peach_89153628.jpg" width="70" height="70" alt="Rainbow Rose Collection" />
							<p>30 long stem roses in a range of colors with fresh ferns and greenery to frame the brilliant colors</p>
						</li>
						<li class="drawer_item hidden">
							<h4><span>(1) Build-a-Bouquet</span> <span class="summary_item" data-qty="1" data-price="60.00">$ 60.00</span></h4>
							<img src="../../petal/images/70_build_a_bouquet_166133374.jpg" width="70" height="70" alt="Build a Bouquet" />
							<p>You choose the flowers, and our talented designers create a one of a kind arrangement just for you.</p>
						</li>
					</ul>
					<table class="total_summary">
						<tfoot>
							<tr>
								<th><strong class="uppercase">Estimated Total</strong></th>
								<td><strong id="drawer_grand_total">$--.--</strong></td>
							</tr>
						</tfoot>
						<tbody>
							<tr>
								<th>Subtotal</th>
								<td id="drawer_sub_total">$--.--</td>
							</tr>
							<tr>
								<th>Sales Tax</th>
								<td>$--.--</td>
							</tr>
							<tr>
								<th>Shipping &amp; Handling (Standard)</th>
								<td id="drawer_shipping_total">$11.95</td>
							</tr>
						</tbody>
					</table>

					<div class="btns dbl_margin_top">
						<a href="basket.html" class="back">View your basket</a> <a href="checkout-step1.html" class="btn checkout float_right">Checkout Now</a>
					</div>
				</div>
				<a href="build-a-bouquet.html" class="border"><img src="../../petal/images/basket_banner.jpg" width="356" height="96" alt="Create your own bouquet!" /></a>
			</div>
		</div>
	</div>

	<div id="nav_main" role="navigation" class="reset menu pull_out">
		<h3 class="hidden">Main Navigation</h3>
		<ul>
			<li>
				<a href="category-arrangements.html" class="parent"><span>Arrangements</span></a>
				<div>
					<ul>
						<li>
							<a href="#">Our Most Popular Flowers</a>
							<ul>
								<li><a href="#">Daisies</a></li>
								<li><a href="#">Tulips</a></li>
								<li><a href="#">Roses</a></li>
								<li><a href="#">Lilies</a></li>
								<li><a href="#">Irises</a></li>
								<li><a href="#">Mums</a></li>
								<li><a href="#">Carnations</a></li>
							</ul>
						</li>
						<li>
							<a href="#">Tropicals</a>
							<ul>
								<li><a href="#">Gingers</a></li>
								<li><a href="#">Heliconias</a></li>
								<li><a href="#">Tuberose</a></li>
								<li><a href="#">Ferns</a></li>
							</ul>
						</li>
						<li>
							<a href="#">Orchids</a>
							<ul>
								<li><a href="#">Phalaenopsis</a></li>
								<li><a href="#">Dendrobium</a></li>
								<li><a href="#">Oncidium</a></li>
								<li><a href="#">Cattleya</a></li>
								<li><a href="#">Cymbidium</a></li>
							</ul>
						</li>
						<li>
							<a href="sub-category-mixed-arrangements.html">Mixed Arrangements</a>
							<ul>
								<li><a href="#">Spring Pastels</a></li>
								<li><a href="#">Autumn Warmth</a></li>
								<li><a href="#">Red, White, &amp; Blue</a></li>
								<li><a href="#">All White</a></li>
								<li><a href="product-detail-arrangements.html">Mixed Roses</a></li>
								<li><a href="#">Mixed Irises</a></li>
								<li><a href="#">Daisies &amp; More Daisies</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</li>
			<li><a href="#"><span>Live Plants</span></a></li>
			<li><a href="build-a-bouquet.html"><span>Build-a-Bouquet</span></a></li>
			<li><a href="#"><span>Special Events</span></a></li>
			<li>
				<a href="#" class="parent"><span>Care Tips</span></a>
				<div class="single_column">
					<ul>
						<li><a href="#">Caring for Mixed Bouquets</a></li>
						<li><a href="#">Caring for Roses</a></li>
						<li><a href="#">Caring for Tropical Flowers</a></li>
						<li><a href="#">Caring for House Plants</a></li>
						<li><a href="care-tips-orchids.html">Caring for Orchids</a></li>
					</ul>
				</div>
			</li>
			<li><a href="#"><span>Eco-Conscious</span></a></li>
			<li><a href="our-designers.html"><span>Our Designers</span></a></li>
		</ul>
	</div>

	<div id="content">

		<div id="breadcrumbs" class="reset menu">
			<ul>
				<li><a href="index-2.html">Home</a></li>
				<li>Colorbox Example</li>
			</ul>
		</div>

		<div id="col_1" role="main">

			<h1 class="inline_block">Available Bouquets</h1>
			<ul id="flower-items">
			<li>
				<a href="../../petal/images/710_purple_calla_lilies_144723256.jpg">
					<span class="img"><img src="../../petal/images/160_calla_blush_160337318.jpg" width="160" height="160" alt="Calla Lily"  title="A beautiful arrangement of lilies" /></span>
					<h4>Calla Lilies</h4>
					<!-- Blush, Yellow, Pink, Purple -->
					<p class="price reset">$3.00 per stem</p>

					<div class="info">
					These are fine flowers.
					</div>
				</a>
			</li>
			<li>
				<a href="../../petal/images/lightbox_Erick_Durham.jpg">
					<span class="img"><img src="../../petal/images/160_sunflower_146748795.jpg" width="160" height="160" alt="Sunflower" title="Sunflowers and friends in a vase" /></span>
					<h4>Sunflower</h4>
					<!-- One Color -->
					<p class="price reset">$3.00 per stem</p>

					<div class="info">
					These are the ones that produce every baseball player's favorite seeds.
					</div>
				</a>
			</li>
			<li>
				<a href="../../petal/images/lightbox_Laurel_Foucher.jpg">
					<span class="img"><img src="../../petal/images/160_iris_purple_121549009.jpg" width="160" height="160" alt="Purple Iris" title="Purple iris of Cairo. Or is it a rose?" /></span>
					<h4>Iris</h4>
					<!-- One Color -->
					<p class="price reset">$2.00 per stem</p>

					<div class="info">
					These flowers are purple.  That's fun, right?!
					</div>
				</a>
			</li>
			<li>
				<a href="../../petal/images/lightbox_Tamara_Alanwood.jpg">
					<span class="img"><img src="../../petal/images/160_alstromeria_87519333.jpg" width="160" height="160" alt="Alstromeria"  title="Alstromeria, aka Peruvian Lilies" /></span>
					<h4>Peruvian Lily</h4>
					<!-- One Color -->
					<p class="price reset">$2.00 per stem</p>

					<div class="info">
					These are lilies, but from Peru. Maybe they have a Peruvian accent.
					</div>
				</a>
			</li>
			</ul>
		</div>

	</div>

	<div id="footer">
		<div class="row clearfix pull_out padding">
			<div id="social">
				<img src="../../petal/images/social.png" width="593" height="28" alt="" />
			</div>

			<form action="#" method="get" id="sign_up">
				<fieldset class="no_mb">
					<legend class="hidden">Sign up to our newsletter</legend>
					<label class="hidden">Email address</label>
					<input type="text" class="text white" placeholder="Sign Up for Special Offers">
					<input type="submit" value="Sign Up" />
				</fieldset>
			</form>
		</div>

		<div class="row clearfix">
			<h3 class="hidden">Site at a glance</h3>
			<ul id="nav_seo" class="reset menu hover">
				<li>
					<h4 class="hidden">Our Flowers</h4>
					<ul>
						<li><a href="category-arrangements.html">Arrangements</a></li>
						<li><a href="#">Live Plants</a></li>
						<li><a href="build-a-bouquet.html">Build-a-Bouquet</a></li>
						<li><a href="#">Special Events</a></li>
						<li><a href="#">Care Tips</a></li>
						<li><a href="#">Eco-Conscious</a></li>
						<li><a href="our-designers.html">Our Designers</a></li>
					</ul>
				</li>
				<li>
					<h4 class="hidden">Customer Service</h4>
					<ul>
						<li><a href="#">My Account</a></li>
						<li><a href="#">Order Status</a></li>
						<li><a href="#">Customer Service</a></li>
						<li><a href="#">Fresh Flower Guarantee</a></li>
						<li><a href="#">Shipping Information</a></li>
					</ul>
				</li>
				<li>
					<h4 class="hidden">General</h4>
					<ul>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Terms &amp; Conditions</a></li>
					</ul>
				</li>
			</ul>

			<img src="../../petal/images/logo.png" width="207" height="124" alt="Hansel and Petal" />
		</div>

		<p id="copyright" class="reset pull_out padding" role="contentinfo"><a href="../index.html">&copy; 2013 Hansel and Petal</a></p>

	</div>
</div>

<p id="disclaimer">Hansel &amp; Petal is a fictitious brand created by lynda.com solely for the purpose of training. All products and people associated with Hansel &amp; Petal are also fictitious. Any resemblance to real brands, products, or people is purely coincidental. Information provided about the product is also fictitious and should not be construed to be representative of actual products on the market in a similar product category.</p>

<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
<script>window.jQuery || document.write('<script src="../../lib/jquery/jquery.min.js"><\/script>');</script>
<script src="../../petal/js/plugins.min.js"></script>
<script src="../../petal/js/all.js"></script>
<script src="../../petal/js/improved.js"></script>

</body>

</html>



 =======================================================================
lynda.com initialize the plug in
 https://www.lynda.com/jQuery-tutorials/Initialize-plugin/461842/521046-4.html

Colorboxes page has extensive documentation about its API. There are examples you can use/adapt to fit your own needs.

jacklmoore.com/colorbox





 <!DOCTYPE html>
 <!--[if lt IE 7 ]> <html class="ie ie6 ltie8 ltie9" lang="en"> <![endif]-->
 <!--[if IE 7 ]>    <html class="ie ie7 ltie8 ltie9" lang="en"> <![endif]-->
 <!--[if IE 8 ]>    <html class="ie ie8 ltie9" lang="en"> <![endif]-->
 <!--[if IE 9 ]>    <html class="ie ie9" lang="en"> <![endif]-->
 <!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->

 <head>
 	<meta charset="utf-8" />
 	<title>Improved - Colorbox Example</title>
 	<link href="../../petal/css/all.css" rel="stylesheet" type="text/css" media="all" />
 	<link href="../../petal/css/improved.css" rel="stylesheet" type="text/css" media="all" />
 	<link href="../../petal/css/jqwd.css" rel="stylesheet" type="text/css" media="all" />

 	<script src="../../petal/js/base.min.js"></script>
 	<link rel="shortcut icon" href="../../petal/images/favicon.ico" type="image/x-icon" />
 </head>

 <body class="no_col_2">

 <div id="site">

 	<div id="header" role="banner">
 		<h3 id="site_name" class="reset"><a href="index-2.html">Hansel and Petal</a></h3>
 		<p id="print_logo"><img src="../../petal/images/logo.png" width="207" height="124" alt="Hansel and Petal" /></p>
 		<div class="inner">
 			<h3 class="hidden">Quick Links</h3>
 			<ul id="quick_links" class="reset menu">
 				<li><a href="#">My Account</a></li>
 				<li><a href="#">Order Status</a></li>
 				<li><a href="#">Customer Service</a></li>
 			</ul>

 			<form action="#" method="get" id="quick_search" role="search">
 				<fieldset>
 					<legend class="hidden">Search Hansel and Petal</legend>
 					<label for="quickSearch" class="hidden">Search</label>
 					<input type="search" id="quickSearch" class="text white" placeholder="Find the perfect flowers or plants&hellip;" />
 					<span class="btn_icon icon_search"><input type="submit" value="Search" /></span>
 				</fieldset>
 			</form>

 			<p id="offer">FREE Shipping on orders over $75.00!</p>
 			<div id="mini_basket">
 				<h3 class="hidden">Mini Basket</h3>
 				<a href="basket.html" class="basket empty">Basket (<span id="mini_qty">0</span><span class="hidden"> items</span>)<span class="hidden">Total:</span> <span id="mini_total">$0.00</span></a>
 				<a href="checkout-step1.html" class="btn checkout">Checkout</a>
 			</div>

 			<div id="basket_drawer" class="js_none">
 				<a href="#close" id="drawer_close">Close<span class="close_caption alt"></span></a>
 				<div class="order_summary std_margin clearfix">
 					<h3 class="domine_regular">Your flowers are in the basket!</h3>
 					<ul class="reset">
 						<li class="drawer_item hidden">
 							<h4><span>(1) Rainbow Rose Collection</span> <span class="summary_item" data-qty="1" data-price="29.95">$ 29.95</span></h4>
 							<img src="../../petal/images/70_rose_peach_89153628.jpg" width="70" height="70" alt="Rainbow Rose Collection" />
 							<p>30 long stem roses in a range of colors with fresh ferns and greenery to frame the brilliant colors</p>
 						</li>
 						<li class="drawer_item hidden">
 							<h4><span>(1) Build-a-Bouquet</span> <span class="summary_item" data-qty="1" data-price="60.00">$ 60.00</span></h4>
 							<img src="../../petal/images/70_build_a_bouquet_166133374.jpg" width="70" height="70" alt="Build a Bouquet" />
 							<p>You choose the flowers, and our talented designers create a one of a kind arrangement just for you.</p>
 						</li>
 					</ul>
 					<table class="total_summary">
 						<tfoot>
 							<tr>
 								<th><strong class="uppercase">Estimated Total</strong></th>
 								<td><strong id="drawer_grand_total">$--.--</strong></td>
 							</tr>
 						</tfoot>
 						<tbody>
 							<tr>
 								<th>Subtotal</th>
 								<td id="drawer_sub_total">$--.--</td>
 							</tr>
 							<tr>
 								<th>Sales Tax</th>
 								<td>$--.--</td>
 							</tr>
 							<tr>
 								<th>Shipping &amp; Handling (Standard)</th>
 								<td id="drawer_shipping_total">$11.95</td>
 							</tr>
 						</tbody>
 					</table>

 					<div class="btns dbl_margin_top">
 						<a href="basket.html" class="back">View your basket</a> <a href="checkout-step1.html" class="btn checkout float_right">Checkout Now</a>
 					</div>
 				</div>
 				<a href="build-a-bouquet.html" class="border"><img src="../../petal/images/basket_banner.jpg" width="356" height="96" alt="Create your own bouquet!" /></a>
 			</div>
 		</div>
 	</div>

 	<div id="nav_main" role="navigation" class="reset menu pull_out">
 		<h3 class="hidden">Main Navigation</h3>
 		<ul>
 			<li>
 				<a href="category-arrangements.html" class="parent"><span>Arrangements</span></a>
 				<div>
 					<ul>
 						<li>
 							<a href="#">Our Most Popular Flowers</a>
 							<ul>
 								<li><a href="#">Daisies</a></li>
 								<li><a href="#">Tulips</a></li>
 								<li><a href="#">Roses</a></li>
 								<li><a href="#">Lilies</a></li>
 								<li><a href="#">Irises</a></li>
 								<li><a href="#">Mums</a></li>
 								<li><a href="#">Carnations</a></li>
 							</ul>
 						</li>
 						<li>
 							<a href="#">Tropicals</a>
 							<ul>
 								<li><a href="#">Gingers</a></li>
 								<li><a href="#">Heliconias</a></li>
 								<li><a href="#">Tuberose</a></li>
 								<li><a href="#">Ferns</a></li>
 							</ul>
 						</li>
 						<li>
 							<a href="#">Orchids</a>
 							<ul>
 								<li><a href="#">Phalaenopsis</a></li>
 								<li><a href="#">Dendrobium</a></li>
 								<li><a href="#">Oncidium</a></li>
 								<li><a href="#">Cattleya</a></li>
 								<li><a href="#">Cymbidium</a></li>
 							</ul>
 						</li>
 						<li>
 							<a href="sub-category-mixed-arrangements.html">Mixed Arrangements</a>
 							<ul>
 								<li><a href="#">Spring Pastels</a></li>
 								<li><a href="#">Autumn Warmth</a></li>
 								<li><a href="#">Red, White, &amp; Blue</a></li>
 								<li><a href="#">All White</a></li>
 								<li><a href="product-detail-arrangements.html">Mixed Roses</a></li>
 								<li><a href="#">Mixed Irises</a></li>
 								<li><a href="#">Daisies &amp; More Daisies</a></li>
 							</ul>
 						</li>
 					</ul>
 				</div>
 			</li>
 			<li><a href="#"><span>Live Plants</span></a></li>
 			<li><a href="build-a-bouquet.html"><span>Build-a-Bouquet</span></a></li>
 			<li><a href="#"><span>Special Events</span></a></li>
 			<li>
 				<a href="#" class="parent"><span>Care Tips</span></a>
 				<div class="single_column">
 					<ul>
 						<li><a href="#">Caring for Mixed Bouquets</a></li>
 						<li><a href="#">Caring for Roses</a></li>
 						<li><a href="#">Caring for Tropical Flowers</a></li>
 						<li><a href="#">Caring for House Plants</a></li>
 						<li><a href="care-tips-orchids.html">Caring for Orchids</a></li>
 					</ul>
 				</div>
 			</li>
 			<li><a href="#"><span>Eco-Conscious</span></a></li>
 			<li><a href="our-designers.html"><span>Our Designers</span></a></li>
 		</ul>
 	</div>

 	<div id="content">

 		<div id="breadcrumbs" class="reset menu">
 			<ul>
 				<li><a href="index-2.html">Home</a></li>
 				<li>Colorbox Example</li>
 			</ul>
 		</div>

 		<div id="col_1" role="main">

 			<h1 class="inline_block">Available Bouquets</h1>
 			<ul id="flower-items">
 			<li>
 				<a href="../../petal/images/710_purple_calla_lilies_144723256.jpg">
 					<span class="img"><img src="../../petal/images/160_calla_blush_160337318.jpg" width="160" height="160" alt="Calla Lily"  title="A beautiful arrangement of lilies" /></span>
 					<h4>Calla Lilies</h4>
 					<!-- Blush, Yellow, Pink, Purple -->
 					<p class="price reset">$3.00 per stem</p>

 					<div class="info">
 					These are fine flowers.
 					</div>
 				</a>
 			</li>
 			<li>
 				<a href="../../petal/images/lightbox_Erick_Durham.jpg">
 					<span class="img"><img src="../../petal/images/160_sunflower_146748795.jpg" width="160" height="160" alt="Sunflower" title="Sunflowers and friends in a vase" /></span>
 					<h4>Sunflower</h4>
 					<!-- One Color -->
 					<p class="price reset">$3.00 per stem</p>

 					<div class="info">
 					These are the ones that produce every baseball players favorite seeds.
 					</div>
 				</a>
 			</li>
 			<li>
 				<a href="../../petal/images/lightbox_Laurel_Foucher.jpg">
 					<span class="img"><img src="../../petal/images/160_iris_purple_121549009.jpg" width="160" height="160" alt="Purple Iris" title="Purple iris of Cairo. Or is it a rose?" /></span>
 					<h4>Iris</h4>
 					<!-- One Color -->
 					<p class="price reset">$2.00 per stem</p>

 					<div class="info">
 					These flowers are purple.  Thats fun, right?!
 					</div>
 				</a>
 			</li>
 			<li>
 				<a href="../../petal/images/lightbox_Tamara_Alanwood.jpg">
 					<span class="img"><img src="../../petal/images/160_alstromeria_87519333.jpg" width="160" height="160" alt="Alstromeria"  title="Alstromeria, aka Peruvian Lilies" /></span>
 					<h4>Peruvian Lily</h4>
 					<!-- One Color -->
 					<p class="price reset">$2.00 per stem</p>

 					<div class="info">
 					These are lilies, but from Peru. Maybe they have a Peruvian accent.
 					</div>
 				</a>
 			</li>
 			</ul>
 		</div>

 	</div>

 	<div id="footer">
 		<div class="row clearfix pull_out padding">
 			<div id="social">
 				<img src="../../petal/images/social.png" width="593" height="28" alt="" />
 			</div>

 			<form action="#" method="get" id="sign_up">
 				<fieldset class="no_mb">
 					<legend class="hidden">Sign up to our newsletter</legend>
 					<label class="hidden">Email address</label>
 					<input type="text" class="text white" placeholder="Sign Up for Special Offers">
 					<input type="submit" value="Sign Up" />
 				</fieldset>
 			</form>
 		</div>

 		<div class="row clearfix">
 			<h3 class="hidden">Site at a glance</h3>
 			<ul id="nav_seo" class="reset menu hover">
 				<li>
 					<h4 class="hidden">Our Flowers</h4>
 					<ul>
 						<li><a href="category-arrangements.html">Arrangements</a></li>
 						<li><a href="#">Live Plants</a></li>
 						<li><a href="build-a-bouquet.html">Build-a-Bouquet</a></li>
 						<li><a href="#">Special Events</a></li>
 						<li><a href="#">Care Tips</a></li>
 						<li><a href="#">Eco-Conscious</a></li>
 						<li><a href="our-designers.html">Our Designers</a></li>
 					</ul>
 				</li>
 				<li>
 					<h4 class="hidden">Customer Service</h4>
 					<ul>
 						<li><a href="#">My Account</a></li>
 						<li><a href="#">Order Status</a></li>
 						<li><a href="#">Customer Service</a></li>
 						<li><a href="#">Fresh Flower Guarantee</a></li>
 						<li><a href="#">Shipping Information</a></li>
 					</ul>
 				</li>
 				<li>
 					<h4 class="hidden">General</h4>
 					<ul>
 						<li><a href="#">About Us</a></li>
 						<li><a href="#">Privacy Policy</a></li>
 						<li><a href="#">Terms &amp; Conditions</a></li>
 					</ul>
 				</li>
 			</ul>

 			<img src="../../petal/images/logo.png" width="207" height="124" alt="Hansel and Petal" />
 		</div>

 		<p id="copyright" class="reset pull_out padding" role="contentinfo"><a href="../index.html">&copy; 2013 Hansel and Petal</a></p>

 	</div>
 </div>

 <p id="disclaimer">Hansel &amp; Petal is a fictitious brand created by lynda.com solely for the purpose of training. All products and people associated with Hansel &amp; Petal are also fictitious. Any resemblance to real brands, products, or people is purely coincidental. Information provided about the product is also fictitious and should not be construed to be representative of actual products on the market in a similar product category.</p>

 <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
 <script>window.jQuery || document.write('<script src="../../lib/jquery/jquery.min.js"><\/script>');</script>
 <script src="../../petal/js/plugins.min.js"></script>
 <script src="../../petal/js/all.js"></script>
 <script src="../../petal/js/improved.js"></script>
 <script src="../../lib/colorbox/jquery.colorbox-min.js"></script>
 <script src="script.js"></script>

 </body>

 </html>



Here is the javascript file:

This are some examples of how to use colorbox from the web site:
Image links displayed as a group
$('a.gallery').colorbox({rel:'gal'});

Called directly with html
$colorbox({html:"<h1>Colorbox</h1><p>Congradulations on opening Colorbox</p>"});

How you set different options in colorbox is to put the pre-defined options listed on the web-page, into the curly brackets after colorbox.

 // here we are grouping the images to be displayed as a group. so you dont have to close one image to go back and click on another to see the next image.
 $(function() {
     "use strict";
     // take a selector and call the Colorbox method on it directly
     $('#flower-items')
     // find all the a tags in '#flower-items'
     .find('a')
     // call colorbox on the found a tags
     .colorbox({
       // use "rel" to group items. here we are adding the "rel" parameter to group the a tags in the element with the #flower-items id so that they will all appear in the lightbox as a group, not one by one.
       'rel': 'anyNameUGive'
       //here rel and maxWidth are attributes for use in colorbox, but we have turned them into strings to avoid conflicts with names that are reserved in JavaScript. here we are setting the maxWidth of the colorbox display.
       'maxWidth': '80%'
     });
 });



Now we are going to rewrite the javascript page so that we can condense several options into one function:


$(function() {
    "use strict";
    var $flowers= $('#flower-items');

    // here we are grouping the images to be displayed as a group. so you dont have to close one image to go back and click on another to see the next image.
    $flowers
    // find all the a tags in '#flower-items'
    .find('a')
    // call colorbox on the found a tags
    .colorbox({
      // use "rel" to group items. here we are adding the "rel" parameter to group the a tags in the element with the #flower-items id so that they will all appear in the lightbox as a group, not one by one.
      rel: 'galleryOrAnything'
    });

    // here we want the second element in the group to show an html text snippet instead of the image when clicked.
    $flowers
    // find the second child of li
    .find('li:nth-child(2)')
    // call colorbox
    .colorbox({
      // the option we are using is html, as described on the colorbox website. we are putting it in quotes so it is not confused with a javaScript reserved word.
      'html':'<h1>Colorbox</h1><p>Congradulations on opening Colorbox</p>'
    });

    // here we want the third element in the group to show a video instead of the image when clicked.
    $flowers
    // find the third child of li
    .find('li:nth-child(3)')
    // call colorbox
    .colorbox({
      // the option we are using href (called directly without assignment as an element), as described on the colorbox website. we are putting it in quotes so it is not confused with a javaScript reserved word. we are setting additional options (iframe, width, height) as noted in the FAQ of the colorbox page in the "why won't my video play" question/answer.
      'href':'https://www.youtube.com/imbed/Bn7vZJ0AIbE',
      'iframe': true,
      'width': 640,
      'height': 400,
    });
});
