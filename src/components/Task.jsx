import { useEffect, useState } from "react";
import PropTypes from 'prop-types';



const Task = (props) => {
  console.log(props.data)
  
  useEffect(() => {
    setitems(props.data)
  },[props.data])


  const [showForm, setshowform] = useState(true);
  const [showNew, setshowNew] = useState(true);
  const [showDelete, setshowDelete] = useState(true);
  const [toggleSubmit, settoggleSubmit] = useState(true);
  const [isEditItem, setisEditItem] = useState(null);
  const [showList, setshowList] = useState(true);
  //const [editMessage, seteditMessage] = useState(false);
  const [deleteMessage, setdeleteMessage] = useState(false);
  const [setdeleteMessagesuccess] = useState(false);
  const [inputTitle, setinputTitle] = useState("");
  const [inputDesc, setinputDesc] = useState("");
  const todos = [
    {
      id: 1,
      title: "check order release",
      description: "check order appropriatly and report",
    },
    {
      id: 2,
      title: "go to the market",
      description: "going to buy footstuffs",
    },
   
  ];

  const [items, setitems] = useState(todos);
  
  
  //   HANDLING INPUT FIELDS
  const handleInput = (e) => {
    setinputTitle(e.target.value);
  };
  const handleInputdesc = (e) => {
    setinputDesc(e.target.value);
  };
  //   HANDLING INPUT FIELDS

  //   SUBMITTING FORM
  const handleSubmit = (e) => {
    setshowList(true)
    setshowNew(true);
    e.preventDefault();

    if (!inputTitle || !inputDesc) {
      alert("fill data");
      showList(false);
    } else if (inputTitle && !toggleSubmit) {
      setitems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, title: inputTitle, description: inputDesc };
          }
          return elem;
        })
      );
      setinputTitle("");
      setinputDesc("");
      settoggleSubmit(true);
      setshowform(false);
      setshowDelete(true);
    } else {
      const allinputTitle = {
        id: new Date().getTime().toString(),
        title: inputTitle,
        description: inputDesc,
      };
      setitems([allinputTitle, ...items]);
      setinputTitle("");
      setinputDesc("");
      setshowform(false);
    }
  };
  //   SUBMITTING FORM

  //   DELETE
  const handleDelete = (index) => {
    console.log(index);
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setdeleteMessage(true);

    setTimeout(() => {
      setitems(updatedItems);
      setdeleteMessage(false);
    }, 2000);
    setdeleteMessagesuccess(false);
  };
  //   DELETE

  //   EDIT
  const handleEdit = (id) => {
    setshowList(false);
    setshowDelete(false);
    setshowNew(false);
    setshowform(true);

    settoggleSubmit(false);
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setinputTitle(newEditItem.title);
    setinputDesc(newEditItem.description);
    // setshowDelete(true)

    setisEditItem(id);
    console.log(newEditItem);
  };
  //   EDIT

  // ADD NEW TASK
  const handleAdd = () => {
    //   alert("hello")
    setshowform(true);
    setshowList(true);
    setshowNew(false);
  };
  // ADD NEW TASK
  return (
    <>
      {showNew ? (
        <div className="container">
          <div className="col-12 text-end">
            <button className="btn btn-primary " onClick={handleAdd}>
              New Task
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {showForm ? (
        <>
          <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
            <div className="row">
              <div className="text-center">
                <h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
              </div>
              <form className="col-12 p-2" onSubmit={handleSubmit}>
                <label htmlFor="title" className="ms-2">
                  Enter Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className="w-100 my-1 p-2"
                  onChange={handleInput}
                  value={inputTitle}
                />
                <label className="my-2" htmlFor="description">
                  Enter Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  className="w-100 my-1 p-2"
                  onChange={handleInputdesc}
                  value={inputDesc}
                />
                {/* <div className="text-center"> */}
                {toggleSubmit ? (
                  <button className="btn btn-primary my-2">Save</button>
                ) : (
                  <button className="btn btn-primary my-2">Update</button>
                )}
                {/* </div> */}
              </form>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {showList ? (
        <div className="container py-1">
          {deleteMessage ? (
            <p className="text-center text-danger">Item Deleted Successfully</p>
          ) : (
            ""
          )}
          {items.map((elem) => {
            return (
              <div
                className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
                key={elem.id}
              >
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <div>
                    <h4>{elem.title}</h4>
                    <p>{elem.description}</p>
                  </div>

                  <div className="d-flex flex-row-reverse">
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => handleEdit(elem.id)}
                    >
                      Edit
                    </button>
                    {showDelete ? (
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleDelete(elem.id)}
                      >
                        Delete
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Task.propTypes = {
  data: PropTypes.object
};

export default Task;
