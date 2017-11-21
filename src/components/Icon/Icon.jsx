import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Icon.css';
const files = require.context('!svg-sprite-loader!svgo-loader?useConfig=svgoConfig!../../img/svg/icon', false, /.*\.svg$/);
files.keys().forEach(files);

const cx = classNames.bind(styles);


const Icon = (props) => {
    let iconClasses;
    let iconId = '#' + props.symbol;

    if (props.stroke) {
        iconClasses = cx(
            'icon-stroke',
            props.customClass,
            {[`icon--${props.size}`]: props.size}
        );
    } else {
        iconClasses = cx(
            'icon',
            props.customClass,
            {[`icon--${props.size}`]: props.size}
        );
    }

    return (
      <svg className={iconClasses} >
        <use href={iconId}  aria-labelledby={props.name + ' icon'}/>
      </svg>
    );
};

Icon.defaultProps = {
    stroke: false
};

Icon.propTypes = {
    stroke: PropTypes.bool,
    customClass: PropTypes.string,
    symbol: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    name: PropTypes.string
};

export default Icon;
