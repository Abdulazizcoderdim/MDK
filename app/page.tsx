export default function Home() {
  return (
    <div className="">
      <div className="relative flex items-center justify-center bg-red-300 ">
        <video
          className="fixed right-0 left-0 w-full h-screen object-cover origin-center -z-10 top-0 bottom-0"
          src="/finish.mp4"
          autoPlay
          loop
          muted
          id="bgVideo"
        >
          <source src="/finish.mp4" type="video/mp4" />
        </video>
       
      </div>
    </div>
  )
}
