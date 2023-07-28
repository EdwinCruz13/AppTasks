import { React, useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//import components
import FileInput from "../../components/input/input";

//import context
import { UserContext } from "../../context/UserContext";
import { DepartmentContext } from "../../context/DepartmentContext";
import { ModalContext } from "../../context/ModalContext";

export const UserForm = ({ title }) => {
  const navigate = useNavigate();
  const { selectedUser, loading, CreateUser, UpdateUser } =
    useContext(UserContext);
  const { departments } = useContext(DepartmentContext);
  const { closeModal } = useContext(ModalContext);

  const [data, setData] = useState({
    _id: "",
    Username: "",
    Email: "",
    Password: "",
    Department: { Id: "" },
    isAdmin: false,
    Fullname: "",
    // ImgProfile: "",
  });

  useEffect(() => {
    //if its new
    if (!selectedUser) {
      setData({
        _id: "",
        Username: "",
        Email: "",
        Password: "",
        Department: { Id: "" },
        isAdmin: false,
        Fullname: "",
        // ImgProfile: "",
      });
    }

    //if its a updating
    if (selectedUser) {
      setData({
        _id: selectedUser._id,
        Username: selectedUser.Username,
        Email: selectedUser.Email,
        Password: "",
        Department: { Id: selectedUser.Department._id },
        isAdmin: selectedUser.isAdmin,
        Fullname: selectedUser.Fullname,
        // ImgProfile: selectedUser.ImgProfile,
      });
    }
  }, [selectedUser]);

  const handleInputChanged = (e) => {
    if (e.target.name === "isAdmin")
      setData({ ...data, [e.target.name]: e.target.checked });

    // if (e.target.name === "ImgProfile")
    //   setData({ ...data, [e.target.name]: e.target.files[0] });

    //create a object in this properties
    if (e.target.name === "Department")
      setData({ ...data, [e.target.name]: { Id: e.target.value } });

    if (
      e.target.name != "Department" &&
      e.target.name != "isAdmin" &&
      e.target.name != "ImgProfile"
    )


      setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //update a type
    if (selectedUser) {
      let save = await UpdateUser(data);
      if (save === "OK") return refreshPage();
      else alert(save);
    }
    //new type
    if (!selectedUser) {
      let save = await CreateUser(data);
      if (save === "OK") refreshPage();
      else alert(save);
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
      <form
        className="form form-task"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="form-header">
          <h2 className="form-title">{title}</h2>
          <span className="form-description">
            Manage your tasks properly and better
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="Fullname">Fullname</label>
          <input
            type="text"
            name="Fullname"
            id="Fullname"
            className="form-control"
            onChange={handleInputChanged}
            value={data.Fullname}
          />
          <div className="invalid-feedback">El Campo es requerido </div>
        </div>

        <div className="form-group">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="Username"
            id="Username"
            className="form-control"
            onChange={handleInputChanged}
            value={data.Username}
          />
          <div className="invalid-feedback">El Campo es requerido </div>
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            id="Email"
            className="form-control"
            onChange={handleInputChanged}
            value={data.Email}
          />
          <div className="invalid-feedback">El Campo es requerido </div>
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            name="Password"
            id="Password"
            className="form-control"
            onChange={handleInputChanged}
            value={data.Password}
          />
          <div className="group-tooltips">
            <div className="invalid-feedback">El Campo es requerido </div>
          </div>
        </div>

        {/* this is Department input */}
        <div className="form-group">
          <label htmlFor="Department">Department</label>
          <select
            name="Department"
            id="Department"
            className="form-control"
            onChange={handleInputChanged}
            value={data.Department.Id}
          >
            {departments && !loading ? (
              departments.length > 0 &&
              departments.map((department) => {
                return (
                  <option key={department._id} value={department._id}>
                    {department.nDepartment}
                  </option>
                );
              })
            ) : (
              <option>No data...</option>
            )}
          </select>
          <div className="invalid-feedback">value is required</div>
        </div>

        <div className="form-group">
          <div className="checkbox">
            <input
              type="checkbox"
              name="isAdmin"
              id="isAdmin"
              className="form-control"
              onChange={handleInputChanged}
              value={data.isAdmin}
            />{" "}
            Is an Admin?
          </div>
          <div className="group-tooltips">
            <div className="invalid-feedback">El Campo es requerido </div>
          </div>
        </div>

        {/* <div className="form-group">
          <label htmlFor="ImgProfile">ImgProfile</label>

          <input
            type="file"
            name="ImgProfile"
            id="ImgProfile"
            className="form-control"
            onChange={handleInputChanged}
          />
          <div className="group-tooltips">
            <div className="invalid-feedback">El Campo es requerido </div>
          </div>
        </div> */}

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
      </form>
    </>
  );
};
