import { NavLink } from "react-router"

function UploadImage({setPage}) {

  return (
    <div>
      <NavLink className="newMap" to="/">Back</NavLink>
        <form action="http://127.0.0.1:5000/file" method='post' encType='multipart/form-data'>
          <input type='file' className='fileInput' accept='image/*' id='file' name='file'></input>
          <input type='submit'></input>
        </form>
    </div>
  )
}

export default UploadImage
