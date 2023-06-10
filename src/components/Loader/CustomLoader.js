const CustomLoader = ({className}) => {
    return(
        <div 
            className={`${className}`}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#ffffff69',
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <svg width={'40px'} height={'50px'} viewBox={'0 0 51 50'}>
                <rect y="0" width="5" height="50" fill="#133159" opacity={"1"} >
                    <animate
                        attributeName='height'
                        values="50; 10; 50"
                        begin={"0s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='y'
                        values="0; 20; 0"
                        begin={"0s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='opacity'
                        values="1; .5; 1"
                        begin={"0s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                </rect>
                <rect x="7" y="0" width="5" height="50" fill="#133159" opacity={"1"}>
                    <animate
                        attributeName='height'
                        values="50; 10; 50"
                        begin={"0.2s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='y'
                        values="0; 20; 0"
                        begin={"0.2s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='opacity'
                        values="1; .5; 1"
                        begin={"0.2s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                </rect>
                <rect x="14" y="0" width="5" height="50" fill="#133159" opacity={"1"}>
                    <animate
                        attributeName='height'
                        values="50; 10; 50"
                        begin={"0.4s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='y'
                        values="0; 20; 0"
                        begin={"0.4s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='opacity'
                        values="1; .5; 1"
                        begin={"0.4s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                </rect>
                <rect x="21" y="0" width="5" height="50" fill="#133159" opacity={"1"}>
                    <animate
                        attributeName='height'
                        values="50; 10; 50"
                        begin={"0.6s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='y'
                        values="0; 20; 0"
                        begin={"0.6s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='opacity'
                        values="1; .5; 1"
                        begin={"0.6s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                </rect>
                <rect x="28" y="0" width="5" height="50" fill="#133159" opacity={"1"}>
                    <animate
                        attributeName='height'
                        values="50; 10; 50"
                        begin={"0.8s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='y'
                        values="0; 20; 0"
                        begin={"0.8s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                    <animate
                        attributeName='opacity'
                        values="1; .5; 1"
                        begin={"0.8s"}
                        dur={'1s'}
                        repeatCount={'indefinite'}
                    />
                </rect>
            </svg>
        </div>
    )
}
export default CustomLoader;