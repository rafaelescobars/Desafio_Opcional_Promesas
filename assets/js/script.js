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