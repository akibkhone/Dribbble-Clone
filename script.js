function navigation() {
	document.addEventListener('DOMContentLoaded', function () {
		const findDesigners = document.getElementById('find-designers');
		const showDesigners = document.getElementById('show-designers');

		const findCourses = document.getElementById('find-courses');
		const showCourses = document.getElementById('show-courses');

		// Initially hide the showDesigners and showCourses elements
		showDesigners.style.display = 'none';
		showCourses.style.display = 'none';

		// Add mouseover event listener to findDesigners
		findDesigners.addEventListener('mouseover', function (event) {
			showDesigners.style.display = 'block';
		});

		// Add mouseout event listener to findDesigners to hide showDesigners
		findDesigners.addEventListener('mouseout', function (event) {
			showDesigners.style.display = 'none';
		});

		// Add mouseover event listener to findCourses
		findCourses.addEventListener('mouseover', function (event) {
			showCourses.style.display = 'block';
		});

		// Add mouseout event listener to findCourses to hide showCourses
		findCourses.addEventListener('mouseout', function (event) {
			showCourses.style.display = 'none';
		});
	});
}

function generateHeroCard() {
	// Define your hero data here
	const heroes = [
		{
			name: 'Victa Wille',
			role: 'Digital Designer',
			tags: ['UI', 'Web', 'Mobile'],
			image: 'Top Slider/Victa Wille.webp',
		},
		{
			name: 'Lilla Bardenova',
			role: 'Brand + Illustrator',
			tags: ['Brand', 'Illustration', 'Web'],
			image: 'Top Slider/Lilla Bardenova.webp',
		},
		{
			name: 'Elif Kameşoğlu',
			role: 'Brand Designer',
			tags: ['Brand', 'Illustration', 'Web'],
			image: 'Top Slider/Elif Kameşoğlu.webp',
		},
		{
			name: 'Chris Owens',
			role: 'Creative Director',
			tags: ['Illustration', 'Mobile', 'UI'],
			image: 'Top Slider/Chris Owens.webp',
		},
		{
			name: 'Andrea Jelić',
			role: 'Digital Designer',
			tags: ['Brand', 'UI', 'Web'],
			image: 'Top Slider/Andrea Jelić.webp',
		},
		{
			name: 'Vladimir Gruev',
			role: 'Digital Designer',
			tags: ['Brand', 'Design'],
			image: 'Top Slider/Vladimir Gruev.webp',
		},
		{
			name: 'Aurélien Salomon',
			role: 'Design Director',
			tags: ['Mobile', 'Product', 'UX'],
			image: 'Top Slider/Aurélien Salomon.webp',
		},
		{
			name: 'Daniele Buffa',
			role: 'Principal Designer',
			tags: ['Animation', 'UI', 'Visual'],
			image: 'Top Slider/Daniele Buffa.webp',
		},
		{
			name: 'Helen Tran',
			role: 'Lead Product Designer',
			tags: ['Leadership', 'Product', 'UX'],
			video: 'Top Slider/Helen Tran.mp4',
		},
		{
			name: 'Mercedes Bazan',
			role: 'Illustrator',
			tags: ['Graphic Design', 'Illustration'],
			image: 'Top Slider/Mercedes Bazan.webp',
		},
		{
			name: 'Jesse Showalter',
			role: 'Design Educator',
			tags: ['UI', 'Web', 'Mobile'],
			video: 'Top Slider/Jesse.mp4',
		},
		{ name: 'Dan Mall', role: 'Design Educator', tags: ['Product', 'UX'], video: 'Top Slider/Dan Mall.mp4' },
	];

	const heroContainer = document.querySelector('.hero-slider');

	heroes.forEach((hero) => {
		const heroCard = document.createElement('div');
		heroCard.classList.add('hero-card');

		heroCard.innerHTML = `
                    <div class="hero-media">
                        <img src="${hero.image}" alt="${hero.name}">
                    </div>
                    <div class="hero-info">
                        <h4>${hero.name}</h4>
                        <h4>${hero.role}</h4>
                        <div class="hero-tags">
                            ${hero.tags.map((tag) => `<h6>${tag}</h6>`).join('')}
                        </div>
                    </div>
                `;

		heroContainer.appendChild(heroCard);
	});
}

