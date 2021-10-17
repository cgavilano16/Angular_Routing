import { Injectable} from "@angular/core";

@Injectable()
export class CourseService {
    findAllCourses = () =>
        fetch('http://localhost:8089/api/courses', {mode: 'no-cors'})
        .then(response => response.json())
}
