import React, { ReactElement } from 'react'

interface Props extends Icontainer{
  
}

function logo({}: Props): ReactElement {
  return (
    <svg
      width="93px" height="34px">
      <path fillRule="evenodd" fill="rgb(255, 179, 1)"
        d="M37.751,0.102 L26.956,0.106 L26.709,20.509 L26.956,20.324 L10.431,0.102 L0.011,0.102 L0.011,33.821 L10.773,33.821 L10.773,14.930 L11.182,14.930 L27.332,33.821 L37.751,33.821 L37.751,0.102 Z" />
      <path fillRule="evenodd" fill="rgb(201, 207, 5)"
        d="M88.122,2.875 C84.888,1.038 79.039,0.118 73.272,0.118 L55.268,0.118 L55.268,33.792 L64.580,33.792 L64.580,27.338 L73.272,27.338 C79.039,27.338 84.888,26.421 88.122,24.580 C91.352,22.744 92.970,17.552 92.970,14.402 C92.970,11.251 91.352,4.715 88.122,2.875 ZM81.891,16.826 C81.031,17.584 76.697,18.204 72.542,18.204 L64.580,18.204 L64.580,9.251 L72.542,9.251 C76.697,9.251 80.634,9.442 81.891,10.629 C82.670,11.367 83.559,12.263 83.567,13.585 C83.576,15.194 82.564,16.235 81.891,16.826 Z" />
      <path fillRule="evenodd" opacity="0.839" fill="rgb(99, 172, 225)"
        d="M53.413,17.418 L64.382,0.098 L53.879,0.098 L45.792,12.324 L39.052,0.098 L27.201,0.098 L38.169,17.418 L26.922,33.817 L38.774,33.817 L45.792,22.710 L54.158,33.817 L64.662,33.817 L53.413,17.418 Z" />
    </svg>
  )
}

export default logo