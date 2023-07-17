import { React, useContext } from "react";
import { Link } from "react-router-dom";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Loading } from "../../components/loading/Loading";

//import context
import { TaskContext } from "../../context/TaskContext";
import { CardType } from "../../components/cards/CardType";

export const TaskTypes = () => {
  const { types, loading } = useContext(TaskContext);

  /**
  * event select type
  */
  const toSelectType = () => {

  }
  return (
    <>
      <section className="container">
        <Aside />

        <div className="section-body">
          <Navbar />

          <div className="wrap-elemntary">
            <div className="wrap-child" style={{ width: "100%" }}>
              {!loading ? (
                types &&
                types.length > 0 && (
                  <div className="wrap-child" style={{ width: "100%" }}>
                    {types.map((item) => {
                      return (
                        <CardType
                          key={item._id}
                          type={item}
                          toSelectType={toSelectType}
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
