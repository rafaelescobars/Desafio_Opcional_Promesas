// 1 - Función Asíncrona para obtener URL


// 2 - mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el método fetch, utilizando a la vez await para que retorne directamente el valor de la promesa.

const getDatos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos'
  try {
    const response = await fetch(url)
    const datos = await response.json()
    const veintePrimerosAlbums = []
    datos.forEach(element => {
      if (element.albumId == 1 && element.id <= 20) {
        veintePrimerosAlbums.push(element)
      }
    });
    console.log(veintePrimerosAlbums)
  } catch (err) {
    console.log(err)
  }
}

const promesaTresSegundos = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Información Enviada')
  }, 3000);
});

const promesaAsincrona = async () => {
  const tresSegundos = await promesaTresSegundos()
  console.log(tresSegundos)
}

getDatos()

promesaAsincrona()