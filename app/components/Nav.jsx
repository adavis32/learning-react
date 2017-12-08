const React = require('react');
const {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h2>Nav component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather | </IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About | </Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//             </div>
//         );
//     }
// });

var Nav = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                    </li>
                    <li>
                        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
            </div>
        </div>
    );
};

module.exports = Nav;