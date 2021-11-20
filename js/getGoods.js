const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  console.log(links);

  const getData = () => {
    fetch('https://testwildberris-default-rtdb.europe-west1.firebasedatabase.app/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('goods', JSON.stringify(data))
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      getData()
    })
  })

  // Запись, чтение и удаление из локального хранилища браузера.
  /* запись ↓
  localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]))*/
  /* чтение ↓
  const goods = JSON.parse(localStorage.getItem('goods'))
  console.log(goods);*/
  /* удаление ↓
  console.log(localStorage);
  localStorage.removeItem('goods')
  console.log(localStorage);*/

}

getGoods()