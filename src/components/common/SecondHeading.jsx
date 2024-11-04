import React from 'react';

const SecondHeading = ({
    reduceBelow = 1024,
    maxFontSize = 48,
    minFontSize = 25,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;
    const styledChildren = React.Children.map(children, (child) => {
        if (typeof child === 'string') {
            return child;
        }
        if (child.type === 'span') {
            return React.cloneElement(child, {
                className: `${child.props.className || ''} relative after:absolute after:left-1 after:w-[94.5%] after:h-2.5 after:bg-off-yellow after:bottom-3.5 after:-z-10`
            });
        }
        return child;
    });

    return (
        <h2
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-light leading-6 sm:leading-7 md:leading-9 lg:leading-custom-xl -tracking-[0.01em]`}
        >
            {styledChildren}
        </h2>
    );
};

export default SecondHeading;