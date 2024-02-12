import React from 'react'

const AccordianItem = ({faqs, onHandleOpen, onHandleClose}) => {
    console.log(faqs)
  return (
    <>
    {faqs.map((item)=>{
        return(
        <div className={`${item.question_open ? 'accordian-outer-container' : 'accordian-outer-container-simple'}`} key={item.id}>
        <div className='accordian-container'>
            <div className='accrodian-heading'>
                <p>{item.question_no}</p>
                <p>{item.question}</p>
            </div>
            <button className={`btn-class ${item.question_open ? '' : 'hiden'}`} onClick={()=>onHandleClose(item.id)}>-</button>
            <button className={`btn-class ${item.question_open ? 'hiden' : ''}`} onClick={()=>onHandleOpen(item.id)}>+</button>
        </div>
        <p className={`${item.question_open || "hiden"}`}>{item.answer}</p>
    </div>)
    })}
    </>
  )
}

export default AccordianItem