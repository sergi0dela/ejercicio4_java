const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
  
  const botonClick = document.querySelector('#btnClick');
  botonClick.addEventListener('click', (evento) => {
    console.log('Detalles del evento de clic:', evento);
  });
  
  const inputFoco = document.querySelector('.input-foco');
  inputFoco.addEventListener('focus', (evento) => {
    console.log('Valor del campo al enfocar:', evento.target.value);
  });
  
  const inputCambio = document.querySelector('.input-cambio');
  inputCambio.addEventListener('input', (evento) => {
    console.log('Contenido del campo mientras escribes:', evento.target.value);
  });
  
  const listaDeAlbums = document.createElement('ul');
  albums.forEach(nombreAlbum => {
    const itemLista = document.createElement('li');
    itemLista.textContent = nombreAlbum;
    listaDeAlbums.appendChild(itemLista);
  });
  
  // Insertar la lista en una sección específica para este alumno
  const seccionAlbums = document.querySelector('#lista-albums-aqui');
  if (seccionAlbums) {
    seccionAlbums.appendChild(listaDeAlbums);
  } else {
    document.body.appendChild(listaDeAlbums);
  }