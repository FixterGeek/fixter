import React, { Component } from 'react'
import firebase from '../../../firebase';
import {createEdition, getEditions, deleteEdition} from '../../../services/course-service'
import toastr from 'toastr'
import moment from 'moment'

export default class AddCourse extends Component {
  state = {
    newCourse: {},
    file: null,
    link:null,
    editions:[]
  }

  componentDidMount(){
    this.getEditions()
  }

  getEditions = () => {
    getEditions()
    .then(editions=>{
      console.log(editions)
      this.setState({editions})
    })
  }

  drawEditions = (el,i) => {
    return  <tr key={i}>
    <td>
      <img src={el.cover} width="100" alt="cover" />
    </td>
      <td>
        {el._id}
      </td>
      <td>
        {el.title}
      </td>
      <td>
        {moment(el.startDate).format('LL') }
      </td>
      <td>
        {el.price}
      </td>
      <td 
      align="center"
      onClick={()=>this.removeEdition(el)}
      style={{cursor:"pointer"}}>
        ❌
      </td>
    </tr>
  }

  removeEdition = (edition) => {
    if(!window.confirm("Estas segura?")) return
    deleteEdition(edition._id)
    .then(()=>{
      toastr.info(`${edition.title} se ha borrado`)
      this.getEditions()
    })
  }

  addCourse = () => {
    //e.preventDefault()
    let {newCourse, link} = this.state
    newCourse.cover = link
    this.setState({newCourse})
    createEdition(newCourse)
    .then(course=>{
      toastr.success(`Curso ${course.title} creado`)
      this.getEditions()
    })
  }

  // addCourse = (e) => {
  //   e.preventDefault()
  //   firebase.database().ref('courses/')
  //     .push(this.state.newCourse)
  //     .then(r => {
  //       if (this.state.file) {
  //         let updates = {};
  //         firebase.storage()
  //           .ref(r.key)
  //           .child(this.state.file.name)
  //           .put(this.state.file)
  //           .then(s => {
  //             const link = s.downloadURL;
  //             let { newCourse } = this.state
  //             newCourse["photos"] = [link];
  //             updates[`/courses/${r.key}`] = newCourse;
  //             firebase.database().ref().update((updates));
  //           });
  //       }
  //     }).catch(e => console.log(e))
  // }

  onChange = (e) => {
    const { newCourse } = this.state
    newCourse[e.target.name] = e.target.value
    this.setState({ newCourse })
  }
  onChangeImage = (e) => {
    let { file } = this.state
    file = e.target.files[0]
    let reader = new FileReader()
    let link
    reader.readAsDataURL(file)
    reader.onload = () => {
      link = reader.result
      this.setState({ file, link })  
    }
  }

  uploadImage = (e) => {
    e.preventDefault()
    let {file} = this.state
    if(!file) return
    // need to update this to something self ereasable
    firebase.storage().ref('covers').child(file.name).put(file)
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>this.setState({link}, ()=>this.addCourse()))
  }


  render() {
    let {editions} = this.state
    return (
      <div style={{ paddingTop: '60px', maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>

        <div className="aplicacion">
          <div className="card_form">
            <h5 style={{ textAlign: 'center' }}>Agregar curso</h5>
            <hr className="division" />
            <form onSubmit={this.uploadImage}>
              <div className="formgroup">
                <div className="inp">
                  <input type="text" name="title" className="formcontrol" onChange={this.onChange} placeholder="Nombre del curso" />
                </div>
              </div>
              <div className="formgroup">
                <div className="">
                  <textarea style={{border:"1px solid"}} cols="10" rows="15" onChange={this.onChange} type="text" name="body" className="formcontrol" placeholder="Descripción" />
                </div>
              </div>
              <div className="formgroup">
                <p>Fecha de inicio: </p>
                <div className="inp">
                  <input type="date" onChange={this.onChange} className="formcontrol" name="startDate" />
                </div>
              </div>
              {/* <div className="formgroup">
                <div className="inp">
                  <input type="text" onChange={this.onChange} name="schedule" className="formcontrol" placeholder="Días de curso y horario." />
                </div>
              </div> */}
              <div className="formgroup">
                <div className="inp">
                  <input type="text" onChange={this.onChange} name="address" className="formcontrol" placeholder="Ubicación" />
                </div>
              </div>
              <div className="formgroup">
                <div className="inp">
                  <input type="number" onChange={this.onChange} name="price" className="formcontrol" placeholder="Precio" />
                </div>
              </div>
              <div className="formgroup">
                <div className="inp">
                  <input type="file" onChange={this.onChangeImage} accept="image/*" name="file" className="formcontrol" placeholder="Ubicación" />
                  <img width="200" src={this.state.link} alt="preview" />
                </div>
              </div>
              <button className="btn_start" type="submit">Enviar</button>
            </form>
          </div>
        </div>

        <table border="1" width="100%">
        <tr>
          <th>
            Cover
          </th>
          <th>
            <strong>
              Id
            </strong>
          </th>
          <th>
            <strong>
              Title
            </strong>
          </th>
          <th>
            <strong>
              Date
            </strong>
          </th>
          <th>
            <strong>
              Price
            </strong>
          </th>
          <th>
            <strong>
              Remove
            </strong>
          </th>
        </tr>
          {editions.map(this.drawEditions)}
      </table>

      </div>
    )
  }
}
