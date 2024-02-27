import React from 'react'

import PropTypes from 'prop-types'

const Location = (props) => {
  return (
    <>
      <div className="location-item">
        <img
          alt="image"
          src={props.background}
          className="location-background"
        />
        <div className="location-content">
          <span className="location-location">{props.location}</span>
        </div>
      </div>
      <style jsx>
        {`
          .location-item {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .location-background {
            flex: 1;
            height: 400px;
            object-fit: cover;
          }
          .location-content {
            top: 0px;
            flex: 1;
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .location-location {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

Location.defaultProps = {
  background: '/Destinations/destination-1-400h.png',
  location: 'Tokyo, Japan',
}

Location.propTypes = {
  background: PropTypes.string,
  location: PropTypes.string,
}

export default Location
