var Child = require("./Child.js");
var Parent = React.createClass({
    render: function(){
        return ( 
          <div>
            <div> This is the parent. </div>
            <Child name="child" age="25"/>
                <Child name="Timmy" age="22"/>
          </div>
      )
  }
});

module.exports = Parent;