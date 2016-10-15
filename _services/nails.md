---
layout: services
title: Nails Catalogue
link: services/nails
category: Nails
image: img/salon/1.jpg
quote: Any woman can wear a great outfit but it is the nails that make the statement
img: img/services/nails/1.jpg
gallery:
 - image: img/services/nails/1.jpg
 - image: img/services/nails/2.jpg
<<<<<<< HEAD
 - image: img/services/nails/3.jpg
 - image: img/services/nails/4.jpg
 - image: img/services/nails/5.jpg
 - image: img/services/nails/6.jpg
 - image: img/services/nails/7.jpg
 - image: img/services/nails/8.jpg
 - image: img/services/nails/9.jpg
 - image: img/services/nails/10.jpg
 - image: img/services/nails/11.jpg
 - image: img/services/nails/12.jpg
=======
 - image: img/services/nails/6.jpg
>>>>>>> cc8dedceacb3f504120419ac320e032bdb52c035
---

<div class="container">
	<div class="service__catalogue">
		<h1 class="service__catalogue__title">{{ page.title }}</h1>
		<div class="service__catalogue__container row">
			{% for category in site.data.services %}
				{% if category.categoryname == 'Nails' %}
					{% assign count = 1 %}
					{% for subcategories in category.subcategories %}
						<ul class="service__catalogue__list col-xs-6 col-sm-3">
							{% for serviceItem in subcategories.items %}
								<li class="service__list">
									{% if serviceItem.description %}
										<a href="#{{ count }}">
											{{ serviceItem.name }}
											<i class="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
										</a>
									{% assign count = count | plus: 1 %}
									{% else %}
										{{ serviceItem.name }}
									{% endif %}
								</li>
							{% endfor %}
						</ul>
					{% endfor %}
				{% endif %}
			{% endfor %}
		</div>
	</div>
</div>


<div class="container">
	<div class="service__images padding-100">
		<div class="service__carousel owl-carousel" id="service-carousel">
			{% for images in page.gallery %}
				<div class="service__images__container">
					<img src="{{ site.baseurl }}/{{ images.image }}" alt="">
				</div>
			{% endfor %}
		</div>
	</div>
</div>


<div class="container">
	<div class="service__description row between-xs">
		{% for category in site.data.services %}
			{% assign count = 1 %}
			{% if category.categoryname == 'Nails' %}
				{% for subcategories in category.subcategories %}
					{% for serviceItem in subcategories.items %}
						{% if serviceItem.description %}
							<div id="{{ count }}" class="service__description__content col-xs-12 col-sm-6 col-md-4">
								<div class="service__description__box">
									<h3 class="service__description__header">
										{{ serviceItem.name }}
									</h3>
									<p class="service__description__text">
										{{ serviceItem.description }}
									</p>
								</div>
							</div>
							{% assign count = count | plus: 1 %}

						{% endif %}
					{% endfor %}
				{% endfor %}
			{% endif %}
		{% endfor %}
	</div>
</div>