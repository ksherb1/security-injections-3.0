$(document).ready(function() {
	$(document).bind('click updateInfo keyup mousedown mousemove mouseup', function() {
		if($('#easy-b-bg-check-summary').prop('checked') && $('#easy-b-bg-check-question').prop('checked') && $('#easy-b-bg-check-correct').prop('checked')) {
			$('#easy-b-sc-check-checklist').prop('checked', true);
		}
	});
});