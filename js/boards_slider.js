let slids = $('.photo-list-item')

for (let i = 0; i < slids.length; i++) {
   let slid = slids[i];


   $(slid).on('mouseup', event => {
      $('#this-photo').attr('src', `${$(slid).attr('src')}`);
      $('#this-photo').addClass('big-size')
   })
}
$('#burger_menu').on('click', event => {
   $('.header_navbar-mobail').toggleClass('active')
   //console.log(atrr);
   let loop = $('.header_navbar-mobail')
   $(document).mouseup(e => {
      if (!loop.is(e.target)
         && loop.has(e.target).length === 0) {
         $(loop).removeClass('active')
      }
   });
})