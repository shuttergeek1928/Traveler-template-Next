import React from 'react'

import PropTypes from 'prop-types'

const Feature = (props) => {
  return (
    <>
      <div className="feature-feature">
        <div className="feature-heading">
          <img alt="image" src={props.icon} className="feature-icon" />
          <h3 className="feature-header">{props.header}</h3>
        </div>
        <p className="feature-description">{props.description}</p>
      </div>
      <style jsx>
        {`
          .feature-feature {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
          }
          .feature-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .feature-icon {
            height: 22px;
            object-fit: cover;
          }
          .feature-header {
            color: #ffffff;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
          }
          .feature-description {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-family: Karla;
            line-height: 27px;
          }
          @media (max-width: 767px) {
            .feature-feature {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Feature.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  icon: '/Icons/thumbs-up.svg',
  header: 'Hand Picked Guides',
}

Feature.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  header: PropTypes.string,
}

export default Feature
