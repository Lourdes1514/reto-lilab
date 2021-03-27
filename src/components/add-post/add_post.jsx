import React from 'react';

const AddPost = () => {
  return(
    
    <div>
      <h1>Agregar un nuevo Post</h1>

      <div>
        <label>Autor</label>
        <input type="text"/>
      </div>

      <div>
        <label>Decripción</label>
        <input type="text"/>
      </div>

      <div>
        <label>Hashtags</label>
        <input type="text"/>
      </div>

      <div>
        <label>link</label>
        <input type="text"/>
      </div>

      <button>Agregar Post</button>
    </div>

  )
}
export default AddPost