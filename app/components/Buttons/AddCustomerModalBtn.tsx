"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import AddCustomerForm from "../Forms/AddCustomerForm";
import { type } from "os";
import { GrAdd } from "react-icons/gr";

const AddCustomerModalBtn = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleModal = () => setOpen((prev) => !prev);
  return (
    <>
      <button className="btn btn-primary " onClick={handleModal}>
        <GrAdd /> Add customer
      </button>
      <Modal open={open}>
        <AddCustomerForm handleModal={handleModal} />
      </Modal>
    </>
  );
};

export default AddCustomerModalBtn;
