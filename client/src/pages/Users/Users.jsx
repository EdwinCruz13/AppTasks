import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/cards/Card";
import { Loading } from "../../components/loading/Loading";
import { Modal } from "../../components/modals/Modal";
import { UserForm } from "../../components/forms/UserForm";

//import context
import { UserContext } from "../../context/UserContext";
import { ModalContext } from "../../context/ModalContext";

//import context

export const Users = () => {
  const navigate = useNavigate();
  const { users, selectedUser, GetUser, loading, setNew } = useContext(UserContext);
  const { openModal } = useContext(ModalContext);

  const [title, setTitle] = useState("New user");

  /**
   * event click in order to create a new user
   * open the modal
   */
  const handleSaveClick = () => {
    setTitle("Create a new user");
    setNew();
    openModal();
  };

  /**
   * select an especifi card
   * @param {*} e 
   */
  const toSelectUser = async(e) => {
    let _id = e.currentTarget.getAttribute("data-item");
    await GetUser(_id);

    setTitle("Update the user");
    openModal();

    

  };

  return (
    <>
      <Modal children={ <UserForm title={title} /> } title={title} />
      <section className="container">
        <Aside />

        <div className="section-body">
          <Navbar />

          <div className="wrap-elemntary">
            <div
              className="filter-option-header"
              style={{ justifyContent: "flex-end", marginTop: "2.1rem" }}
            >
              <section className="options-row">
                <div className="group-filter-item">
                  <div>
                    <label
                      htmlFor="FF"
                      className="col-form-label"
                      style={{ padding: "1.14rem" }}
                    ></label>
                    <Link className="actions" onClick={handleSaveClick}>
                      <i className="fa fa-floppy-o" aria-hidden="true"></i> New
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div className="wrap-child" style={{ width: "100%" }}>
              {!loading ? (
                users &&
                users.length > 0 && (
                  <div className="wrap-child" style={{ width: "100%" }}>
                    {users.map((item) => {
                      /* Date format dd/mm/yyyy */
                      let Stardate = new Date(item.createdAt);
                      let startDateMDY = `${Stardate.getDate()}/${Stardate.getMonth() + 1}/${Stardate.getFullYear()}`;

                      return (
                        <Card
                          key={item._id}
                          _id={item._id}
                          Title={item.Fullname}
                          SubTitle={item.isAdmin ? "Admin-" + item.Username : item.Username}
                          Description={item.Department.nDepartment + "\n\n" + "Created at: " + startDateMDY}
                          Image={""}
                          Label1={item.Email}
                          Label2={""}
                          Label3={""}
                          action={toSelectUser}
                        />
                      );
                    })}
                  </div>
                )
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
