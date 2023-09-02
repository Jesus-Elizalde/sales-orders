"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { GrAdd } from "react-icons/gr";
import { Customer } from "@/firebase/firestone/types/dbTypes";
import EditCustomerForm from "../Forms/EditCustomerForm";

type EditCustomerModalBtnProps = {
  data: Customer;
  customerId: string;
};

const EditCustomerModalBtn = ({
  data,
  customerId,
}: EditCustomerModalBtnProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleModal = () => setOpen((prev) => !prev);
  return (
    <>
      <button className="btn btn-primary " onClick={handleModal}>
        <GrAdd /> Add customer
      </button>
      <Modal open={open}>
        <EditCustomerForm
          handleModal={handleModal}
          customerData={data}
          customerId={customerId}
        />
      </Modal>
    </>
  );
};

export default EditCustomerModalBtn;
