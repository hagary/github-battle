var React = require('react');
var transparentBg = require('../styles/index').transparentBg;
var ReactRouter   = require('react-router');
var Link  = ReactRouter.Link;
var MainContainer = require('./MainContainer');


var Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">فلتبدأ المعركة</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success"> Let's go!</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
