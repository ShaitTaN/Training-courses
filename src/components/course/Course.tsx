import { FC } from 'react'
import { IProduct } from '../../models/IProduct'
import './course.scss'
import CourseModule from './CourseModule'

interface Props{
	course: IProduct
}

const Course: FC<Props> = ({course}) => {

	return (
		<div className='course'>
			<h2 className="course__title">{course.title}</h2>
			<div className="course__modules">
				<CourseModule number={1} subjects={course.specializedSubjects}/>
				<CourseModule number={2} subjects={course.specializedSubjects}/>
			</div>
		</div>
	)
}

export default Course