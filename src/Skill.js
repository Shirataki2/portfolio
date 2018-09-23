import React, {Component, Fragment} from "react";
import {Parallax, ParallaxLayer} from 'react-spring';


const Page = ({offset, caption, first, second, gradient, onClick}) => (
    <Fragment>
        <ParallaxLayer offset={offset} speed={.2} onClick={onClick}>
            <div className="slopeBegin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={offset} speed={.2} onClick={onClick}>
            <div className={`slopeEnd ${gradient}`}/>
        </ParallaxLayer>
        <ParallaxLayer className={"cap_text cap_number"} offset={offset} speed={-5} onClick={onClick}>
            <span>0{offset + 1}</span>
        </ParallaxLayer>

        <ParallaxLayer className={"cap_text cap_header"} offset={offset} speed={2.} onClick={onClick}>
            <span>
                <p style={{fontSize: 35}}>{caption}</p>
                <div className={`stripe ${gradient}`}/>
                <h2>{first}</h2>
                <h2>{second}</h2>
            </span>
        </ParallaxLayer>
    </Fragment>
);

class Skill extends Component {
    scroll = to => this.refs.parallax.scrollTo(to);

    render() {
        return (
            <Parallax pages={3} scrolling={false} horizontal ref="parallax" className={"contain"}>
                <Page offset={0} gradient={"pink"} caption="機械学習" first="GANによる" second={"画像生成"}
                      onClick={() => this.scroll(1)}/>
                <Page offset={1} gradient={"blue"} caption="機械学習" first="変分ベイズ法の" second={"実装"}
                      onClick={() => this.scroll(2)}/>
                <Page offset={2} gradient={"green"} caption="3DCG" first="腕時計" second={""}
                      onClick={() => this.scroll(0)}/>
            </Parallax>
        )
    }
}

export default Skill;