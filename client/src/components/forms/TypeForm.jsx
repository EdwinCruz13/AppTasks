import { React, useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import components
import { Loading } from "../../components/loading/Loading";

//import context
import { TaskTypeContext } from "../../context/TaskTypeContext";
import { ModalContext } from "../../context/ModalContext";

import brokenImage from "../../assets/broken-image.png";

export const TypeForm = ({ title }) => {
    const navigate = useNavigate();
  const { selectedType, loading, SaveType, UpdateType } =
    useContext(TaskTypeContext);
  const { closeModal } = useContext(ModalContext);

  const [data, setData] = useState({ _id: "", nType: "", urlImage: "" });
  const image = useRef();

  useEffect(() => {
    //if its new
    if (!selectedType) {
      setbrokenImage();
      setData({ _id: "", nType: "", urlImage: "" });
    }

    //if its a updating
    if (selectedType) {
      image.current.src = selectedType.urlImage ? selectedType.urlImage : "";
      setData({
        _id: selectedType._id,
        nType: selectedType.nType,
        urlImage: selectedType.urlImage ? selectedType.urlImage : "",
      });
    }
  }, [selectedType]);

  /**
   * for any change on the inputs
   * @param {*} e
   */
  const handleInputChanged = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    if (e.target.name === "urlImage") {
      image.current.src = e.target.value;
    }
  };

  const setbrokenImage = () => {
    image.current.src = brokenImage;
  };

  /**
   * save the type
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    //update a type
    if (selectedType) {

      let save = await UpdateType(data);
      if (save === "OK") refreshPage();
      else alert(save);
    }
    //new type
    if (!selectedType) {
      let save = await SaveType(data);
      if (save === "OK") refreshPage();
    }
  };

  /**
   * refresh the page
   */
  const refreshPage = () => {
    navigate(0);
  };

  return (
    <>
      <form className="form form-task" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2 className="form-title">{title}</h2>

          <span className="form-description">
            Manage the type of all your task properly
          </span>
        </div>

        <div className="form-section">
          <section className="form-column">
            <div className="form-group">
              <label htmlFor="nType">nType</label>
              <input
                type="text"
                name="nType"
                id="nType"
                className="form-control"
                onChange={handleInputChanged}
                value={data.nType}
              />
              <div className="invalid-feedback">value is required</div>
            </div>

            <div className="form-group">
              <label htmlFor="nType">urlImage</label>
              <input
                type="text"
                name="urlImage"
                id="urlImage"
                className="form-control"
                onChange={handleInputChanged}
                value={data.urlImage}
              />
              <div className="invalid-feedback">value is required</div>
            </div>
          </section>

          <section className="form-column">
            <div className="form-group" style={{ marginTop: "-10px" }}>
              <label htmlFor="nType">Image</label>
              {!loading ? (
                <img
                  className="inputImage"
                  alt="image-tasktypenew"
                  onError={setbrokenImage}
                  ref={image}
                ></img>
              ) : (
                <Loading />
              )}
            </div>
          </section>
        </div>

        <hr />
        <div className="form-section form-submit-section">
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={closeModal}
          >
            Close
          </button>
          <button type="submit" className="btn btn-lg btn-primary">
            Save
          </button>
        </div>

        <hr />
      </form>
    </>
  );
};
