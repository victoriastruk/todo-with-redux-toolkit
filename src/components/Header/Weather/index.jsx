import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getWeatherThunk } from '../../../store/slices/weatherSlice';
function Weather ({ weather, isFetching, error, getWeather }) {
  useEffect(() => {
    getWeather();
  }, []);

  const temperature = weather?.current?.temperature_2m;

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!!</div>}
      {!isFetching && !error && temperature && (
        <div>{weather.current.temperature_2m}°C</div>
      )}
    </>
  );
}
const mapStateToProps = ({ weather }) => ({
  weather: weather.weather,
  isFetching: weather.isFetching,
  error: weather.error,
});

const mapDispathToProps = dispatch => ({
  getWeather: () => dispatch(getWeatherThunk()),
});

export default connect(mapStateToProps, mapDispathToProps)(Weather);
