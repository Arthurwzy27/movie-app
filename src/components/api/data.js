export const datas = [
  { title: 'Une bière au front', img: 'movie-img', year: 2022 },
  { title: 'Au front', img: 'movie-img', year: 2018 },
  { title: 'Bière  front', img: 'movie-img', year: 2002 },
  { title: 'Frontière au front', img: 'movie-img', year: 2021 },
]

const getData = async () => {
  const URL = `https://fake-movie-database-api.herokuapp.com/api?s=batman`
  const data = await fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))

    const {
      symbol,
      name,
      market_data: { current_price, price_change_24h,  price_change_percentage_24h}
    } = data

    return { symbol, name, current_price, price_change_24h, price_change_percentage_24h  }
}

export { getData };
