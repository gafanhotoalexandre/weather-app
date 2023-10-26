interface WeatherPageProps {
  params: {
    city: string
    lat: string
    long: string
  }
}
export default function WeatherPage({
  params: { city, lat, long },
}: WeatherPageProps) {
  return <div>{city}</div>
}
