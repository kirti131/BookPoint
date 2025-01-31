import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here ! :)</span></h1>
        <p className='mt-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis ad maiores odio eaque earum magnam deserunt, voluptatum ratione sunt assumenda pariatur qui eius, mollitia rerum consequuntur obcaecati laborum dolor.
        Culpa rem nihil a dicta corrupti possimus ea quo quaerat excepturi nesciunt delectus eius, est repudiandae eligendi accusantium nostrum modi perspiciatis mollitia sit nam, vero provident corporis earum explicabo? Laboriosam!
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  
  )
}

export default Course
