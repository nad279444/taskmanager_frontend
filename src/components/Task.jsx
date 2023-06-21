import { useState } from "react";

function Task() {
  const [inputTitle, setinputTitle] = useState("");
  const [inputDesc, setinputDesc] = useState("");
  const [items, setitems] = useState([
    {
      id: "001",
      name: "Default Task",
      desc: "Default Description",
      status: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTitle || !inputDesc) {
      alert("fill data");
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputTitle,
        desc: inputDesc,
      };
      setitems([allInputData, ...items]);
    }
  };

  const handleInputTitle = (e) => {
    setinputTitle(e.target.value);
  };

  const handleInputDesc = (e) => {
    setinputDesc(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="col-12 text-end">
          <button className="btn btn-primary ">Add New Task</button>
        </div>
      </div>
      <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="text-center">
            <h2></h2>
          </div>

          <form className="col-12 p-2" onSubmit={handleSubmit}>
            <label htmlFor="title" className="my-2">
              Enter Title
            </label>
            <input
              type="text"
              name="Title"
              id="title"
              placeholder="Title"
              className="w-100 my-1 p-2"
              onChange={handleInputTitle}
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
              onClick={handleInputDesc}
              value={inputDesc}
            />
            <button className="btn btn-primary my-2">Save</button>
          </form>
          {items.map((elem) => {
            return (
              <div
                className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
                key={elem.id}
              >
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{elem.name}</h5>
                    <p>{elem.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Task;
