import PostItem from "./post-item";

export default function ListPosts (props) {
  return (
    <div>
      {props.items.map((item) => <PostItem item={item} />)}
    </div>
  )
}
