import '@google/model-viewer'

const ModelComp = () => {
  
  const modelStyle = {
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center'
  }

  const posterStyles = {
    width: '100%',
    height: '600px',
    backgroundImage: 'url("/box.png")',
    position: 'absolute', 
    top: "0", 
    left: '0',
    backgroundSize: 'cover'
  }

  return (
    <div className="col-12 u-pad-v-sm u-pad-r-sm u-height-500">
      <model-viewer style={modelStyle} poster="/box.png" src='/box.glb' auto-rotate camera-controls reveal="interaction" background-color="#455A64" ar id="lazy-load" ar-scale="auto">
        <div id="lazy-load-poster" style={posterStyles} slot="poster"></div>
        <div id="button-load" className="c-btn c-btn--model u-mar-v-sm u-mar-h-sm" slot="poster">Load 3D Model</div>
      </model-viewer>
    </div>
)}

export default ModelComp
