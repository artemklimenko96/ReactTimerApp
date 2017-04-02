var React = require("react");
var Clock = require("Clock");
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return{
    time: 0,
    timerStatus: 'stopped'
  };
  },
  componentDidUpdate: function (prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
        this.startTimer();
        break;
        case 'stopped':
        this.setState({time:0});
        case 'paused':
        clearInterval(this.timer)
        this.timer = undefined;
        break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newTime = this.state.time + 1;
      this.setState({
        time: newTime
      });
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus});
  },
render: function(){
    var {time, timerStatus} = this.state;
    var renderControlArea = () => {
        return <Controls timerStatus = {timerStatus} onStatusChange = {this.handleStatusChange}/>;
      };
return(
  <div>
    <h1 className = "page-title">Timer App</h1>
    <Clock totalSeconds = {time}/>
    {renderControlArea()}
  </div>
);
}
});
module.exports = Timer;
