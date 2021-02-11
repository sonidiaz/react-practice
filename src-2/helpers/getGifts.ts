export const getGifts = async(category: string) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=nBWVUNAbDBVIDEgqP5B4cuEJ6mgZ1lLB&limit=10&q=${encodeURI(category)}`
  const resp = await fetch(URL)
  const {data} = await resp.json()
  const gift = data.map((img: any): object => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium?.url
      
    }
  })
  return gift;
}