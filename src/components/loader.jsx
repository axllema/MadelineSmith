import '../scss/style.scss';
import '../scss/components/_loader.scss';

import PropTypes from 'prop-types';
const Loader = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="loader-container">
            <div className="container">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="line"></div>
                ))}
            </div>
        </div>
    );
};
export default Loader;

Loader.propTypes = {
    visible: PropTypes.bool.isRequired,
};

