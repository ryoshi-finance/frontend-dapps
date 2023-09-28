import ContentLoader from 'react-content-loader'

const LoaderCryptoCurrency = props => (
    <ContentLoader 
    speed={3}
    width={1300}
    height={88}
    viewBox="0 0 1200 55"
    backgroundColor="#ffffff"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="0" y="10" rx="0" ry="0" width="150" height="50" />
    <rect x="200" y="10" rx="0" ry="0" width="150" height="50" />
    <rect x="400" y="10" rx="0" ry="0" width="150" height="50" />
    <rect x="600" y="10" rx="0" ry="0" width="150" height="50" />
    <rect x="800" y="10" rx="0" ry="0" width="150" height="50" />
    <rect x="1000" y="10" rx="0" ry="0" width="150" height="50" />
  </ContentLoader>
)

LoaderCryptoCurrency.metadata = {
  name: 'Alan Hurtarte', // My name
  github: 'kenny08gt', // Github username
  description: 'Instagram histories. Picture + username', // Little tagline
  filename: 'HistoriesLoader', // filename of your loader
}

export default LoaderCryptoCurrency