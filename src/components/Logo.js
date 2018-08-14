import React from 'react';

const Logo = () => (
  <div>
    <svg style={{ height: 0, width: 0 }}>
      <defs>
        <linearGradient id='logoGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='5%' stopColor='#2396A7' />
          <stop offset='50%' stopColor='#004660' />
          <stop offset='95%' stopColor='#00256C' />
        </linearGradient>
        <path id='logoM' d='M 0.11147003,165.69602 H 15.11147 v -87 c 0,-14.1895 -2.4636,-30.278 5.0934,-43 10.802,-18.1851 33.037,-24.8307 52.9066,-19.2539 6.1551,1.7276 12.888,8.2781 19,8.5572 5.406,0.2467 11.957,-5.9164 17,-7.8357 9.988,-3.8013 22.937,-3.404 33,-0.108 13.712,4.4912 24.326,16.5575 27.331,30.6404 2.67,12.5163 0.669,27.2245 0.669,40 v 78 h 15 v -89 c 0,-17.5182 1.489,-35.494 -8.229,-51 -14.165,-22.6015004 -40.781,-28.3008004 -65.771,-24.69980039 -6.137,0.88429999 -13.004,6.07179999 -19,5.67199999 -6.281,-0.4188 -12.4969,-4.8357 -19,-5.68279999 C 48.27917,-2.2495804 22.23467,3.0946196 8.17707,25.69602 c -9.7527,15.6801 -8.06559997,33.3222 -8.06559997,51 v 89 m 18.99999997,0 h 15 v -93 c 0,-13.5572 -2.4749,-27.8114 11,-35.9946 14.0062,-8.5059 35.8984,-1.5213 39.481,14.9946 2.558,11.7892 0.519,25.9515 0.519,38 v 76 h 15 v -93 c 0,-13.5572 -2.475,-27.8114 11,-35.9946 13.382,-8.1268 35.738,-2.1544 39.471,13.9946 2.697,11.6689 0.529,26.0395 0.529,38 v 77 h 15 v -85 c 0,-14.0964 2.355,-30.0528 -4.274,-43 -11.034,-21.5524 -56.919,-29.2491004 -68.726,-4 -18.6809,-20.4629 -60.7607,-22.3363 -71.9066,8 -4.5253,12.3166 -2.0934,28.0575 -2.0934,41 v 83 m 19,0 h 14 v -87 c 0,-6.6891 -3.4999,-25.2645 6.0154,-25.9367 12.0019,-0.848 7.9846,18.0455 7.9846,25.9367 v 87 h 15 v -76 c 0,-12.1651 1.849,-26.0442 -0.4684,-38 -2.8333,-14.6149 -24.2456,-18.5961 -35.4915,-11.0301 -10.1916,6.8568 -7.0401,22.453 -7.0401,33.0301 v 92 m 66,0 h 15 v -113 h 13 v 113 h 15 v -76 c 0,-12.1842 1.818,-26.0021 -0.329,-38 -2.702,-15.094 -25.569,-18.7589 -36.577,-10.3511 -9.304,7.1063 -6.094,23.0917 -6.094,33.3511 z'
        />
      </defs>
    </svg>
    <svg id='logo' viewBox='0 0 350 312'>
      <use className='logoDraw' href="#logoM" />
    </svg>
  </div>
);

export default Logo;
