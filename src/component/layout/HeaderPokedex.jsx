const HeaderPokedex = () => {
  return (
    <header>
    <div className="bg-red-600 h-16">
        <div className="h-[36 px] sm:h-full pl-4 translate-y-4 relative z-10">
        <img className="h-full w-auto" src="img/logo.png" alt="" />
        </div>
    </div>
    <div className="bg-black h-12 relative">
        <div className="h-14 w-14 bg-white rounded-full absolute bg-green right-0 -translate-x-1/2 border-4 border-black -translate-y-1/2 grid place-content-center">
            <div className="w-9 h-9 rounded-full bg-slate-700 border-[6px] border-black"></div>
        </div>
    </div>
</header>
  )
}
export default HeaderPokedex