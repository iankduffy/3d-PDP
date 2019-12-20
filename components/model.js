import '@google/model-viewer'

const ModelComp = () => {
  
  const modelStyle = {
    width: '100%',
    height: '500px',
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <div className="col-12">
      <model-viewer style={modelStyle}  poster="/box.png" src='/box.glb' auto-rotate camera-controls reveal="interaction" background-color="#455A64" ar id="lazy-load" ar-scale="auto">
        <div id="lazy-load-poster" slot="poster"></div>
        <div id="button-load" className="c-btn u-mar-v-sm u-mar-h-sm" slot="poster">Load 3D Model</div>
      </model-viewer>
    </div>
)}

export default ModelComp
