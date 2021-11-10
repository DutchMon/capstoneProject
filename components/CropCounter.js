
import Image from 'next/image'
import cropIcon from '../public/cropIcon.png'


export default function CropCounter({ cropLength }) {


    return (
        <div>

            <div className="tile is-ancestor larger-screens">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <div className="level no-margin">
                            <p className="title is-4 level-left">Total Crops</p>
                            <PlantIcon></PlantIcon>
                        </div>
                        <h2 className="cropCount title is-1 has-text-centered">{cropLength}</h2>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <div className="level no-margin">
                            <p className="title is-4 level-left">Active Crops</p>
                            <PlantIcon className="level-right"></PlantIcon>
                        </div>
                        <h2 className="cropCount title is-1 has-text-centered">{cropLength}</h2>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <div className="level no-margin">
                            <p className="title is-4 level-left">Completed Crops</p>
                            <PlantIcon className="level-right"></PlantIcon>
                        </div>
                        <h2 className="cropCount title is-1 has-text-centered">{cropLength}</h2>
                    </div>
                </div>
            </div>
            <div className="smaller-screens">
                <div className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <span className="heading">Total<PlantIcon></PlantIcon></span>
                            <p className="title">{cropLength}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <span className="heading">Active<PlantIcon></PlantIcon></span>
                            <p className="title">{cropLength}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <span className="heading">Completed<PlantIcon></PlantIcon></span>
                            <p className="title">{cropLength}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PlantIcon() {
    return (
        <div className="cropCounter-icon">
            <Image
                src={cropIcon}
                alt="cropCounter icon image"
            />
        </div>
    )
}
