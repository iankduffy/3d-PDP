import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/model'),
  { ssr: false }
)

const ImageContainer = () => (
  <div>
    <DynamicComponentWithNoSSR />
  </div>
)

export default ImageContainer
