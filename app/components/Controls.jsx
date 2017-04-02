var React = require('react');

var Controls = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string,
    countdownStatus: React.PropTypes.string,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus, timerStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className = "button secondary" onClick = {this.onStatusChange('paused')}>Pause</button>
      }else if (countdownStatus ==='paused') {
        return <button className = "button primary" onClick = {this.onStatusChange('started')}>Start</button>
      }
       else if(timerStatus === 'started'){
         return <button className = "button secondary" onClick = {this.onStatusChange('paused')}>Pause</button>
       }
       else if(timerStatus === 'stopped' || timerStatus === 'paused'){
         return <button className = "button primary" onClick = {this.onStatusChange('started')}>Start</button>
       }
    };

    return (
      <div className = "controls">
      {renderStartStopButton()}
      <button className = "button hollow alert" onClick = {this.onStatusChange('stopped')}>Clear</button>
      </div>
    )

  }

});

module.exports = Controls;
