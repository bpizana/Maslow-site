// $('#new-post li').each(function(){
// 	$(this).click(function(){
// 		$('#new-post li').addClass('inactive-network');
// 		$(this).removeClass('inactive-network');
// 	});
// });

$('#new-post li').click(function(){
   if($(this).hasClass('inactive-network')){
       $(this).removeClass('inactive-network')
   } else {
       $(this).addClass('inactive-network')
   }
});
