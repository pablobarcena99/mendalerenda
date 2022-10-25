import { CloudinaryContext, Image } from "cloudinary-react";
import React from "react";
import Card from "../components/Card";

export default function Galeria() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Card extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666690565/menda%20lerenda/menda1.jpg' />
          <Card extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666690765/menda%20lerenda/menda2.jpg' />
        </div>
        <div className='row'>
          <Card extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666690912/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg' />
          <Card extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666691056/menda%20lerenda/AL9nZEVNdTfjWGCBfonJ0C54wDuAFZbrequgIoAliu9iKxdqm0krdvsQWF3B8OYzN0hlzKDXlIuU0iCLLHXvmDtEz6TxEcDVRvkPWE2JrNlzEScI3rdpcSBKYaGjxJ-cVidlILyDAAR78vuEXqI4zkt_6rriMw_w1259-h944-no_tvtlqc.jpg' />
        </div>
      </div>
    </>
  );
}
