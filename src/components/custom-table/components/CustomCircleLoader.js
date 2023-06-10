const CustomCircleLoader = ({className = "", size = "large", fill = "#546376", block = false, backgroundColor = "#ffffff69"}) => {

    const styles = {
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor,
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const renderAnimation = (slice_no) => {
        let ratio = 1/8;
        let second = ratio * slice_no;
        return (
            <animate
                attributeName='opacity'
                values="1; .5; 1"
                begin={`${second}s`}
                dur={'1s'}
                repeatCount={'indefinite'}
            />
        )
    }

    const renderPath = (path, slice_no) => {
        return (
            <path d={path} fill={fill} opacity={'1'}>
                {renderAnimation(slice_no)}
            </path>
        )
    }

    return(
        <div 
            className={`${className}`}
            style={block ? styles: {}}
        >
            {size === "large" &&
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                {renderPath("M50 25C50 31.3587 47.577 37.4784 43.2242 42.1137L39.5794 38.6909C43.0616 34.9827 45 30.0869 45 25H50Z", 0)}
                {renderPath("M42.6777 42.6777C38.1814 47.1739 32.1408 49.7879 25.7853 49.9877L25.6282 44.9901C30.7126 44.8303 35.5451 42.7391 39.1421 39.1421L42.6777 42.6777Z", 1)}
                {renderPath("M25 50C18.6413 50 12.5216 47.577 7.88631 43.2242L11.3091 39.5794C15.0173 43.0616 19.9131 45 25 45L25 50Z", 2)}
                {renderPath("M7.32233 42.6777C2.82607 38.1814 0.212066 32.1408 0.0123359 25.7853L5.00987 25.6282C5.16965 30.7126 7.26086 35.5451 10.8579 39.1421L7.32233 42.6777Z", 3)}
                {renderPath("M0 25C5.55893e-07 18.6413 2.42297 12.5216 6.77579 7.88632L10.4206 11.3091C6.93838 15.0173 5 19.9131 5 25L0 25Z", 4)}
                {renderPath("M7.32233 7.32233C11.8186 2.82606 17.8592 0.21206 24.2148 0.0123352L24.3718 5.00987C19.2874 5.16965 14.4549 7.26085 10.8579 10.8579L7.32233 7.32233Z", 5)}
                {renderPath("M25 0C31.3587 7.58265e-08 37.4784 2.42298 42.1137 6.77581L38.691 10.4206C34.9827 6.93839 30.0869 5 25 5L25 0Z", 6)}
                {renderPath("M42.6777 7.32233C47.1739 11.8186 49.7879 17.8592 49.9877 24.2148L44.9901 24.3718C44.8304 19.2874 42.7392 14.4549 39.1421 10.8579L42.6777 7.32233Z", 7)}
            </svg>
            }
            {size === "medium" &&
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {renderPath("M40 20C40 24.6541 38.3769 29.1625 35.4103 32.7485L32.3282 30.1988C34.7015 27.33 36 23.7233 36 20H40Z", 0)}
                {renderPath("M34.1421 34.1421C30.8512 37.4331 26.5156 39.4733 21.8822 39.9112L21.5057 35.929C25.2125 35.5786 28.681 33.9465 31.3137 31.3137L34.1421 34.1421Z", 1)}
                {renderPath("M20 40C15.3459 40 10.8375 38.3769 7.25152 35.4103L9.80122 32.3282C12.67 34.7015 16.2767 36 20 36V40Z", 2)}
                {renderPath("M5.85786 34.1421C2.56693 30.8512 0.526748 26.5156 0.0887606 21.8822L4.07101 21.5057C4.4214 25.2125 6.05355 28.681 8.68629 31.3137L5.85786 34.1421Z", 3)}
                {renderPath("M0 20C4.06873e-07 15.3459 1.62311 10.8375 4.58974 7.25152L7.67179 9.80121C5.29849 12.67 4 16.2767 4 20H0Z", 4)}
                {renderPath("M5.85786 5.85787C9.14879 2.56693 13.4844 0.526748 18.1178 0.0887608L18.4943 4.07101C14.7875 4.4214 11.319 6.05355 8.68629 8.68629L5.85786 5.85787Z", 5)}
                {renderPath("M20 0C24.6541 5.54993e-08 29.1624 1.62311 32.7485 4.58973L30.1988 7.67179C27.33 5.29849 23.7233 4 20 4V0Z", 6)}
                {renderPath("M34.1421 5.85786C37.4331 9.14879 39.4733 13.4844 39.9112 18.1178L35.929 18.4943C35.5786 14.7875 33.9464 11.319 31.3137 8.68629L34.1421 5.85786Z", 7)}
            </svg>
            }
            {size === "small" &&
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                {renderPath("M25 12.5C25 15.1397 24.1643 17.7117 22.6127 19.8473L20.5902 18.3779C21.8314 16.6694 22.5 14.6118 22.5 12.5H25Z", 0)}
                {renderPath("M21.3388 21.3388C19.4723 23.2054 17.0627 24.4332 14.4554 24.8461L14.0643 22.3769C16.1501 22.0465 18.0778 21.0643 19.5711 19.5711L21.3388 21.3388Z", 1)}
                {renderPath("M12.5 25C9.86026 25 7.28828 24.1643 5.15269 22.6127L6.62215 20.5902C8.33062 21.8315 10.3882 22.5 12.5 22.5L12.5 25Z", 2)}
                {renderPath("M3.66117 21.3388C1.79459 19.4723 0.566842 17.0627 0.153896 14.4554L2.62312 14.0643C2.95347 16.1501 3.93567 18.0778 5.42893 19.5711L3.66117 21.3388Z", 3)}
                {renderPath("M0 12.5C2.30774e-07 9.86026 0.835687 7.28828 2.38729 5.15268L4.40983 6.62215C3.16855 8.33062 2.5 10.3882 2.5 12.5H0Z", 4)}
                {renderPath("M3.66116 3.66117C5.52774 1.79459 7.93733 0.566842 10.5446 0.153896L10.9357 2.62312C8.84986 2.95347 6.92219 3.93567 5.42893 5.42893L3.66116 3.66117Z", 5)}
                {renderPath("M12.5 0C15.1397 3.14786e-08 17.7117 0.835688 19.8473 2.38729L18.3779 4.40983C16.6694 3.16855 14.6118 2.5 12.5 2.5V0Z", 6)}
                {renderPath("M21.3388 3.66116C23.2054 5.52774 24.4332 7.93732 24.8461 10.5446L22.3769 10.9357C22.0465 8.84986 21.0643 6.92219 19.5711 5.42893L21.3388 3.66116Z", 7)}
            </svg>
            }
            {size === "extra-small" &&
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {renderPath("M20 10C20 12.1118 19.3314 14.1694 18.0902 15.8779L16.4721 14.7023C17.4652 13.3355 18 11.6894 18 10H20Z", 0)}
                {renderPath("M17.0711 17.0711C15.5778 18.5643 13.6501 19.5465 11.5643 19.8769L11.2515 17.9015C12.9201 17.6372 14.4622 16.8515 15.6569 15.6569L17.0711 17.0711Z", 1)}
                {renderPath("M10 20C7.88821 20 5.83062 19.3315 4.12215 18.0902L5.29772 16.4721C6.6645 17.4652 8.31057 18 10 18V20Z", 2)}
                {renderPath("M2.92893 17.0711C1.43567 15.5778 0.453474 13.6501 0.123117 11.5643L2.09849 11.2515C2.36278 12.9201 3.14854 14.4622 4.34315 15.6569L2.92893 17.0711Z", 3)}
                {renderPath("M0 10C1.84619e-07 7.88821 0.66855 5.83062 1.90983 4.12215L3.52786 5.29772C2.53484 6.6645 2 8.31056 2 10H0Z", 4)}
                {renderPath("M2.92893 2.92893C4.42219 1.43567 6.34986 0.453474 8.43565 0.123117L8.74852 2.09849C7.07989 2.36278 5.53776 3.14854 4.34315 4.34315L2.92893 2.92893Z", 5)}
                {renderPath("M10 0C12.1118 2.51829e-08 14.1694 0.66855 15.8779 1.90983L14.7023 3.52787C13.3355 2.53484 11.6894 2 10 2V0Z", 6)}
                {renderPath("M17.0711 2.92893C18.5643 4.42219 19.5465 6.34986 19.8769 8.43565L17.9015 8.74852C17.6372 7.07989 16.8515 5.53775 15.6569 4.34314L17.0711 2.92893Z", 7)}
            </svg>
            }
        </div>
    )
}
export default CustomCircleLoader;