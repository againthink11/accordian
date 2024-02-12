import { useState } from "react";
import AccordianItem from "./components/AccordianItem/AccordianItem";
function App() {
  const faqs = [
    {
      id: 1,
      question_no: '01',
      question: 'Where are these chairs assembled',
      question_open: false,
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias est ducimus consequuntur, fugiat assumenda asperiores consectetur laboriosam laborum, aliquam eligendi porro iusto nemo tempora soluta error enim praesentium! Dolores.'
    },
    {
      id: 2,
      question_no: '02',
      question_open: false,
      question: 'Where are these chairs assembled',
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias est ducimus consequuntur, fugiat assumenda asperiores consectetur laboriosam laborum, aliquam eligendi porro iusto nemo tempora soluta error enim praesentium! Dolores.'
    },
    {
      id: 3,
      question_no: '03',
      question_open: false,
      question: 'Where are these chairs assembled',
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias est ducimus consequuntur, fugiat assumenda asperiores consectetur laboriosam laborum, aliquam eligendi porro iusto nemo tempora soluta error enim praesentium! Dolores.'
    },
  ]
  const [data, setData] = useState(faqs);
  const onHandleOpen = (id) => {
    setData(data.map((item) => item.id === id ? {...item, question_open : true} : {...item, question_open:false}))
    //  console.log(data.map((item) => item.id === id ? {...item, question_open : true} : item), 'data')
    console.log(id, data)
  }
  const onHandleClose = (id) => {
    setData(data.map((item) => item.id === id ? {...item, question_open : false} : {...item, question_open:false}))
    //  console.log(data.map((item) => item.id === id ? {...item, question_open : true} : item), 'data')
    console.log(id, data)
  }
  return (
    <div className="app-component">
      <AccordianItem faqs={data} onHandleOpen={onHandleOpen} onHandleClose={onHandleClose}/>
    </div>
  );
}

export default App;
