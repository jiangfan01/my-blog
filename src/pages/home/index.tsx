import React from "react";
import Hero from "../../components/Hero/Hero.tsx";
import SkillTags from "../../components/SkillTags/SkillTags.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Hero/>
            <SkillTags/>
        </div>
    )
}
export default Home;