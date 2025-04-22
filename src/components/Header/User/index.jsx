import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getUserThunk } from '../../../store/slices/userSlice';

import styles from './User.module.sass'
function User ({ user, isFetching, error, getUser }) {
  useEffect(() => {
    getUser();
  }, []);
  const userData = user?.results?.[0];
  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!!</div>}
      {!isFetching && !error && userData && (
        <div className={styles.userWrapper}>
          <img className={styles.img} src={userData.picture.medium} />
          <h2 className={styles.userName}>
            {userData.name.first} {userData.name.last}
          </h2>
        </div>
      )}
    </>
  );
}
const mapStateToProps = ({ user }) => user;

const mapDispathToProps = dispatch => ({
  getUser: () => dispatch(getUserThunk()),
});

export default connect(mapStateToProps, mapDispathToProps)(User);
