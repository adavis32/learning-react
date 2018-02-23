const React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        //get value off of location
            //sets the location var
        var location = this.refs.location.value;
        //check if user input is valid
        if (location.length > 0) {
            this.refs.location.value = '';
            //pass in location user searched for
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" placeholder="Enter city name" ref="location"/>
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
