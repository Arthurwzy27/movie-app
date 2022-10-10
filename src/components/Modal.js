import React from "react";
import ReactDOM from "react-dom";

import './assets/Modal.css';

const Modal = ({ isShowing, hide, data }) =>
  isShowing?
    ReactDOM.createPortal(
      <>
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h4>Movie details</h4>
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="detail-movie-img">
                  <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.original_title} />
                </div>
                <div className="movie-detail-detail">
                  <span>{data?.original_title}</span>
                  <p>{data?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 1040;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .modal-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1050;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            outline: 0;
            display: flex;
            align-items: center;
          }

          .modal-body {
            display: flex;

          }

          .modal {
            z-index: 100;
            background-color: rgba(0, 0, 0, 0.7);
            position: relative;
            margin: auto;
            border-radius: 10px;
            max-width: 80vw;
            width: 80%;
            padding: 1rem;
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .modal-close-button {
            font-size: 1.4rem;
            font-weight: 700;
            color: white;
            cursor: pointer;
            border: none;
            background: transparent;
          }
        `}</style>
      </>,
      document.body
    )
  : null;

export default Modal;
