var React = require('react');
var PropTypes = React.PropTypes;

var  = React.createClass({

  render: function() {
    return (
      <div>Results</div>
    );
  }

});

Results.propTypes{
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  score: PropTypes.array.isRequired
}

module.exports = ;
