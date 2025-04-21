import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getUserThunk } from '../../../store/slices/userSlice';

function User ({ user, isFetching, error, getUser }) {
  useEffect(() => {
    getUser();
  }, []);
  const userData = user?.results?.[0];
  console.log({ user });
  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!!</div>}
      {!isFetching && !error && userData && (
        <div>
          <img src={userData.picture.medium} />
          <h2>
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
