import dynamic from 'next/dynamic'
import { useState } from 'react'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/model'),
{ ssr: false, loading: () => <h2>Loading</h2>  }
)

const ImageContainer = () => {
  let [isModel, setModel] = useState(false)
  let [image, setImage] = useState("/HUG-ARMCHAIR_1.jpg")

  let updateImage = (e) => {
    setModel(false)
    setImage(e.target.src)
  }
  
  return(
    <div className="col-12@md col-6 container__row u-pad-v-md u-pad-r-sm">
      <div className="col-10 col-12@md u-pad-b-xs">
        { isModel ? <DynamicComponentWithNoSSR /> : <img className="col-12" src={image}  /> }
      </div>
      <div className="col-2 col-12@md u-pad-h-xs@md-min container__row">
        <img className="col-2@md u-pad-r-sm@md u-pad-b-xs@md-min" src="/HUG-ARMCHAIR_1.jpg" onClick={(e) => updateImage(e)}/>
        <img className="col-2@md u-pad-r-sm@md u-pad-b-xs@md-min" src="/HUG-ARMCHAIR_2.jpg" onClick={(e) => updateImage(e)}/>
        <img className="col-2@md u-pad-r-sm@md" src="/box-3D-Message.png" onClick={() => setModel(true)}/>
      </div>
    </div>
    )
}

export default ImageContainer
