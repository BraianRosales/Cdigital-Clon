import React from "react";

const price = "$176,99";

const Product = () => {
  return (
    <div>
      <div className="card card-w">
        <img src="img/criollitas.jpg" className="card-img-top" alt="IMG" />
        <div className="card-body">
          <h5 className="card-title">Criollitas</h5>
          <p className="card-text">Galletitas . Criollitas Paq 507 Grm.</p>
          <h5 className="text-success">Precio regular</h5>
          <span className="price fs-3">{price}</span>
          <br></br>
          <a href="#" className="btn btn-primary mt-3">
            Agregar
          </a>
          <a href="#" className="btn btn-primary mt-3 ms-2">
            Remover
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
