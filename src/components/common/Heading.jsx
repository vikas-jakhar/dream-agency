const Heading = ({
    reduceBelow = 1024,
    maxFontSize = 48,
    minFontSize = 25,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`${className} font-bold leading-6 sm:leading-7 md:leading-9 lg:leading-custom-xl -tracking-[0.01em]`}>
            {children}
        </h2>
    );
};

export default Heading;