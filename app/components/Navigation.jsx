var React = require("react");
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  onSearch:function(e){
    e.preventDefault();
var location = this.refs.searchRef.value;
var encodedLocation = encodeURIComponent(location);
if(location.length>0){
  this.refs.searchRef.value = "";
  window.location.hash = '#/?location=' + encodedLocation;
}
  },
  render: function(){
    return(
      <div className = "top-bar">
        <div className="top-bar-left">
          <ul className = "menu">
            <li className = "menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to = "/" activeClassName = "active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to = "/countdown" activeClassName = "active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className = "menu">
          <li className = "menu-text">Created by <a href="http://artemklimenko.com" target ="_blank"> Artem Klimenko</a></li>
          </ul>
        </div>
        </div>
    );
  }
});


module.exports = Navigation;
