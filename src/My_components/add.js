import React from 'react'

export default function add() {
    return (
    <>   
    <label for="formGroupExampleInput" class="form-label">Title</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/> <br/>
    <label for="formGroupExampleInput2" class="form-label">Discription</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/><br />
    <input type="submit" value="submit"/>
    </>
    )
}
