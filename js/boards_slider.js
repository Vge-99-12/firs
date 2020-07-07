let slids = $('.img-slider')

for (let i = 0; i < slids.length; i++) {
   let slid = slids[i];


   $(slid).on('mouseup', event => {
      $('#thisPoto').attr('src', `${$(slid).attr('src')}`);
      $('#thisPoto').addClass('big-size')
      //console.log(atrr);

   })
}