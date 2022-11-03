import React from "react";
import { Component } from "react";
import Hero from "../components/Hero";
import ModernCard from "../components/ModernCard";



export default class Galeria extends Component {
  render() {
    return (
      <>
        <Hero name='GALERÍA' />
        <ModernCard
          gallery
          extImg={[
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862451/menda%20lerenda/AL9nZEVNdTfjWGCBfonJ0C54wDuAFZbrequgIoAliu9iKxdqm0krdvsQWF3B8OYzN0hlzKDXlIuU0iCLLHXvmDtEz6TxEcDVRvkPWE2JrNlzEScI3rdpcSBKYaGjxJ-cVidlILyDAAR78vuEXqI4zkt_6rriMw_w1259-h944-no_tvtlqc.jpg",
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg",
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
          ]}
          color='purple'
        />
        <ModernCard
          gallery
          extImg={[
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862451/menda%20lerenda/AL9nZEVNdTfjWGCBfonJ0C54wDuAFZbrequgIoAliu9iKxdqm0krdvsQWF3B8OYzN0hlzKDXlIuU0iCLLHXvmDtEz6TxEcDVRvkPWE2JrNlzEScI3rdpcSBKYaGjxJ-cVidlILyDAAR78vuEXqI4zkt_6rriMw_w1259-h944-no_tvtlqc.jpg",
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg",
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
          ]}
          color='black'
        />
        <ModernCard
          gallery
          extImg={[
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862451/menda%20lerenda/AL9nZEVNdTfjWGCBfonJ0C54wDuAFZbrequgIoAliu9iKxdqm0krdvsQWF3B8OYzN0hlzKDXlIuU0iCLLHXvmDtEz6TxEcDVRvkPWE2JrNlzEScI3rdpcSBKYaGjxJ-cVidlILyDAAR78vuEXqI4zkt_6rriMw_w1259-h944-no_tvtlqc.jpg",
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg",
            "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
          ]}
          color='green'
        />
        {/* <ModernCard
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg'
        color='black'
        />
        <ModernCard
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg'
        color='green'
        />
        <ModernCard
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg'
        color='black'
        />
        <ModernCard
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg'
        color='purple'
        />
        <ModernCard
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg'
        color='yellow'
        />
        <ModernCard
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg'
        color='green'
        />
      <ModernCard extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg' /> */}
      </>
    );
  }
}