function generateDesignCard() {
	const designs = [
		{
			name: 'Rotundo Soft',
			image: '/Designs/1.png',
			author: 'Dan Cederholm',
			dp: '/Designs/1dp.png',
			likes: 156,
			views: '42.5k',
		},
		{
			name: 'Rebels & Renegades Ap. . .',
			image: '/Designs/2.png',
			author: 'Coric Design',
			dp: '/Designs/2dp.png',
			likes: 46,
			views: '16.1k',
		},
		{
			name: 'El Tigre',
			image: '/Designs/3.png',
			author: 'Camilo Bejarano',
			dp: '/Designs/3dp.png',
			likes: 150,
			views: '31.1k',
		},
		{
			name: 'HE IS RISEN + MY STORY',
			image: '/Designs/4.png',
			author: 'Brad Hansen',
			dp: '/Designs/4dp.png',
			likes: 191,
			views: '61.2k',
		},
		{
			name: 'Devotion',
			image: '/Designs/5.png',
			author: 'MUTI',
			dp: '/Designs/5dp.png',
			likes: 287,
			views: '50.6k',
		},
		{
			name: 'Nomint logotype desig. . .',
			image: '/Designs/6.png',
			author: 'Alex Aperios',
			dp: '/Designs/6dp.png',
			likes: 109,
			views: '47.3k',
		},
		{
			name: 'Rebel Sound 🔊⚡',
			image: '/Designs/7.png',
			author: 'Awsmd TEAM',
			dp: '/Designs/7dp.png',
			likes: 195,
			views: '22.4k',
		},
		{
			name: 'Still no pickles!',
			image: '/Designs/8.png',
			author: 'Tyler Pate',
			dp: '/Designs/8dp.png',
			likes: 167,
			views: '29.3k',
		},
		{
			name: 'Boston General Store',
			image: '/Designs/9.png',
			author: 'Peter Voth',
			dp: '/Designs/9dp.png',
			likes: 177,
			views: '47.7k',
		},
		{
			name: 'Sketch',
			image: '/Designs/10.png',
			author: 'Rik Catlow',
			dp: '/Designs/10dp.png',
			likes: 142,
			views: '46.9k',
		},
		{
			name: 'CH24 Pocket Square',
			image: '/Designs/11.png',
			author: 'Jan Kallwejt',
			dp: '/Designs/11dp.png',
			likes: 161,
			views: '52.3k',
		},
		{
			name: 'Love mid century poster',
			image: '/Designs/12.png',
			author: 'Francis Chouquet',
			dp: '/Designs/12dp.png',
			likes: 132,
			views: '36.6k',
		},
		{
			name: 'ACE Year of the Dragon Badge',
			image: '/Designs/13.png',
			author: 'Wells Collins',
			dp: '/Designs/13dp.png',
			likes: 290,
			views: '77.9k',
		},
		{
			name: 'Skateboarding Spot Illus. . .',
			image: '/Designs/14.png',
			author: 'Sebastian Abboud',
			dp: '/Designs/14dp.png',
			likes: 155,
			views: '72.8k',
		},
		{
			name: 'Harry Potter Poster',
			image: '/Designs/15.png',
			author: 'Adam Johnson',
			dp: '/Designs/15dp.png',
			likes: 148,
			views: '58.5k',
		},
		{
			name: 'Hitman',
			image: '/Designs/16.png',
			author: 'dongkyu lim',
			dp: '/Designs/16dp.png',
			likes: 99,
			views: '6.6k',
		},
		{
			name: 'How to beat the winte. . .',
			image: '/Designs/17.png',
			author: 'Daniele Simonelli',
			dp: '/Designs/17dp.png',
			likes: 120,
			views: '40.7k',
		},
		{
			name: 'Diversity',
			image: '/Designs/18.png',
			author: 'Makers Company',
			dp: '/Designs/18dp.png',
			likes: 136,
			views: '28.3k',
		},
		{
			name: "Zelky's Beach Arcade",
			image: '/Designs/19.png',
			author: 'Focus Lab',
			dp: '/Designs/19dp.png',
			likes: 143,
			views: '46.8k',
		},
		{
			name: 'Triangirl 07',
			image: '/Designs/20.png',
			author: 'Benoit Drigny',
			dp: '/Designs/20dp.png',
			likes: 134,
			views: '21.3k',
		},
		{
			name: 'Aqua Reef',
			image: '/Designs/21.png',
			author: 'Ben Didier',
			dp: '/Designs/21dp.png',
			likes: 199,
			views: '71.3k',
		},
		{
			name: '🐣🏎️',
			image: '/Designs/22.png',
			author: 'Jessie Maisonneuve',
			dp: '/Designs/22dp.png',
			likes: 130,
			views: '62.7k',
		},
		{
			name: 'Analog Pattern',
			image: '/Designs/23.png',
			author: 'Lisa Champ',
			dp: '/Designs/23dp.png',
			likes: 120,
			views: '41.2k',
		},
		{
			name: 'Memories from Kerala',
			image: '/Designs/24.png',
			author: 'ranganath krishnamani',
			dp: '/Designs/24dp.png',
			likes: 161,
			views: '27.4k',
		},
		{
			name: 'Work for a new real 🦘',
			image: '/Designs/25.png',
			author: 'Spencer Gabor',
			dp: '/Designs/25dp.png',
			likes: 297,
			views: '55.8k',
		},
		{
			name: 'Banana phone 🍌☎️',
			image: '/Designs/26.png',
			author: 'Mick Champayne 🍾',
			dp: '/Designs/26dp.png',
			likes: 127,
			views: '39.2k',
		},
		{
			name: 'AEC Advisors Office Mural',
			image: '/Designs/27.png',
			author: 'DKNG',
			dp: '/Designs/27dp.png',
			likes: 199,
			views: '42.9k',
		},
		{
			name: 'Valencia Design',
			image: '/Designs/28.png',
			author: 'Lisa McCormick',
			dp: '/Designs/28dp.png',
			likes: 144,
			views: '51.1k',
		},
		{
			name: 'Regions of Canada',
			image: '/Designs/29.png',
			author: 'Folio Illustration Agency',
			dp: '/Designs/29dp.png',
			likes: 91,
			views: '24.9k',
		},
		{
			name: 'Cat base',
			image: '/Designs/30.png',
			author: 'Ann-Sophie De Steur',
			dp: '/Designs/30dp.png',
			likes: 147,
			views: '34k',
		},
		{
			name: 'Everything is stardust',
			image: '/Designs/31.png',
			author: 'Dan Cederholm',
			dp: '/Designs/31dp.png',
			likes: 85,
			views: '6.3k',
		},
		{
			name: 'Logo Bittersweet Psychotherapy',
			image: '/Designs/32.png',
			author: 'OVCHARKA INDUSTRIES',
			dp: '/Designs/32dp.png',
			likes: 113,
			views: '20.8k',
		},
		{
			name: 'H.U.M.A.N',
			image: '/Designs/33.png',
			author: 'Razvan Vezeteu',
			dp: '/Designs/33dp.png',
			likes: 100,
			views: '15k',
		},
		{
			name: 'Howdy Hill Visual Exploration',
			image: '/Designs/34.png',
			author: 'HOUS',
			dp: '/Designs/34dp.png',
			likes: 40,
			views: '15.7k',
		},
		{
			name: 'Klaipeda and Palanga Icons',
			image: '/Designs/35.png',
			author: 'Alex Krugli',
			dp: '/Designs/35dp.png',
			likes: 225,
			views: '97.3k',
		},
		{
			name: 'The Camel 4/17 Gig Poster',
			image: '/Designs/36.png',
			author: 'Brent McCormick',
			dp: '/Designs/36dp.png',
			likes: 78,
			views: '18.7k',
		},
		{
			name: 'The Third Eye',
			image: '/Designs/37.png',
			author: 'Stevan Rodic',
			dp: '/Designs/37dp.png',
			likes: 164,
			views: '28.2k',
		},
		{
			name: 'Brand Illustrations',
			image: '/Designs/38.png',
			author: 'Sebastian Abboud',
			dp: '/Designs/38dp.png',
			likes: 48,
			views: '7.3k',
		},
		{
			name: 'Agua de Iquitos Label Design',
			image: '/Designs/39.png',
			author: 'Coric Design',
			dp: '/Designs/39dp.png',
			likes: 77,
			views: '18.5k',
		},
		{
			name: 'A Perfect Circle',
			image: '/Designs/40.png',
			author: 'Sam Dunn',
			dp: '/Designs/40dp.png',
			likes: 21,
			views: '4.4k',
		},
		{
			name: 'Palestine',
			image: '/Designs/41.png',
			author: 'Kirk! Wallace',
			dp: '/Designs/41dp.png',
			likes: 82,
			views: '17.1k',
		},
		{
			name: 'Locals Only',
			image: '/Designs/42.png',
			author: 'Karli Fairbanks',
			dp: '/Designs/42dp.png',
			likes: 20,
			views: '5.8k',
		},
		{
			name: 'Astronaut',
			image: '/Designs/43.png',
			author: 'Zhenya Artemjev',
			dp: '/Designs/43dp.png',
			likes: 139,
			views: '30.2k',
		},
		{
			name: 'Eden',
			image: '/Designs/44.png',
			author: 'MUTI',
			dp: '/Designs/44dp.png',
			likes: 172,
			views: '24.4k',
		},
		{
			name: 'Brand Illos',
			image: '/Designs/45.png',
			author: 'Josh Warren',
			dp: '/Designs/45dp.png',
			likes: 258,
			views: '39.7k',
		},
		{
			name: 'Green Pole',
			image: '/Designs/46.png',
			author: 'Tommy Chandra',
			dp: '/Designs/46dp.png',
			likes: 92,
			views: '6.2k',
		},
	];

	const designsContainer = document.getElementById('designs');

	designs.forEach((design) => {
		const designCard = document.createElement('div');
		designCard.classList.add('design-card');

		designCard.innerHTML = `
            <div class="design-media">
                <img src="${design.image}" alt="${design.name}">
                <div class="design-overlay">
                    <h4>${design.name}</h4>
                    <div class="design-icons">
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-heart-3-line"></i>
                    </div>
                </div>
            </div>
            <div class="design-author">
                <div class="design-author-left">
                    <img src="${design.dp}" alt="">
                    <h5>${design.author} <span>PRO</span></h5>
                </div>
                <div class="design-author-right">
                    <div class="likes">
						<i class="ri-heart-3-fill"></i>
                        <p>${design.likes}</p>
                    </div>
                    <div class="views">
                        <i class="ri-eye-fill"></i>
                        <p>${design.views}</p>
                    </div>
                </div>
            </div>
        `;

		// Append the designCard to the designsContainer
		designsContainer.appendChild(designCard);
	});
}

