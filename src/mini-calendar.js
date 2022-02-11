jQuery(document).ready(function($) {
	
	// Create The Calendar
	$('.calendar').html(
		'<div class="calendar__container">'
		+'<div class="calendar__main">'
		+'<div class="calendar__header">'
		+'<span class="calendar__header-title"></span>'
		+'</div>'
		+'<div class="calendar__inner">'
		+'<div class="grid calendar__inner-numbers"></div>'
		+'</div>'
		+'</div>'
		+'<div class="calendar__slide">'
		+'<span class="calendar__slide-close">×</span>'
		+'<div class="calendar__slide-content"></div>'
		+'</div>'
		+'</div>'
	);
	
	// Set The Month
	const monthName = new Date().toLocaleString("default", { month: "long" });
	$('.calendar__header-title').html(monthName);
	
	// Get Number Of Days
	switch (monthName) {
		case 'January':
			days = 31;
			break;
		case 'February':
			days = 28;
			break;
		case 'March':
			days = 31;
			break;
		case 'April':
			days = 30;
			break;
		case 'May':
			days = 31;
			break;
		case 'June':
			days = 30;
			break;
		case 'July':
			days = 31;
		case 'August':
			days = 31;
		case 'September':
			days = 30;
		case 'October':
			days = 31;
		case 'November':
			days = 30;
		case 'December':
			days = 31;
	}
	
	// Add Extra Day For Loop
	days = days + 1;
	
	// Add Days To Calendar
	for (let i = 1; i < days; i++) {
		$('.calendar__inner-numbers').append('<div data-day='+i+'>'+i+'</div>');
	}
	
	// Add Extra Days For February
	if(monthName == 'February') {
		$('.calendar__inner-numbers').append('<div class="disabled-date">29</div>');
		$('.calendar__inner-numbers').append('<div class="disabled-date">30</div>');
		$('.calendar__inner-numbers').append('<div class="disabled-date">31</div>');
	}
	
	// Add Extra Days For Other Months
	if(monthName == 'April' || monthName == 'June'|| monthName == 'September'|| monthName == 'November') {
		$('.calendar__inner-numbers').append('<div class="disabled-date">31</div>');
	}
	
	// Loop Through Events
	$( ".events .event" ).each(function() {
		let dateSelector = $(this).data('day');
		$('.calendar__inner-numbers div[data-day="'+dateSelector+'"]').addClass('active-date');
	});
	
	// Single Date Click Event
	$('.calendar__inner-numbers div.active-date').each(function() {

		$(this).click(function() {

			// Get Date Selected
			let clickedDate = $(this).data('day');
			let dateData = $('.event[data-day="'+clickedDate+'"]').html();

			// Add Data To Date
			$('.calendar__slide-content').html(dateData);

			// Open And Close Slide Container
			$('.calendar__slide').addClass('open-slide');

		});
		
	});
	
	// Close Slide Container
	$('.calendar__slide-close').click(function(e) {
		e.preventDefault();
		$('.calendar__slide').removeClass('open-slide');
	})
	
});
