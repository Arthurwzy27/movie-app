export const datas = [
  { title: 'Une bière au front', img: 'movie-img', year: 2022 },
  { title: 'Au front', img: 'movie-img', year: 2018 },
  { title: 'Bière  front', img: 'movie-img', year: 2002 },
  { title: 'Frontière au front', img: 'movie-img', year: 2021 },
]

const getData = async () => {
  const URL = `https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json`
  const data = await fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data.data))

    const { title, directed_by, poster } = data.data;
    return { title, directed_by, poster }
}

export { getData };
