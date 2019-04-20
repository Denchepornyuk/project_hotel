$inputs = $('.hero').find('input');
setInterval(function(){
$next = $inputs.filter(":checked").next('input');

if ($next.length){ 
	$next.prop('checked', true);
}
else 
	$inputs.first().prop('checked', true);

}, 5000);