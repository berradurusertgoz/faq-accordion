
import { useState } from 'react';
import './App.css'
import { FaCheck } from "react-icons/fa";


const list = [
  {
    question: "Question 1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur officiis voluptates ac"
  },
  {
    question: "Question 2",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur officiis voluptates ac"
  },
  {
    question: "Question 3",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur officiis voluptates ac"
  }
]


function App() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null)
    } else {
      setSelected(i)
    }
  }

 return (
    <div className='page'>
      <div className='accordion'>
        {list.map((item, i) => (
          <div key={i} className='accordion-item'>
            <div className='accordion-header' onClick={() => toggle(i)}>
              <h3>{item.question}</h3>
              <FaCheck className='icon' />
            </div>
            {selected === i && (
              <p className='accordion-answer'>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


export default App
