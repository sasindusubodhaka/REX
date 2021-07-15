import React ,{useState} from 'react';
import * as _ from "lodash";
import "./Service.css";
import axios from 'axios';
import { useEffect } from 'react';
let initFormValue = {
    name: "",
    description: "",
  };
  let initError = {
    nameErrors: {},
    descriptionErrors: {},
  };

const ADD_SERVICE_URL = "http://localhost:8080/rex/addService";
const GET_SERVICE ="http://localhost:8080/rex/getServices"

function Service(){
    const [formValue, setFormValue] = useState({ ...initFormValue });
    const [errors, setErrors] = useState({ ...initError });
    const [services,setServices]=useState([{}]);

     useEffect(() => {
        const getServices=axios.get(GET_SERVICE);
        getServices.then(res=>{
            if(res.status===200){                
               setServices(res.data);
              
            }
        })
      }, [services]);

    const onSubmit = (e) => {
        console.log("onsubmit");
        e.preventDefault();
        const isValid = validation();
    
        if (isValid) {
          console.log("pass");
          let data ={name: formValue.name, description: formValue.description}
         const request = axios.post(ADD_SERVICE_URL,data);

         request.then(res=>{
             if(res.status===200){
                 alert('successfully added the service');
             }

         }).catch(e=>{
             alert("service is already exist");
         })

        } else {
          console.log("fail");
        }
      };

      const validation = () => {
        let localErrors = _.cloneDeep(errors); //make a seperate local errors object and assign it to localErrors
        let isValid = true;
    
        //validating name
        if (formValue.name.trim().length < 1) {
          let nameMissing = Object.assign({}, { missing: "service name is missing" });
          localErrors.nameErrors = nameMissing;
          isValid = false;
        } else {
        
          localErrors.nameErrors.missing = null;
        }
        // validating description
        if (formValue.description.trim().length < 1) {
            let desMissing = Object.assign({}, { missing: "description is missing" });
            localErrors.descriptionErrors = desMissing;
            isValid = false;
          } else {
             localErrors.descriptionErrors.missing = null;
          }
    
        setErrors({ ...localErrors }); //push all errors to errors object
        return isValid;
      };

      const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;
        setFormValue({ ...formValue, [name]: value });
      };
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">

                <div className="col">
                <div className="card">
                            <div className="title">
                            <h3 className="text-center" style={{color:'black'}}>Add new service</h3>
                            </div>
                            <div className="card-body">
                            <form>
                                {/* service name */}
                                <div className="input-group mb-3">
                                <span className="input-group-text">Service Name:</span>
                                <input
                                    placeholder="Service Name"
                                    name="name"
                                    className="form-control"
                                    value={formValue.name}
                                    onChange={onMyChange}
                                ></input>
                                </div>
                                {/* name errors */}
                                <div className="mb-2">
                                {Object.keys(errors.nameErrors).map((key, index) => {
                                    return (
                                    <div key={index} style={{ color: "red" }}>
                                        {errors.nameErrors[key]}
                                    </div>
                                    );
                                })}
                                </div>

                                {/* Description */}
                                <div className="input-group mb-3">
                                <span className="input-group-text">Description</span>
                                <textarea
                                    type="text"
                                    placeholder="Service Description"
                                    name="description"
                                    className="form-control"
                                    value={formValue.description}
                                    onChange={onMyChange}
                                ></textarea>
                                </div>
                                {/* Description Errors */}
                                <div className="mb-2">
                                {Object.keys(errors.descriptionErrors).map((key, index) => {
                                    return (
                                    <div key={index} style={{ color: "red" }}>
                                        {errors.descriptionErrors[key]}
                                    </div>
                                    );
                                })}
                                </div>

                                <div className="input-group mb-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={onSubmit}
                                    style={{ width: "100%" }}
                                >
                                    Save
                                </button>
                                </div>                                
                            </form>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card">
                            <div className="title">
                              <h3 className="text-center" style={{color:'black'}}>Existing Service list</h3>
                            </div>
                            <div className="card-body">
                                <table border="1px">
                                            <tr>    
                                                    <th> Service Id </th>                                       
                                                    <th> Service Name </th>
                                                    <th> Description </th>
                                                    <th></th>
                                                                
                                            </tr>
                                            {
                                            services.map((value, index) => {
                                                return (
                                                    <tr style={{marginLeft:'5px'}}>
                                                        <td>
                                                        <label htmlFor="Days"> {value.id} </label>
                                                        </td>
                                                        <td>
                                                        <label htmlFor="Days"> {value.name} </label>
                                                        </td>
                                                        <td>
                                                        <label htmlFor="Time"> {value.description}</label>
                                                        </td>
                                                        <td>
                                                        <button className="btn btn-primary">Update</button>
                                                        </td>

                                                    </tr>
                                                )

                                            })
                                        }
                                </table>
                            </div>
                       </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Service;