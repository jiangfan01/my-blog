import React from "react";
import Hero from "../../components/Hero/Hero.tsx";
import SkillTags from "../../components/SkillTags/SkillTags.tsx";
import Nutshell from "../../components/Nutshell/Nutshell.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Nutshell/>

            <Hero/>

            <SkillTags/>
        </div>
    )
}
export default Home;