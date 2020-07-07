$(document).ready(function () {
   let nav = $('.link');
   let boards = $('.section-1')
   for (let i = 0; i < nav.length; i++) {
      let element = nav[i];
      $(element).on("click", event => {
         $(boards).toggleClass('section-main')
      })
      $(document).mouseup(e => {
         if (!boards.is(e.target)
            && boards.has(e.target).length === 0) {
            $(boards).removeClass('section-main')
         }
      });




   };
})