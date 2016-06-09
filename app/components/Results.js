var React = require('react');
var PropTypes = React.PropTypes;
var styles  = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link  = require('react-router').Link;

function StartOver(){
  return(
    <div className="col-sm-12"  style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'> Start Over</button>
      </Link>
    </div>
  )
}

function Results(props) {
  var winningIndex  = props.score[0] > props.score[1]?0:1;
  var losingIndex   = 1 - winningIndex;

  if(props.score[0]===props.score[1]){
    return(
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>It's a tie</h1>
      </div>
      <StartOver  />
    )
  }
  return(
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>
        Results
      </h1>
      <div className="col-sm-8  col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails  score={props.score[winningIndex]}  info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails  score={props.score[losingIndex]}  info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver  />
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  score: PropTypes.array.isRequired
}

module.exports = Results;
