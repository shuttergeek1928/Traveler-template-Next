import React from 'react'

import PropTypes from 'prop-types'

const Guide = (props) => {
  return (
    <>
      <div className={`guide-guide ${props.rootClassName} `}>
        <img alt="image" src={props.portrait} className="guide-portrait" />
        <div className="guide-details">
          <h3 className="guide-name">{props.name}</h3>
          <span className="guide-location">{props.location}</span>
        </div>
      </div>
      <style jsx>
        {`
          .guide-guide {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .guide-portrait {
            flex: 1;
            width: 100%;
            object-fit: cover;
          }
          .guide-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .guide-name {
            color: #352b2a;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .guide-location {
            font-style: normal;
            font-weight: 500;
          }
          .guide-root-class-name {
            flex: 0 0 auto;
          }
          .guide-root-class-name1 {
            flex: 0 0 auto;
          }
          .guide-root-class-name2 {
            flex: 0 0 auto;
          }
          @media (max-width: 767px) {
            .guide-guide {
              gap: var(--dl-space-space-unit);
            }
            .guide-details {
              gap: 4px;
            }
          }
        `}
      </style>
    </>
  )
}

Guide.defaultProps = {
  name: 'Miura Avaron',
  rootClassName: '',
  portrait: '/Guides/guide-1.png',
  location: 'Tokyo, Japan',
}

Guide.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  portrait: PropTypes.string,
  location: PropTypes.string,
}

export default Guide
