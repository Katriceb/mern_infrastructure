
import { useState } from 'react';

function  NewResourcePage() { 
  const [showInput, setShowInput] = useState(false);

  return (
    <li>
      <div className="left">
        <h2
          onClick={(e) => {
            setShowInput(!showInput)
          }}>
          {NewResource.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editNewResourceText(NewResource.id, e)
              setShowInput(false)
            }
          }}
        />
        <label className="middle">
          Complete
          <input
          type="checkbox"
          checked={Newresource.completed}
          onChange={(e) => {
            complete(NewResource.id, e)
          }}
          />
        </label>
        <button
          checked={NewResource.completed}
          onClick={(e) => {
            deleteTodo(NewResource.id)
          }}
        >
          Delete NewResource
        </button>
      </div>
    </li>
  )
}

export default NewResourcePage