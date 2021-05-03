export default function Content (props) {
  return (
    <div className="lg:w-8/10 md:w-6/10 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      {...props}
    >
      {props.children}
    </div>
  )
}
