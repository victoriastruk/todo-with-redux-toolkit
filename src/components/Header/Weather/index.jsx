import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureQuarter } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useEffect } from 'react';
import { getWeatherThunk } from '../../../store/slices/weatherSlice';

import styles from './Weather.module.sass';

function Weather ({ weather, isFetching, error, getWeather }) {
  const getTemperatureColor = temp => {
    if (temp <= 0) return styles.cold;
    if (temp <= 15) return styles.cool;
    if (temp <= 25) return styles.warm;
    return styles.hot;
  };

  useEffect(() => {
    getWeather();
  }, []);

  const temperature = weather?.current?.temperature_2m;

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!!</div>}
      {!isFetching && !error && temperature && (
        <div className={styles.temperatureWrapper}>
          <FontAwesomeIcon
            icon={faTemperatureQuarter}
            className={classNames(
              styles.icon,
              getTemperatureColor(temperature)
            )}
          />
          <div>{weather.current.temperature_2m}°C</div>
        </div>
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
