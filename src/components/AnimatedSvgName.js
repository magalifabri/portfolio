import React from 'react';
import {motion} from "framer-motion";


const AnimatedSvgName = () => {
    const black = '#282828';

    const letterAnimationVariant = {
        startState: {
            pathLength: 0,
            fill: '#ffffff',
        },

        animation: {
            pathLength: 1,
            fill:
                [
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                    black
                ],
        },
    }

    const transition = {
        duration: 3,
        ease: "easeInOut",
        pathLength: {
            duration: 2,
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
        },
        fill: {
            duration: 3,
            // repeat: Infinity,
            // repeatType: 'loop'
        },
    }


    return (
        <div>
            <motion.svg width="288.1"
                        height="51.3"
                        viewBox="0 0 298.1 51.3"
                        xmlns="http://www.w3.org/2000/svg"
            >
                <motion.g id="svgGroup"
                          strokeLinecap="round"
                          fillRule="evenodd"
                          fontSize="9pt"
                          stroke={black}
                          strokeWidth="1px"

                          transition={{staggerChildren: 0.15, delay: 1}}
                          initial="startState" // for children
                          animate="animation" // for children
                >
                    <motion.path
                        d="M 20.9 38.25 L 19.4 38.25 Q 17.2 33.25 14.95 28.275 Q 12.7 23.3 10.55 18.2 Q 9.85 16.6 9.175 14.975 Q 8.5 13.35 7.875 11.7 Q 7.25 10.05 6.6 8.4 Q 6.6 8.95 6.575 9.5 Q 6.55 10.05 6.55 10.6 A 1658.467 1658.467 0 0 1 6.509 12.052 Q 6.472 13.347 6.425 14.925 A 968.277 968.277 0 0 1 6.344 17.537 A 1176.446 1176.446 0 0 1 6.25 20.325 Q 6.15 23.2 6.1 26.075 Q 6.05 28.95 6 31.5 Q 5.95 32.6 5.925 33.7 A 27.25 27.25 0 0 1 5.867 34.985 A 22.024 22.024 0 0 1 5.8 35.75 Q 6.75 35.7 7.675 35.65 Q 8.6 35.6 9.55 35.55 L 9.55 37.75 L 0 37.75 L 0 36.1 Q 1.55 36.05 2.275 35.425 Q 3 34.8 3.2 33.75 A 14.642 14.642 0 0 0 3.403 32.244 A 17.463 17.463 0 0 0 3.45 31.5 L 4.4 8.7 Q 4.45 7.7 4.475 6.7 Q 4.5 5.7 4.55 4.75 Q 3.65 4.8 2.75 4.825 Q 1.85 4.85 0.95 4.9 L 0.95 2.75 L 8.6 2.75 L 17.2 22.6 Q 17.85 24.1 18.475 25.6 Q 19.1 27.1 19.775 28.6 Q 20.45 30.1 21.1 31.65 L 21.2 31.65 Q 21.75 30.3 22.5 28.425 Q 23.016 27.136 23.413 26.095 A 95.452 95.452 0 0 0 23.75 25.2 Q 25.95 19.7 28.325 14.175 Q 30.7 8.65 33 2.75 L 40.4 2.75 L 40.4 4.4 Q 39.15 4.35 38.35 4.875 A 2.464 2.464 0 0 0 37.601 5.665 Q 37.402 5.991 37.262 6.404 A 4.777 4.777 0 0 0 37.2 6.6 Q 36.879 7.7 36.936 9.514 A 19.573 19.573 0 0 0 36.95 9.85 L 38.25 32.6 A 14.302 14.302 0 0 1 38.348 34.049 A 12.953 12.953 0 0 1 38.35 34.25 L 38.35 35.7 Q 39.25 35.65 40.175 35.625 Q 41.1 35.6 42 35.55 L 42 37.75 L 30.8 37.75 L 30.8 36.1 A 5.686 5.686 0 0 0 31.65 36.013 Q 32.09 35.932 32.44 35.777 A 2.345 2.345 0 0 0 33.1 35.35 Q 33.81 34.687 34.005 33.485 A 5.132 5.132 0 0 0 34.025 33.35 A 11.827 11.827 0 0 0 34.107 32.492 Q 34.153 31.734 34.127 30.821 A 27.241 27.241 0 0 0 34.1 30.15 L 33.1 13.65 L 33 12.05 L 32.9 10.45 L 32.8 8.85 A 98.383 98.383 0 0 1 32.644 9.212 A 120.736 120.736 0 0 1 32.475 9.6 A 9.741 9.741 0 0 0 32.227 10.228 A 11.034 11.034 0 0 0 32.15 10.45 L 20.9 38.25 Z"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />

                    <motion.path
                        d="M 68.25 37.75 L 61.1 37.75 A 20.263 20.263 0 0 1 61.002 37.141 Q 60.953 36.808 60.923 36.512 A 11.042 11.042 0 0 1 60.9 36.25 Q 60.85 35.6 60.75 34.9 A 14.446 14.446 0 0 1 58.194 36.951 A 12.812 12.812 0 0 1 57.075 37.575 Q 55.1 38.55 52.9 38.55 A 13.307 13.307 0 0 1 50.816 38.398 Q 48.551 38.038 47.25 36.825 A 5.727 5.727 0 0 1 45.767 34.673 A 5.756 5.756 0 0 1 45.4 32.6 Q 45.4 30.3 46.825 28.625 Q 48.25 26.95 50.525 25.875 A 20.525 20.525 0 0 1 54.486 24.491 A 23.411 23.411 0 0 1 55.475 24.275 A 25.245 25.245 0 0 1 59.202 23.819 Q 59.933 23.786 60.65 23.8 L 60.65 20.7 A 18.218 18.218 0 0 0 60.508 18.388 A 15.647 15.647 0 0 0 60.35 17.4 A 5.301 5.301 0 0 0 59.86 15.958 A 4.464 4.464 0 0 0 59.05 14.85 A 3.084 3.084 0 0 0 57.993 14.175 Q 57.122 13.829 55.85 13.8 Q 54.776 13.763 53.662 14.082 A 8.671 8.671 0 0 0 52.875 14.35 Q 51.35 14.95 50.65 16.4 Q 51.05 16.8 51.175 17.325 A 4.853 4.853 0 0 1 51.269 17.831 A 3.688 3.688 0 0 1 51.3 18.3 A 1.768 1.768 0 0 1 51.224 18.795 Q 51.105 19.203 50.8 19.675 A 1.507 1.507 0 0 1 49.902 20.316 Q 49.59 20.403 49.199 20.403 A 3.723 3.723 0 0 1 49.05 20.4 A 2.422 2.422 0 0 1 48.387 20.314 A 1.744 1.744 0 0 1 47.45 19.675 A 2.703 2.703 0 0 1 46.911 18.226 A 3.439 3.439 0 0 1 46.9 17.95 A 4.239 4.239 0 0 1 47.911 15.199 A 5.601 5.601 0 0 1 48.175 14.9 A 7.303 7.303 0 0 1 49.694 13.688 Q 50.41 13.251 51.287 12.905 A 12.93 12.93 0 0 1 51.7 12.75 Q 53.95 11.95 56.8 11.95 A 12.582 12.582 0 0 1 59.1 12.146 Q 60.386 12.386 61.383 12.918 A 5.868 5.868 0 0 1 63 14.175 A 6.585 6.585 0 0 1 64.263 16.343 Q 64.951 18.223 64.951 20.967 A 22.331 22.331 0 0 1 64.95 21.2 L 64.95 24.925 Q 64.95 26.8 64.925 28.675 Q 64.9 30.55 64.9 32.45 Q 64.9 33.25 64.85 34.05 A 41.009 41.009 0 0 1 64.79 34.872 Q 64.752 35.334 64.7 35.85 Q 65.6 35.8 66.475 35.75 Q 67.35 35.7 68.25 35.65 L 68.25 37.75 Z M 60.65 25.5 Q 58.95 25.55 57.075 25.925 A 15.28 15.28 0 0 0 54.535 26.658 A 13.398 13.398 0 0 0 53.625 27.05 A 7.633 7.633 0 0 0 51.985 28.092 A 6.526 6.526 0 0 0 51.075 29.025 Q 50.1 30.25 50.15 32 A 5.12 5.12 0 0 0 50.326 33.114 Q 50.539 33.869 50.996 34.404 A 3.028 3.028 0 0 0 51.375 34.775 A 4.051 4.051 0 0 0 53.906 35.698 A 5.097 5.097 0 0 0 54.05 35.7 A 9.149 9.149 0 0 0 55.849 35.531 A 6.885 6.885 0 0 0 57.625 34.925 A 11.832 11.832 0 0 0 59.333 33.855 A 15.615 15.615 0 0 0 60.65 32.75 A 11.955 11.955 0 0 1 60.61 32.1 A 15.254 15.254 0 0 1 60.6 31.55 L 60.6 30.2 A 13.794 13.794 0 0 1 60.601 30.068 Q 60.604 29.763 60.618 28.967 A 655.069 655.069 0 0 1 60.625 28.6 Q 60.65 27.25 60.65 25.5 Z"
                        id="0"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 80.924 51.187 A 33.126 33.126 0 0 0 83.75 51.3 Q 85.95 51.3 88.125 50.75 A 16.722 16.722 0 0 0 88.927 50.526 A 14.509 14.509 0 0 0 92.075 49.15 A 10.217 10.217 0 0 0 92.508 48.879 A 8.682 8.682 0 0 0 94.925 46.525 Q 96 44.95 96 42.95 Q 96 41.938 95.793 41.083 A 5.269 5.269 0 0 0 94.525 38.675 Q 93.603 37.691 92.183 37.029 A 11.799 11.799 0 0 0 90.3 36.35 A 20.437 20.437 0 0 0 89.242 36.092 Q 86.836 35.572 83.7 35.45 A 98.434 98.434 0 0 1 83.388 35.436 Q 80.156 35.285 78.2 34.975 A 7.474 7.474 0 0 1 78.1 34.959 Q 77.098 34.786 76.506 34.395 A 1.807 1.807 0 0 1 75.75 33.45 A 2.37 2.37 0 0 1 75.712 33.296 Q 75.534 32.446 76.076 31.763 A 2.813 2.813 0 0 1 76.55 31.3 A 3.75 3.75 0 0 1 76.794 31.124 Q 77.434 30.701 78.267 30.525 A 6.204 6.204 0 0 1 79.55 30.4 Q 80.175 30.4 80.683 30.449 A 7.103 7.103 0 0 1 81.25 30.525 Q 81.655 30.597 82.143 30.628 A 12.175 12.175 0 0 0 82.9 30.65 Q 85.7 30.65 88.1 29.425 Q 90.5 28.2 91.975 26 A 8.613 8.613 0 0 0 92.786 24.487 A 9.05 9.05 0 0 0 93.45 21 Q 93.45 19.25 92.725 17.7 Q 92 16.15 90.8 15.05 Q 91.05 13.9 91.75 12.925 A 2.809 2.809 0 0 1 92.618 12.126 A 3.088 3.088 0 0 1 93.7 11.75 Q 93.85 12.5 94.4 13 A 1.85 1.85 0 0 0 95.142 13.413 A 2.367 2.367 0 0 0 95.8 13.5 A 3.357 3.357 0 0 0 96.019 13.493 Q 96.291 13.475 96.521 13.412 A 1.674 1.674 0 0 0 97.075 13.15 A 2.332 2.332 0 0 0 97.217 13.037 A 1.898 1.898 0 0 0 97.75 12.3 A 3.753 3.753 0 0 0 97.848 12.027 Q 97.897 11.87 97.922 11.73 A 1.564 1.564 0 0 0 97.95 11.45 A 3.281 3.281 0 0 0 97.889 10.801 A 2.249 2.249 0 0 0 97.275 9.625 A 2.019 2.019 0 0 0 96.826 9.288 Q 96.488 9.099 96.051 9.016 A 4.011 4.011 0 0 0 95.3 8.95 Q 94 8.95 92.8 9.575 Q 91.6 10.2 90.675 11.3 Q 89.75 12.4 89.25 13.8 Q 87.85 12.9 86.2 12.425 Q 84.55 11.95 82.9 11.95 Q 80.3 11.95 77.875 13.175 Q 75.45 14.4 73.9 16.625 A 8.362 8.362 0 0 0 72.762 18.962 A 9.782 9.782 0 0 0 72.35 21.85 A 9.397 9.397 0 0 0 72.371 22.49 A 7.538 7.538 0 0 0 73.725 26.4 A 8.958 8.958 0 0 0 74.675 27.536 A 9.63 9.63 0 0 0 77.4 29.45 A 7.481 7.481 0 0 0 77.061 29.512 A 5.935 5.935 0 0 0 73.8 31.325 A 6.224 6.224 0 0 0 73.122 32.202 A 4.414 4.414 0 0 0 72.4 34.6 A 4.437 4.437 0 0 0 72.469 35.401 A 3.094 3.094 0 0 0 73.325 37.075 Q 73.874 37.624 74.661 38.041 A 8.302 8.302 0 0 0 75.85 38.55 A 6.126 6.126 0 0 0 75.674 38.624 Q 74.756 39.025 73.775 39.8 Q 72.7 40.65 71.975 41.825 A 4.697 4.697 0 0 0 71.449 43.03 A 5.61 5.61 0 0 0 71.25 44.55 A 4.515 4.515 0 0 0 71.702 46.499 A 6.275 6.275 0 0 0 72.5 47.75 A 6.038 6.038 0 0 0 73.436 48.672 Q 74.051 49.163 74.857 49.585 A 13.521 13.521 0 0 0 76.5 50.3 A 13.929 13.929 0 0 0 78.519 50.854 Q 79.625 51.076 80.924 51.187 Z M 83.7 49.35 A 18.756 18.756 0 0 0 86.202 49.194 Q 87.476 49.022 88.525 48.661 A 8.125 8.125 0 0 0 90.4 47.75 A 7.29 7.29 0 0 0 91.56 46.806 Q 92.8 45.545 92.8 44 A 4.363 4.363 0 0 0 92.652 42.832 A 3.095 3.095 0 0 0 91.55 41.175 A 5.832 5.832 0 0 0 90.232 40.415 Q 89.326 40.03 88.15 39.825 Q 86 39.45 83.2 39.4 Q 81.85 39.35 80.55 39.275 A 23.706 23.706 0 0 1 78.352 39.048 A 21.44 21.44 0 0 1 78.05 39 A 6.866 6.866 0 0 0 76.492 40.408 A 6.232 6.232 0 0 0 75.95 41.2 Q 75.2 42.5 75.2 43.95 A 4.264 4.264 0 0 0 76.735 47.288 A 6.361 6.361 0 0 0 77.525 47.875 Q 79.433 49.085 82.367 49.303 A 18.066 18.066 0 0 0 83.7 49.35 Z M 83.05 28.85 A 6.263 6.263 0 0 0 84.45 28.701 A 4.484 4.484 0 0 0 86.125 27.95 A 5.374 5.374 0 0 0 87.759 25.98 A 6.631 6.631 0 0 0 87.975 25.5 Q 88.6 23.95 88.6 22 Q 88.6 19.8 87.95 17.9 A 8.2 8.2 0 0 0 87.203 16.284 A 6.393 6.393 0 0 0 86.025 14.85 Q 84.75 13.7 82.8 13.7 A 5.743 5.743 0 0 0 80.947 13.985 A 4.691 4.691 0 0 0 78.625 15.725 A 7.547 7.547 0 0 0 77.324 18.803 A 10.41 10.41 0 0 0 77.15 20.75 A 13.958 13.958 0 0 0 77.304 22.873 A 10.182 10.182 0 0 0 77.85 24.975 A 7.386 7.386 0 0 0 78.644 26.51 A 5.766 5.766 0 0 0 79.875 27.825 A 4.892 4.892 0 0 0 82.485 28.825 A 6.265 6.265 0 0 0 83.05 28.85 Z"
                        id="1"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 121.7 37.75 L 114.55 37.75 A 20.263 20.263 0 0 1 114.452 37.141 Q 114.403 36.808 114.373 36.512 A 11.042 11.042 0 0 1 114.35 36.25 Q 114.3 35.6 114.2 34.9 A 14.446 14.446 0 0 1 111.644 36.951 A 12.812 12.812 0 0 1 110.525 37.575 Q 108.55 38.55 106.35 38.55 A 13.307 13.307 0 0 1 104.266 38.398 Q 102.001 38.038 100.7 36.825 A 5.727 5.727 0 0 1 99.217 34.673 A 5.756 5.756 0 0 1 98.85 32.6 Q 98.85 30.3 100.275 28.625 Q 101.7 26.95 103.975 25.875 A 20.525 20.525 0 0 1 107.936 24.491 A 23.411 23.411 0 0 1 108.925 24.275 A 25.245 25.245 0 0 1 112.652 23.819 Q 113.383 23.786 114.1 23.8 L 114.1 20.7 A 18.218 18.218 0 0 0 113.958 18.388 A 15.647 15.647 0 0 0 113.8 17.4 A 5.301 5.301 0 0 0 113.31 15.958 A 4.464 4.464 0 0 0 112.5 14.85 A 3.084 3.084 0 0 0 111.443 14.175 Q 110.572 13.829 109.3 13.8 Q 108.226 13.763 107.112 14.082 A 8.671 8.671 0 0 0 106.325 14.35 Q 104.8 14.95 104.1 16.4 Q 104.5 16.8 104.625 17.325 A 4.853 4.853 0 0 1 104.719 17.831 A 3.688 3.688 0 0 1 104.75 18.3 A 1.768 1.768 0 0 1 104.674 18.795 Q 104.555 19.203 104.25 19.675 A 1.507 1.507 0 0 1 103.352 20.316 Q 103.04 20.403 102.649 20.403 A 3.723 3.723 0 0 1 102.5 20.4 A 2.422 2.422 0 0 1 101.837 20.314 A 1.744 1.744 0 0 1 100.9 19.675 A 2.703 2.703 0 0 1 100.361 18.226 A 3.439 3.439 0 0 1 100.35 17.95 A 4.239 4.239 0 0 1 101.361 15.199 A 5.601 5.601 0 0 1 101.625 14.9 A 7.303 7.303 0 0 1 103.144 13.688 Q 103.86 13.251 104.737 12.905 A 12.93 12.93 0 0 1 105.15 12.75 Q 107.4 11.95 110.25 11.95 A 12.582 12.582 0 0 1 112.55 12.146 Q 113.836 12.386 114.833 12.918 A 5.868 5.868 0 0 1 116.45 14.175 A 6.585 6.585 0 0 1 117.713 16.343 Q 118.401 18.223 118.401 20.967 A 22.331 22.331 0 0 1 118.4 21.2 L 118.4 24.925 Q 118.4 26.8 118.375 28.675 Q 118.35 30.55 118.35 32.45 Q 118.35 33.25 118.3 34.05 A 41.009 41.009 0 0 1 118.24 34.872 Q 118.202 35.334 118.15 35.85 Q 119.05 35.8 119.925 35.75 Q 120.8 35.7 121.7 35.65 L 121.7 37.75 Z M 114.1 25.5 Q 112.4 25.55 110.525 25.925 A 15.28 15.28 0 0 0 107.985 26.658 A 13.398 13.398 0 0 0 107.075 27.05 A 7.633 7.633 0 0 0 105.435 28.092 A 6.526 6.526 0 0 0 104.525 29.025 Q 103.55 30.25 103.6 32 A 5.12 5.12 0 0 0 103.776 33.114 Q 103.989 33.869 104.446 34.404 A 3.028 3.028 0 0 0 104.825 34.775 A 4.051 4.051 0 0 0 107.356 35.698 A 5.097 5.097 0 0 0 107.5 35.7 A 9.149 9.149 0 0 0 109.299 35.531 A 6.885 6.885 0 0 0 111.075 34.925 A 11.832 11.832 0 0 0 112.783 33.855 A 15.615 15.615 0 0 0 114.1 32.75 A 11.955 11.955 0 0 1 114.06 32.1 A 15.254 15.254 0 0 1 114.05 31.55 L 114.05 30.2 A 13.794 13.794 0 0 1 114.051 30.068 Q 114.054 29.763 114.068 28.967 A 655.069 655.069 0 0 1 114.075 28.6 Q 114.1 27.25 114.1 25.5 Z"
                        id="2"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 124.65 37.75 L 124.65 36.25 Q 126.2 36.25 126.8 35.475 A 2.963 2.963 0 0 0 127.241 34.649 Q 127.445 34.077 127.5 33.325 Q 127.586 32.143 127.598 30.648 A 61.621 61.621 0 0 0 127.6 30.15 L 127.6 6.5 A 46.089 46.089 0 0 1 127.613 5.365 A 39.749 39.749 0 0 1 127.625 4.975 A 19.772 19.772 0 0 1 127.654 4.393 Q 127.688 3.875 127.75 3.25 Q 126.85 3.3 125.975 3.35 Q 125.1 3.4 124.2 3.45 L 124.2 1.35 Q 126.013 1.35 127.164 1.214 A 10.525 10.525 0 0 0 127.625 1.15 A 12.728 12.728 0 0 0 128.299 1.022 Q 129.036 0.861 129.475 0.65 Q 130.1 0.35 130.45 0 L 131.9 0 L 131.95 32.45 A 34.365 34.365 0 0 1 131.94 33.282 Q 131.931 33.662 131.913 34.003 A 19.884 19.884 0 0 1 131.9 34.225 Q 131.85 35 131.7 35.85 Q 132.5 35.8 133.275 35.775 Q 134.05 35.75 134.85 35.7 L 134.85 37.75 L 124.65 37.75 Z"
                        id="3"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 138.75 37.75 L 138.75 36.25 Q 140.3 36.25 140.9 35.475 A 2.963 2.963 0 0 0 141.341 34.649 Q 141.545 34.077 141.6 33.325 Q 141.686 32.143 141.698 30.648 A 61.621 61.621 0 0 0 141.7 30.15 L 141.7 18.75 A 23.036 23.036 0 0 1 141.728 17.604 A 19.932 19.932 0 0 1 141.75 17.225 Q 141.784 16.727 141.842 16.098 A 78.963 78.963 0 0 1 141.9 15.5 Q 141 15.55 140.125 15.6 Q 139.25 15.65 138.35 15.7 L 138.35 13.6 Q 140.163 13.6 141.297 13.464 A 9.994 9.994 0 0 0 141.75 13.4 A 12.435 12.435 0 0 0 142.412 13.272 Q 143.053 13.129 143.471 12.948 A 3.078 3.078 0 0 0 143.575 12.9 Q 144.2 12.6 144.55 12.25 L 146 12.25 L 146 32.45 A 68.717 68.717 0 0 1 145.995 33.282 Q 145.989 33.789 145.975 34.225 A 10.931 10.931 0 0 1 145.882 35.326 A 12.856 12.856 0 0 1 145.8 35.85 Q 146.6 35.8 147.375 35.775 Q 148.15 35.75 148.95 35.7 L 148.95 37.75 L 138.75 37.75 Z M 141.98 6.672 A 2.396 2.396 0 0 0 143.6 7.3 A 2.514 2.514 0 0 0 144.736 7.038 A 2.908 2.908 0 0 0 145.525 6.45 A 2.854 2.854 0 0 0 146.145 5.496 A 3.12 3.12 0 0 0 146.35 4.35 Q 146.35 3.1 145.575 2.225 A 3.074 3.074 0 0 0 145.476 2.118 A 2.452 2.452 0 0 0 143.65 1.35 A 2.332 2.332 0 0 0 142.447 1.679 A 3.063 3.063 0 0 0 141.775 2.225 Q 140.95 3.1 140.95 4.35 Q 140.95 5.6 141.75 6.45 A 3.296 3.296 0 0 0 141.98 6.672 Z"
                        id="4"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />

                    <motion.path
                        d="M 179.25 37.75 L 166.5 37.75 L 166.5 36.1 A 7.764 7.764 0 0 0 167.375 36.008 Q 168.308 35.851 168.833 35.465 A 1.778 1.778 0 0 0 169.1 35.225 A 2.791 2.791 0 0 0 169.673 34.215 Q 169.804 33.82 169.854 33.346 A 5.429 5.429 0 0 0 169.875 33.075 Q 169.945 31.791 169.95 30.181 A 79.919 79.919 0 0 0 169.95 29.95 L 169.95 8.35 Q 169.95 7.35 170 6.425 Q 170.05 5.5 170.1 4.75 L 168.3 4.85 L 166.5 4.95 L 166.5 2.75 L 189.7 2.75 L 189.95 11.5 L 188.3 11.5 A 14.705 14.705 0 0 0 188.216 9.874 Q 188.029 8.192 187.42 7.141 A 4.234 4.234 0 0 0 187.35 7.025 Q 186.4 5.5 184.85 4.975 Q 183.3 4.45 181.4 4.5 L 177.75 4.6 Q 176.091 4.645 175.357 5.313 A 1.749 1.749 0 0 0 175.2 5.475 Q 174.5 6.3 174.4 7.65 Q 174.3 9 174.3 10.75 L 174.3 19.35 L 183 19.4 L 182.65 15.05 L 184.85 15.05 L 184.85 25.6 L 183.25 25.6 A 12.951 12.951 0 0 0 183.211 24.556 Q 183.094 23.113 182.625 22.4 A 2.508 2.508 0 0 0 181.236 21.373 A 3.592 3.592 0 0 0 180.7 21.25 A 10.429 10.429 0 0 0 179.905 21.161 Q 178.809 21.078 177.3 21.15 L 174.3 21.3 L 174.3 31.8 A 124.094 124.094 0 0 1 174.296 32.76 Q 174.291 33.516 174.275 34.125 A 18.91 18.91 0 0 1 174.247 34.797 Q 174.213 35.339 174.15 35.75 Q 175 35.7 175.85 35.675 Q 176.7 35.65 177.55 35.6 Q 178.4 35.55 179.25 35.55 L 179.25 37.75 Z"
                        id="7"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 213.7 37.75 L 206.55 37.75 A 20.263 20.263 0 0 1 206.452 37.141 Q 206.403 36.808 206.373 36.512 A 11.042 11.042 0 0 1 206.35 36.25 Q 206.3 35.6 206.2 34.9 A 14.446 14.446 0 0 1 203.644 36.951 A 12.812 12.812 0 0 1 202.525 37.575 Q 200.55 38.55 198.35 38.55 A 13.307 13.307 0 0 1 196.266 38.398 Q 194.001 38.038 192.7 36.825 A 5.727 5.727 0 0 1 191.217 34.673 A 5.756 5.756 0 0 1 190.85 32.6 Q 190.85 30.3 192.275 28.625 Q 193.7 26.95 195.975 25.875 A 20.525 20.525 0 0 1 199.936 24.491 A 23.411 23.411 0 0 1 200.925 24.275 A 25.245 25.245 0 0 1 204.652 23.819 Q 205.383 23.786 206.1 23.8 L 206.1 20.7 A 18.218 18.218 0 0 0 205.958 18.388 A 15.647 15.647 0 0 0 205.8 17.4 A 5.301 5.301 0 0 0 205.31 15.958 A 4.464 4.464 0 0 0 204.5 14.85 A 3.084 3.084 0 0 0 203.443 14.175 Q 202.572 13.829 201.3 13.8 Q 200.226 13.763 199.112 14.082 A 8.671 8.671 0 0 0 198.325 14.35 Q 196.8 14.95 196.1 16.4 Q 196.5 16.8 196.625 17.325 A 4.853 4.853 0 0 1 196.719 17.831 A 3.688 3.688 0 0 1 196.75 18.3 A 1.768 1.768 0 0 1 196.674 18.795 Q 196.555 19.203 196.25 19.675 A 1.507 1.507 0 0 1 195.352 20.316 Q 195.04 20.403 194.649 20.403 A 3.723 3.723 0 0 1 194.5 20.4 A 2.422 2.422 0 0 1 193.837 20.314 A 1.744 1.744 0 0 1 192.9 19.675 A 2.703 2.703 0 0 1 192.361 18.226 A 3.439 3.439 0 0 1 192.35 17.95 A 4.239 4.239 0 0 1 193.361 15.199 A 5.601 5.601 0 0 1 193.625 14.9 A 7.303 7.303 0 0 1 195.144 13.688 Q 195.86 13.251 196.737 12.905 A 12.93 12.93 0 0 1 197.15 12.75 Q 199.4 11.95 202.25 11.95 A 12.582 12.582 0 0 1 204.55 12.146 Q 205.836 12.386 206.833 12.918 A 5.868 5.868 0 0 1 208.45 14.175 A 6.585 6.585 0 0 1 209.713 16.343 Q 210.401 18.223 210.401 20.967 A 22.331 22.331 0 0 1 210.4 21.2 L 210.4 24.925 Q 210.4 26.8 210.375 28.675 Q 210.35 30.55 210.35 32.45 Q 210.35 33.25 210.3 34.05 A 41.009 41.009 0 0 1 210.24 34.872 Q 210.202 35.334 210.15 35.85 Q 211.05 35.8 211.925 35.75 Q 212.8 35.7 213.7 35.65 L 213.7 37.75 Z M 206.1 25.5 Q 204.4 25.55 202.525 25.925 A 15.28 15.28 0 0 0 199.985 26.658 A 13.398 13.398 0 0 0 199.075 27.05 A 7.633 7.633 0 0 0 197.435 28.092 A 6.526 6.526 0 0 0 196.525 29.025 Q 195.55 30.25 195.6 32 A 5.12 5.12 0 0 0 195.776 33.114 Q 195.989 33.869 196.446 34.404 A 3.028 3.028 0 0 0 196.825 34.775 A 4.051 4.051 0 0 0 199.356 35.698 A 5.097 5.097 0 0 0 199.5 35.7 A 9.149 9.149 0 0 0 201.299 35.531 A 6.885 6.885 0 0 0 203.075 34.925 A 11.832 11.832 0 0 0 204.783 33.855 A 15.615 15.615 0 0 0 206.1 32.75 A 11.955 11.955 0 0 1 206.06 32.1 A 15.254 15.254 0 0 1 206.05 31.55 L 206.05 30.2 A 13.794 13.794 0 0 1 206.051 30.068 Q 206.054 29.763 206.068 28.967 A 655.069 655.069 0 0 1 206.075 28.6 Q 206.1 27.25 206.1 25.5 Z"
                        id="8"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 218.65 37.75 L 218.75 6.5 A 46.089 46.089 0 0 1 218.763 5.365 A 39.749 39.749 0 0 1 218.775 4.975 A 19.772 19.772 0 0 1 218.804 4.393 Q 218.838 3.875 218.9 3.25 Q 218 3.3 217.125 3.35 Q 216.25 3.4 215.35 3.45 L 215.35 1.35 Q 217.163 1.35 218.314 1.214 A 10.525 10.525 0 0 0 218.775 1.15 A 12.728 12.728 0 0 0 219.449 1.022 Q 220.186 0.861 220.625 0.65 Q 221.25 0.35 221.6 0 L 223.05 0 L 223.05 14.9 Q 224.45 13.5 226.375 12.725 A 10.809 10.809 0 0 1 229.577 11.99 A 12.942 12.942 0 0 1 230.6 11.95 A 11.342 11.342 0 0 1 234.683 12.674 A 10.641 10.641 0 0 1 236.375 13.5 A 10.845 10.845 0 0 1 240.209 17.463 A 13.022 13.022 0 0 1 240.45 17.9 Q 241.95 20.75 241.95 24.65 A 16.442 16.442 0 0 1 241.544 28.387 A 12.787 12.787 0 0 1 240.1 32.025 A 13.602 13.602 0 0 1 236.955 35.715 A 12.727 12.727 0 0 1 235.3 36.85 Q 232.35 38.55 228.95 38.55 Q 227.301 38.55 225.347 37.962 A 17.725 17.725 0 0 1 225.225 37.925 A 7.573 7.573 0 0 1 222.453 36.35 A 9.644 9.644 0 0 1 221.6 35.5 L 220.4 37.75 L 218.65 37.75 Z M 223.05 17.25 L 223.05 29.9 Q 223.05 32.55 223.9 33.975 Q 224.75 35.4 226.1 35.95 Q 227.45 36.5 228.95 36.5 Q 231.35 36.5 233.1 35.15 Q 234.85 33.8 235.825 31.425 A 12.6 12.6 0 0 0 236.6 28.596 A 17.293 17.293 0 0 0 236.8 25.9 A 23.086 23.086 0 0 0 236.625 22.988 Q 236.431 21.462 236.021 20.147 A 13.969 13.969 0 0 0 235.95 19.925 A 10.686 10.686 0 0 0 235.044 17.882 A 7.903 7.903 0 0 0 233.4 15.875 A 5.952 5.952 0 0 0 230.344 14.492 A 8.102 8.102 0 0 0 229.1 14.4 A 7.373 7.373 0 0 0 226.333 14.952 A 8.777 8.777 0 0 0 225.825 15.175 Q 224.2 15.95 223.05 17.25 Z"
                        id="9"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 246.25 37.75 L 246.25 36.25 Q 247.8 36.25 248.4 35.475 A 2.963 2.963 0 0 0 248.841 34.649 Q 249.045 34.077 249.1 33.325 Q 249.186 32.143 249.198 30.648 A 61.621 61.621 0 0 0 249.2 30.15 L 249.2 18.75 Q 249.2 17.95 249.225 17.15 A 11.371 11.371 0 0 1 249.356 15.764 A 12.775 12.775 0 0 1 249.4 15.5 Q 248.5 15.55 247.625 15.575 Q 246.75 15.6 245.85 15.65 L 245.85 13.6 L 247.4 13.6 A 17.163 17.163 0 0 0 248.378 13.574 Q 249.291 13.522 249.872 13.363 A 2.602 2.602 0 0 0 250.375 13.175 A 7.624 7.624 0 0 0 251.088 12.76 Q 251.458 12.516 251.75 12.25 L 253.2 12.25 A 17.264 17.264 0 0 1 253.268 12.903 Q 253.293 13.197 253.314 13.527 A 36.029 36.029 0 0 1 253.35 14.225 Q 253.4 15.4 253.45 17.2 A 9.881 9.881 0 0 1 254.435 15.848 A 13.269 13.269 0 0 1 255.5 14.75 Q 256.8 13.55 258.425 12.75 Q 260.05 11.95 261.85 11.95 A 4.411 4.411 0 0 1 263.277 12.174 A 3.919 3.919 0 0 1 264.3 12.7 A 2.393 2.393 0 0 1 265.232 14.093 Q 265.339 14.503 265.349 14.997 A 5.053 5.053 0 0 1 265.35 15.1 A 1.633 1.633 0 0 1 265.318 15.41 Q 265.26 15.707 265.1 16.075 A 2.453 2.453 0 0 1 264.511 16.896 A 3.009 3.009 0 0 1 264.3 17.075 Q 263.75 17.5 262.85 17.5 A 2.475 2.475 0 0 1 261.96 17.302 A 2.226 2.226 0 0 1 261.1 16.625 Q 260.458 15.81 260.597 14.726 A 3.238 3.238 0 0 1 260.6 14.7 A 4.178 4.178 0 0 0 260.433 14.697 Q 259.262 14.697 258.025 15.35 Q 256.7 16.05 255.55 17.275 A 13.174 13.174 0 0 0 254.087 19.16 A 15.703 15.703 0 0 0 253.5 20.15 L 253.55 32.45 A 68.717 68.717 0 0 1 253.545 33.282 Q 253.539 33.789 253.525 34.225 A 10.931 10.931 0 0 1 253.432 35.326 A 12.856 12.856 0 0 1 253.35 35.85 Q 254.15 35.8 254.925 35.775 Q 255.7 35.75 256.5 35.7 L 256.5 37.75 L 246.25 37.75 Z"
                        id="10"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                    <motion.path
                        d="M 267.9 37.75 L 267.9 36.25 Q 269.45 36.25 270.05 35.475 A 2.963 2.963 0 0 0 270.491 34.649 Q 270.695 34.077 270.75 33.325 Q 270.836 32.143 270.848 30.648 A 61.621 61.621 0 0 0 270.85 30.15 L 270.85 18.75 A 23.036 23.036 0 0 1 270.878 17.604 A 19.932 19.932 0 0 1 270.9 17.225 Q 270.934 16.727 270.992 16.098 A 78.963 78.963 0 0 1 271.05 15.5 Q 270.15 15.55 269.275 15.6 Q 268.4 15.65 267.5 15.7 L 267.5 13.6 Q 269.313 13.6 270.447 13.464 A 9.994 9.994 0 0 0 270.9 13.4 A 12.435 12.435 0 0 0 271.562 13.272 Q 272.203 13.129 272.621 12.948 A 3.078 3.078 0 0 0 272.725 12.9 Q 273.35 12.6 273.7 12.25 L 275.15 12.25 L 275.15 32.45 A 68.717 68.717 0 0 1 275.145 33.282 Q 275.139 33.789 275.125 34.225 A 10.931 10.931 0 0 1 275.032 35.326 A 12.856 12.856 0 0 1 274.95 35.85 Q 275.75 35.8 276.525 35.775 Q 277.3 35.75 278.1 35.7 L 278.1 37.75 L 267.9 37.75 Z M 271.13 6.672 A 2.396 2.396 0 0 0 272.75 7.3 A 2.514 2.514 0 0 0 273.886 7.038 A 2.908 2.908 0 0 0 274.675 6.45 A 2.854 2.854 0 0 0 275.295 5.496 A 3.12 3.12 0 0 0 275.5 4.35 Q 275.5 3.1 274.725 2.225 A 3.074 3.074 0 0 0 274.626 2.118 A 2.452 2.452 0 0 0 272.8 1.35 A 2.332 2.332 0 0 0 271.597 1.679 A 3.063 3.063 0 0 0 270.925 2.225 Q 270.1 3.1 270.1 4.35 Q 270.1 5.6 270.9 6.45 A 3.296 3.296 0 0 0 271.13 6.672 Z"
                        id="11"
                        vectorEffect="non-scaling-stroke"
                        variants={letterAnimationVariant}
                        transition={transition}
                    />
                </motion.g>
            </motion.svg>
        </div>
    );
};

export default AnimatedSvgName;
