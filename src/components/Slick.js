import React, {Component} from "react";
import Slider from 'react-slick';
import {Grid, Row, Col} from 'react-bootstrap';

class Slick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides:
                [
                    {
                        main_caption: 'Photo-realistic 3D',
                        sub_caption: '3DソフトBlenderを用いた作品の制作',
                        img_src: 'https://i.gyazo.com/363b13d5f2c04141df904bce25b61e3b.png'
                    },
                    {
                        main_caption: 'Deep Learning',
                        sub_caption: 'LSTM+CNNによる画像キャプション生成',
                        img_src: 'https://i.gyazo.com/d3ce31e14282e8b6295803361c931473.jpg'},
                    {
                        main_caption: 'Programming',
                        sub_caption: 'このHPはReact.jsにより開発されています',
                        img_src: 'https://i.gyazo.com/383c0c01d53972454ac33d852ec514f1.png'
                    },
                    {
                        main_caption: 'KCS',
                        sub_caption: '慶応義塾内の技術サークルに属しています',
                        img_src: 'https://i.gyazo.com/33a0d703ee127b751874694d23e7f683.jpg'
                    }
                ],
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true,
                autoplay: true,
                autoplaySpeed: 3500
            }
        };
    }

    render() {
        return (
            <Slider {...this.state.settings}>
                {this.state.slides.map(slide => {
                    return [
                        <div>
                            <div className="img_container">
                                <img src={slide.img_src} className="img_responsive" height="1080"/>
                            </div>
                            <Grid>
                                <Row>
                                    <Col xs={12} xsOffset={2}>
                                        <h1 className="main_caption">{slide.main_caption}</h1>
                                        <h3 className="sub_caption">{slide.sub_caption}</h3>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    ];
                })}
            </Slider>
        );
    }
}

export default Slick;