import React from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";


class  SimpleCard extends React.Component{

    render(){
        return(
            <div className="flex">
                <div>
                    <Image/>
                </div>
                <div>
                    <Title title="My name is Bella"/>
                    <Description description="I am a happy poodle.i do nothing but eat,sleep,shit,play and repeat.i really love my treats"/>
                </div>
            </div>
        )
    }
}

export default SimpleCard