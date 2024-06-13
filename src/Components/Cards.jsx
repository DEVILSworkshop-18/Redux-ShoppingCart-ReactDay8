import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleDece, handleInce, handleRemoves } from '../Features/CreateSlice';

const Cards = () => {
    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch()

    // total price and total quantity functions
    const totalPrice = data.reduce(
        (total, data) => total + data.price * (data.quantity || 1),
        0
      );
      const totalQuantity = data.reduce(
        (total, data) => total + (data.quantity || 1),
        0
      );

      //handle inc handles the increaement of the quantity and the values of the products at the same time
    const  handleInc=(id)=>{
        dispatch(handleInce(id))
    }
    const handleDec=(id)=>{
        dispatch(handleDece(id))
    }
    const handleRemove=(id)=>{
        dispatch(handleRemoves(id))
    }
    return (
        <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-12">
            {data.map((element, index) => {
              return (
                <div key={index}>
                  <div className="card mb-5 bg-bg-body-tertiary shadow overflow-auto ">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <div className="img-box text-center">
                          <img
                            src={element.images[0]}
                            className="img-fluid rounded mt-5 "
                            alt="..."
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 d-flex justify-content-center align-items-center ">
                        <div className="card-body">
                          <h3 className="card-title fs-1 ">{element.title}</h3>
                          <h5 className="card-title fs-2 ">{element.brand}</h5>
                          <p className="card-text fs-3 lead">
                            {element.description}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="card-body d-flex flex-wrap  justify-content-around align-items-center  mt-5 ">
                          <button
                            className="btn btn-outline-success btn-md-lg  fs-1"
                            onClick={() =>
                              handleInc(element.id)
                            }
                          >
                            {" "}
                            +
                          </button>
                          <p className="fs-1 border border-info p-1 m-1 rounded-1 ">
                            {element.quantity || 1}
                          </p>
                          <button
                            className="btn btn-outline-success btn-lg fs-1  "
                            onClick={() =>
                              handleDec(element.id)
                            }
                          >
                            -
                          </button>
                          <span className="fs-2 p-3 ">${element.price}.00</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-end  m-5 ">
                          <button
                            className=" btn btn-danger fs-2 "
                            onClick={() => handleRemove(element.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col-12">
                          <hr className="ms-2"></hr>
                          <div className="d-flex justify-content-between align-content-center flex-wrap   ">
                            <h3 className="text-muted">SHIPPING:</h3>
                            <h3>FREE</h3>
                          </div>
                          <div className="d-flex justify-content-between align-content-center flex-wrap  ">
                            <h3 className="text-muted">SUBTOTAL:</h3>
                            <h3>
                              $
                              {element.price * element.quantity ||
                                element.price}
                              .00
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="card bg-bg-body-tertiary shadow overflow-auto">
              <div className="card-body">
                <div className="d-flex justify-content-between align-content-center flex-wrap ">
                  <h3 className="fs-2">TOTAL:</h3>
                  <h3>${totalPrice}.00</h3>
                </div>
                <div className="d-flex justify-content-between align-content-center flex-wrap" >
                  <h3 className="fs-2">Total Quantity:</h3>
                  <h3>{totalQuantity}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default Cards;