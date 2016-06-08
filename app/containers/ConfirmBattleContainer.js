var React = require('react');
var PropTypes = React.PropTypes;

//Component
var ConfirmBattle = require("../components/ConfirmBattle.js");

//Github functions
var githubHelpers = require('../utils/githubHelpers.js');

var ConfirmBattleContainer = React.createClass({
  contextTypes  : {
    router: PropTypes.object.isRequired
  },
  getInitialState   : function () {
    return {
      isLoading : true,
      playersInfo:[]
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    //Fetch info from github
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players){
      this.setState({
        isLoading:false,
        playersInfo: players
        })
    }.bind(this));
  },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} onInitiateBattle={this.handleInitiateBattle} />
    );
  }

});

module.exports = ConfirmBattleContainer;
