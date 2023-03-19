import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { OurGoal } from "../components/OurGoal/OurGoal";
import { OurRequirements } from "../components/OurRequirements/OurRequirements";
import data from "../data.json"

export function ProperyPage() {
    return(<main>
        <Header/>
        <Hero/>
        <OurGoal ourGoal={data.ourGoal}/>
        <OurRequirements ourRequirements={data.ourRequirements}/>
    </main>
    )
}