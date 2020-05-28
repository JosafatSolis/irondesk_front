import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default class Timer extends Component {
    state = {
        tick: false,
        timerId: 0
    }
  
    constructor(params) {
        super(params);
        const timerId = setInterval(() => {
            this.setState({tick: !this.state.tick});
        }, 1000);
        this.setState({timerId});
        this.componentWillUnmount = this.componentWillUnmount.bind();
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    render() {
        let h = String(parseInt(dayjs().diff(dayjs(this.props.reportDate),"hour")) % 24);
        let m = String(parseInt(dayjs().diff(dayjs(this.props.reportDate),"minute")) % 60);
        let s = String(parseInt(dayjs().diff(dayjs(this.props.reportDate),"second")) % 60);
        h = (h.length < 2) ? "0" + h : h;
        m = (m.length < 2) ? "0" + m : m;
        s = (s.length < 2) ? "0" + s : s;
    return (
        <div className="uk-heading-small">
          <span uk-icon="clock"></span>
          {
           dayjs().diff(dayjs(this.props.reportDate),"day") +
           'd ' + h + ":" + m + ":" + s}
        </div>
    )
  }
}