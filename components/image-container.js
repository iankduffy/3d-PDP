import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/model'),
  { ssr: false }
)

const ImageContainer = () => (
  <div className="col-12@md col-6">
    <DynamicComponentWithNoSSR />
  </div>
)

export default ImageContainer