function showDesignOverlay() {
	const designMediaList = document.querySelectorAll('.design-media');

	designMediaList.forEach((designMedia) => {
		const designOverlay = designMedia.querySelector('.design-overlay');

		designMedia.addEventListener('mouseover', () => {
			designOverlay.style.visibility = 'visible';
		});

		designMedia.addEventListener('mouseout', () => {
			designOverlay.style.visibility = 'hidden';
		});
	});
}

function generateMarquee() {
	const marqueeContainers = document.querySelectorAll('.marquee-slider');

	// Define marquee data here
	const marqueeImages = [
		{ src: 'Bottom Slider/animation.gif', name: 'Animation' },
		{ src: 'Bottom Slider/branding.webp', name: 'Branding' },
		{ src: 'Bottom Slider/illustration.webp', name: 'Illustration' },
		{ src: 'Bottom Slider/mobile.webp', name: 'Mobile' },
		{ src: 'Bottom Slider/print.webp', name: 'Print' },
		{ src: 'Bottom Slider/productdesign.webp', name: 'Product Design' },
		{ src: 'Bottom Slider/typography.webp', name: 'Typography' },
		{ src: 'Bottom Slider/webdesign.webp', name: 'Web Design' },
	];

	marqueeContainers.forEach((marqueeContainer) => {
		marqueeImages.forEach((imageData) => {
			const marqueeItem = document.createElement('div');
			marqueeItem.classList.add('marquee-item');

			marqueeItem.innerHTML = `
                <img src="${imageData.src}" alt="">
                <h6>${imageData.name}</h6>
            `;

			marqueeContainer.appendChild(marqueeItem);
		});
	});
}

navigation();
generateHeroCard();
generateDesignCard();
showDesignOverlay();
generateMarquee();
