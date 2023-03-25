const link = document.querySelector('a[href="#anchor__About-me"]'); /*me permite acceder al link */

link.addEventListener('click', (event) => { /* Agrego evento de clic al enlace*/
  event.preventDefault(); /*prevengo que no se ejecute */
  const destination = document.querySelector('#anchor__About-me'); /*accedo a la seccion de destino*/
  destination.scrollIntoView({ behavior: 'smooth' }); /*genero desplazamiento, puede ser smooth, instant o auto*/
});