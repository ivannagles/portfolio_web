const about_Link = document.querySelector('a[href="#anchor__About-me"]'); /*me permite acceder al link */

about_Link.addEventListener('click', (event) => { /* Agrego evento de clic al enlace*/
  event.preventDefault(); /*prevengo que no se ejecute */
  const destination = document.querySelector('#anchor__About-me'); /*accedo a la seccion de destino*/
  destination.scrollIntoView({ behavior: 'smooth' }); /*genero desplazamiento, puede ser smooth, instant o auto*/
});

const skills_Link = document.querySelector('a[href="#anchor__My-Skills"]'); /*me permite acceder al link */

skills_Link.addEventListener('click', (event) => { /* Agrego evento de clic al enlace*/
  event.preventDefault(); /*prevengo que no se ejecute */
  const destination = document.querySelector('#anchor__My-Skills'); /*accedo a la seccion de destino*/
  destination.scrollIntoView({ behavior: 'smooth' }); /*genero desplazamiento, puede ser smooth, instant o auto*/
});

const portfolio_Link = document.querySelector('a[href="#anchor__Portfolio"]'); /*me permite acceder al link */

portfolio_Link.addEventListener('click', (event) => { /* Agrego evento de clic al enlace*/
  event.preventDefault(); /*prevengo que no se ejecute */
  const destination = document.querySelector('#anchor__Portfolio'); /*accedo a la seccion de destino*/
  destination.scrollIntoView({ behavior: 'smooth' }); /*genero desplazamiento, puede ser smooth, instant o auto*/
});

const contact_Link = document.querySelector('a[href="#anchor__Contact"]'); /*me permite acceder al link */

contact_Link.addEventListener('click', (event) => { /* Agrego evento de clic al enlace*/
  event.preventDefault(); /*prevengo que no se ejecute */
  const destination = document.querySelector('#anchor__Contact'); /*accedo a la seccion de destino*/
  destination.scrollIntoView({ behavior: 'smooth' }); /*genero desplazamiento, puede ser smooth, instant o auto*/
});