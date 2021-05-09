import BannerItem from "./banner-item"

function Banners ({ items }) {
  return (
    <div>
      <ul className="list-decimal">
        {items.map(item => <BannerItem item={item} key={item.id} />)}
      </ul>
    </div>
  )
}

export default Banners
