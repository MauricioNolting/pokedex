import { useDispatch } from "react-redux"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const dispatch = useDispatch()
    const  navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainerName(e.target.trainerName.value))
    navigate("/pokedex")
}

  return (
    <main className="h-screen grid grid-rows-[1fr,_auto]">
        <section className="grid place-content-center text-center">

            <div>
                <img src="/img/logo.png" alt="" />
                <h3>Hi Coach!</h3>
                <p>To start, give me your name</p>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Your name" type="text" name="trainerName"/>
                    <button>Start</button>
                </form>
            </div>

        </section>
        <footer className="bg-black h-20">
                <div className="bg-red-600 h-16"></div>
                <div className="bg-black h-12 relative">
                    <div className="h-14 w-14 bg-white rounded-full absolute bg-green left-1/2 -translate-x-1/2 boder-4 border-black -translate-y-1/2 grid place-content-center">
                        <div className="w-10 h-10 rounded-full bg-slate-700 border-[6px] border-black"></div>
                    </div>
                </div>
        </footer>
    </main>
  )
}
export default Home