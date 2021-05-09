import api from "@/services/api";

export default function BannerItem ({ item }) {
  const { id, title, image, url, new_tab } = item

  const handleClick = async (e) => {
    await api.get(`banners/${id}`).then(res => res.data);
  }

  const Img = () => (
    <div className=" mb-5 p-2 border border-gray-100 rounded">
      <img src={image} alt={title} className="max-w-full" />
      <h3 className="text-gray-500 text-center uppercase mt-1 text-xs">{title}</h3>
    </div>
  )

  const LinkImg = () => url
    ? <a href={url} target={!new_tab ? '_blank' : ''} onClick={handleClick}><Img /></a>
    : <Img />

  return (
    <>
      <LinkImg />
    </>
  )
}
