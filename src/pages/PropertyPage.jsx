import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { OurGoal } from "../components/OurGoal/OurGoal";
import data from "../data.json"

export function ProperyPage() {
    return(<main>
        <Header/>
        <Hero/>
        <OurGoal ourGoal={data.ourGoal}/>
    </main>
    )
}